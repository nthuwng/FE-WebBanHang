import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./SliderComponent.css";
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "100px", zIndex: 2, color: "white" }}
      onClick={onClick}>
      <LeftOutlined className="custom-arrow"  />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: "100px", zIndex: 2, color: "white" }}
      onClick={onClick}>
      <RightOutlined className="custom-arrow" />
    </div>
  );
};
export const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arrImages.map((image) => {
          return <Image key={image} src={image} alt="slider" preview={false} />;
        })}
      </Slider>
      
    </div>
  );
};
