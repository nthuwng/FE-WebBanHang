import React from "react";
import "./ProductCard.css"; // CSS riêng cho product card
const backendURL = "http://localhost:8081";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card-component">
      <img
        src={`${backendURL}${product.image}`}
        alt={product.name}
        className="product-image-component"
      />
      <h3 className="product-name-component">{product.name}</h3>
      <p className="product-price-component">${product.price}</p>
      <button className="product-add-to-cart">Add To Cart</button>
    </div>
  );
};

export default ProductCard;

