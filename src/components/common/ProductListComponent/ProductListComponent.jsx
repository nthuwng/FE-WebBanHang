import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductComponent = ({ apiFunction, categoryName }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await apiFunction(page, limit);
        console.log(res);
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
    fetchProduct();
  }, [apiFunction, page, limit]);
  return (
    <div className="home-page-iphone-card-container">
      <h2 className="home-page-iphone-card-h2">{categoryName}</h2>
      <div className="home-page-iphone-card">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="home-page-product-grid-page">
            {dataProduct.map((product) => (
              <div className="product-card" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComponent;
