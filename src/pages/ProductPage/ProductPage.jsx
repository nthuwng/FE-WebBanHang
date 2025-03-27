import product_page_slider1 from "../../assets/images/Sliders/product_page_slider1.png";
import product_page_slider2 from "../../assets/images/Sliders/product_page_slider2.png";
import product_page_slider3 from "../../assets/images/Sliders/product_page_slider3.png";
import product_page_slider4 from "../../assets/images/Sliders/product_page_slider4.png";

import { useEffect, useState } from "react";
import {
  fetchProductAPI,
  fetchProduct_Name_API,
} from "../../services/api.service";
import ProductCard from "../../components/common/ProductCard/ProductCard"; // Import component mới
import "./ProductPage.css"; // CSS cho ProductPage
import { SliderComponent } from "../../components/SliderComponent/SliderComponent";

import CategoryIcons from "../../components/common/CategoryIcons/CategoryIcons";

const ProductPage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  const loadProduct = async () => {
    try {
      setLoading(true);
      const res =
        category === "all"
          ? await fetchProductAPI(page, limit)
          : await fetchProduct_Name_API(category, limit, category);

      setTimeout(() => {
        if (Array.isArray(res.data)) {
          setDataProduct(res.data);
        } else {
          setDataProduct([]);
        }
        setLoading(false); // Ẩn spinner khi dữ liệu đã được cập nhật
      }, 200); // Độ trễ 2 giây (bạn có thể thay đổi giá trị này)
    } catch (error) {
      console.error("Lỗi khi gọi API", error);
      setDataProduct([]);
      setLoading(false); // Ẩn spinner nếu có lỗi
    }
  };

  useEffect(() => {
    loadProduct();
  }, [category, page, limit]);

  return (
    <div className="product-container-page">
      <SliderComponent
        arrImages={[
          product_page_slider1,
          product_page_slider2,
          product_page_slider3,
          product_page_slider4,
        ]}
        customClass="product-slider"
      />

      <CategoryIcons setCategory={setCategory}/>

      {loading ? (
        <div style={{ height: "1000px" }}>Loading Product.....</div>
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
