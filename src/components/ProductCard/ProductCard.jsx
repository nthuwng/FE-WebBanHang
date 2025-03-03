import React from "react";
import "./ProductCard.css"; // CSS riêng cho product card

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image || "https://via.placeholder.com/200"} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
