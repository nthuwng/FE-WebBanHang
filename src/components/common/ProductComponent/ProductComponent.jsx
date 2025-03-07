import React from "react";
import "./ProductComponent.css"; // CSS riêng cho product card
const backendURL = "http://localhost:8081";
const ProductCard = ({ product }) => {
  console.log("hihi=>> ",product.image);
  return (
    <div className="product-card">
      <img src={`${backendURL}${product.image}`} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
