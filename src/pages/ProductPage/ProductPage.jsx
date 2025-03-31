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
import { SliderComponent } from "../../components/common/SliderComponent/SliderComponent";

import CategoryIcons from "../../components/common/CategoryIcons/CategoryIcons";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Iphone_information_product from "../../components/common/Information_product/Iphone_information_product";
import Oppo_information_product from "../../components/common/Information_product/Oppo_information_product";
import Samsung_information_product from "../../components/common/Information_product/Samsung_information_product";
import Xiaomi_information_product from "../../components/common/Information_product/Xiaomi_information_product";
import Information_product_all from "../../components/common/Information_product/Information_product_all";
import Information_product_main from "../../components/common/Information_product/Information_product_main/Information_product_main";

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
        setLoading(false);
      }, 200);
    } catch (error) {
      console.error("Lỗi khi gọi API", error);
      setDataProduct([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [category, page, limit]);

  const handleProductCategoryClick = (category) => {
    if (category === "all") {
      console.log(category);
      setCategory("all");
    } else {
      setCategory(category);
    }
  };


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
      {/* menu chon danh muc */}
      <CategoryIcons
        setCategory={handleProductCategoryClick}
        category={category}
      />

      <div className="navigate-link-product-page">
        <Link to="/" className="link-product-page">
          Trang chủ
        </Link>{" "}
        /
        <Link
          to="/products"
          className={`link-product-page ${
            category === "all"
              ? "link-product-page-selected"
              : "link-product-page-Unselected"
          }`}
          onClick={() => {
            setCategory("all");
          }}>
          Điện thoại
        </Link>
        {category !== "all" && (
          <>
            /{" "}
            <Link
              className={`link-product-page ${
                category !== "all"
                  ? "link-product-page-selected"
                  : "link-product-page-Unselected"
              }`}>
              {category}
            </Link>
          </>
        )}
      </div>

      {loading ? (
        <div className="Loading_Product_product_page">Loading Product.....</div>
      ) : (
        <div className="product-grid-page">
          {dataProduct.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      <div className="text_infomation_product_to_category">
      <Information_product_main category={category} />
      </div>
    </div>
  );
};

export default ProductPage;
