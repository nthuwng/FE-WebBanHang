import slider1 from "../../assets/images/Sliders/slider1.png";
import slider2 from "../../assets/images/Sliders/slider2.png";
import slider3 from "../../assets/images/Sliders/slider3.png";

import { SliderComponent } from "../../components/SliderComponent/SliderComponent.jsx";

const HomePage = () => {
  return (
    <>
      <SliderComponent arrImages={[slider1, slider2, slider3]} />
    </>
  );
};

export default HomePage;
