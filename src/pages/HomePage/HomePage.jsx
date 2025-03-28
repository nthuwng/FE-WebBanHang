import slider1 from "../../assets/images/Sliders/slider1.png";
import slider2 from "../../assets/images/Sliders/slider2.png";
import slider3 from "../../assets/images/Sliders/slider3.png";
import { SliderComponent } from "../../components/common/SliderComponent/SliderComponent.jsx";
import ProductListComponent from "../../components/common/ProductListComponent/ProductListComponent.jsx";
import { fetchProduct_Name_API } from "../../services/api.service";

import "./HomePage.css";
import {
  ProductCategoryIphoneComponent,
  ProductCategorySamsungComponent,
  ProductCategoryXiaomiComponent,
  ProductCategoryOppoComponent,
} from "../../components/common/ProductCategoryComponent/ProductCategoryComponent.jsx";
const HomePage = () => {
  return (
    <>
      <SliderComponent
        arrImages={[slider1, slider2, slider3]}
        customClass="home-slider"
      />

      <div className="Dienthoai-home_page_card">
        <div className="Iphone-home_page_card">
          <ProductCategoryIphoneComponent />
          <ProductListComponent
            categoryName="Iphone"
            apiFunction={(page, limit) =>
              fetchProduct_Name_API("apple", page, limit)
            }
          />
        </div>

        <div className="Samsung-home_page_card">
          <ProductCategorySamsungComponent />
          <ProductListComponent
            categoryName="Samsung"
            apiFunction={(page, limit) =>
              fetchProduct_Name_API("samsung", page, limit)
            }
          />
        </div>
        <div className="Samsung-home_page_card">
          <ProductCategoryXiaomiComponent />
          <ProductListComponent
            categoryName="Xiaomi"
            apiFunction={(page, limit) =>
              fetchProduct_Name_API("xiaomi", page, limit)
            }
          />
        </div>
        <div className="Samsung-home_page_card">
          <ProductCategoryOppoComponent />
          <ProductListComponent
            categoryName="Oppo"
            apiFunction={(page, limit) =>
              fetchProduct_Name_API("oppo", page, limit)
            }
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
