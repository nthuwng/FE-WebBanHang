import { useEffect, useState } from "react";
import { fetchProductAPI } from "../../services/api.service";
import ProductComponent from "../../components/ProductComponent/ProductComponent";// Import component mới
import "./ProductPage.css"; // CSS cho ProductPage

const ProductPage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(true);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const res = await fetchProductAPI(page, limit);

      if (Array.isArray(res.data)) {
        setDataProduct(res.data);
      } else if (res.data && res.data.data && Array.isArray(res.data.data)) {
        setDataProduct(res.data.data);
      } else {
        setDataProduct([]);
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      setDataProduct([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [page, limit]);

  return (
    <div className="container">
      <h1 className="title">Product List</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {dataProduct.map((product) => (
            <ProductComponent key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
