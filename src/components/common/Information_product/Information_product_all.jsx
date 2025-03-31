import React from "react";

const Information_product_all = (props) => {
  const { category } = props;

  return <>{category === "all" && <div>văn bản điện thoại</div>}</>;
};

export default Information_product_all;
