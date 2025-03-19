import { useEffect, useState } from "react";
import { fetchProductAPI } from "../../services/api.service";
import ProductCard from "../../components/common/ProductCard/ProductCard";// Import component mới
import "./ProductPage.css"; // CSS cho ProductPage

const ProductPage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
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
    <div className="product-container-page">
      <h1 className="product-title-page" style={{marginTop: "10px",fontSize: "50px"}}>Product List</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid-page">
          {dataProduct.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
