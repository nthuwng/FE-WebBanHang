import slider1 from "../../assets/images/Sliders/slider1.png";
import slider2 from "../../assets/images/Sliders/slider2.png";
import slider3 from "../../assets/images/Sliders/slider3.png";
import { SliderComponent } from "../../components/SliderComponent/SliderComponent.jsx";
import ProductListComponent from "../../components/common/ProductListComponent/ProductListComponent.jsx";
import { fetchProduct_Name_API } from "../../services/api.service";

import "./HomePage.css";
import {
  ProductCategoryIphoneComponent,
  ProductCategorySamsungComponent,
} from "../../components/common/ProductCategoryComponent/ProductCategoryComponent.jsx";
const HomePage = () => {
  return (
    <>
      <SliderComponent arrImages={[slider1, slider2, slider3]} />

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
      {/* <ProductListComponent
        categoryName="Xiaomi"
        apiFunction={(page, limit) =>
          fetchProduct_Name_API("xiaomi", page, limit)
        }
      />
      <ProductListComponent
        categoryName="Oppo"
        apiFunction={(page, limit) =>
          fetchProduct_Name_API("oppo", page, limit)
        }
      /> */}
    </>
  );
};

export default HomePage;
