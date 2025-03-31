import React from "react";
import Information_product_all from "../Information_product_all";
import Iphone_information_product from "../Iphone_information_product";
import Oppo_information_product from "../Oppo_information_product";
import Samsung_information_product from "../Samsung_information_product";
import Xiaomi_information_product from "../Xiaomi_information_product";

const Information_product_main = ({ category }) => {
  return (
    <div>
      {/* hien thi van ban tat ca san pham */}
      <Information_product_all category={category} />
      {/* hien thi van ban iphone */}
      <Iphone_information_product category={category} />
      {/* hien thi van ban oppo */}
      <Oppo_information_product category={category} />
      {/* hien thi van ban samsung */}
      <Samsung_information_product category={category} />
      {/* hien thi van ban xiaomi */}
      <Xiaomi_information_product category={category} />
    </div>
  );
};

export default Information_product_main;
