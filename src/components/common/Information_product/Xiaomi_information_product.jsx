import React from "react";

const Xiaomi_information_product = (props) => {
  const { category } = props;

  return <>{category === "Xiaomi" && <div>văn bản Xiaomi</div>}</>;
};

export default Xiaomi_information_product;
