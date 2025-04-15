import slider1 from "../../../assets/images/Sliders/slider1.png";
import slider2 from "../../../assets/images/Sliders/slider2.png";
import slider3 from "../../../assets/images/Sliders/slider3.png";
import { SliderComponent } from "../../../components/common/SliderComponent/SliderComponent.jsx";
import ProductListComponent from "../../../components/common/ProductListComponent/ProductListComponent.jsx";
import { fetchProduct_Name_API } from "../../../services/api.service";

import "./HomePage.css";
import {
  ProductCategoryIphoneComponent,
  ProductCategorySamsungComponent,
  ProductCategoryXiaomiComponent,
  ProductCategoryOppoComponent,
} from "../../../components/common/ProductCategoryComponent/ProductCategoryComponent.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "antd";
const HomePage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <div>
        <SliderComponent
          arrImages={[slider1, slider2, slider3]}
          customClass="home-slider"
        />
        <div className="Dienthoai-noibat-nhat">
          <h1>Điện thoại nổi bật nhất</h1>
          <div>
            <Button
              href="/products"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                backgroundColor: "#F3F4F6",
              }}>
              Xem tất cả
            </Button>
          </div>
        </div>
        <div>
          <div
            className="Dienthoai-home_page_card "
            data-aos="fade-up"
            style={{ backgroundColor: "#F3F4F6" }}>
            <div className="Iphone-home_page_card">
              <ProductCategoryIphoneComponent />
              <ProductListComponent
                categoryName="Iphone"
                apiFunction={(page, limit) =>
                  fetchProduct_Name_API("apple", page, limit)
                }
              />
            </div>
            <div className="Samsung-home_page_card" data-aos="fade-up-right">
              <ProductCategorySamsungComponent />
              <ProductListComponent
                categoryName="Samsung"
                apiFunction={(page, limit) =>
                  fetchProduct_Name_API("samsung", page, limit)
                }
              />
            </div>
            <div className="Samsung-home_page_card" data-aos="fade-up-left">
              <ProductCategoryXiaomiComponent />
              <ProductListComponent
                categoryName="Xiaomi"
                apiFunction={(page, limit) =>
                  fetchProduct_Name_API("xiaomi", page, limit)
                }
              />
            </div>
            <div className="Samsung-home_page_card" data-aos="fade-down">
              <ProductCategoryOppoComponent />
              <ProductListComponent
                categoryName="Oppo"
                apiFunction={(page, limit) =>
                  fetchProduct_Name_API("oppo", page, limit)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
