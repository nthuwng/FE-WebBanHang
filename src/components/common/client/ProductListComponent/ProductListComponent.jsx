import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListComponent.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import SVGDefs from "../../../../assets/svg/common-defs";
import AOS from "aos";
import "aos/dist/aos.css";
const ProductComponent = ({ apiFunction, categoryName }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await apiFunction(page, limit);
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

  useEffect(() => {
    if (dataProduct.length > 0) {
      AOS.refreshHard();
    }
  }, [dataProduct]);
  return (
    <div className="product-list-component-card-container">
      <SVGDefs />
      <div className="product-list-component-card">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-list-component-card-grid-page">
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
