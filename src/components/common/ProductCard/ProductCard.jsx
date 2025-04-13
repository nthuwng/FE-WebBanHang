import React, { useContext, useState } from "react";
import "./ProductCard.css"; // CSS riêng cho product card
import { AuthContext } from "../../context/auth.context";
import {
  getCartByUserIDServices,
  handleAddProductToCartAPI,
} from "../../../services/api.service";
const backendURL = "http://localhost:8081";
import { notification } from "antd";

const ProductCard = ({ product }) => {
  const { user, setUser } = useContext(AuthContext);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

  const handleAddToCart = async () => {
    if (!user || !user._id) {
      api.error({
        message: `Lỗi đăng nhập`,
        description: "Bạn chưa đăng nhập mời đăng nhập",
      });
    } else {
      try {
        // Gọi API để thêm sản phẩm vào giỏ hàng
        const res = await handleAddProductToCartAPI(user._id, product._id, 1);

        // Kiểm tra nếu việc thêm sản phẩm thành công
        if (res.status === 200) {
          // Cập nhật giỏ hàng trong context
          api.success({
            message: `Thêm sản phẩm thành công`,
            description: "Bạn vừa thêm sản phẩm vào giỏ hàng",
            placement: "top",
          });
          const cartRes = await getCartByUserIDServices(user._id);
          setUser((prevUser) => ({
            ...prevUser,
            cart: cartRes.data, // Dữ liệu giỏ hàng mới từ API
          }));

          message.success("Thêm sản phẩm vào giỏ hàng thành công!");
        }
      } catch (error) {
        console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
        message.error("Không thể thêm sản phẩm vào giỏ hàng!");
      }
    }
  };

  return (
    <div className="product-card-component">
      {contextHolder}
      <img
        src={`${backendURL}${product.image}`}
        alt={product.name}
        className="product-image-component"
      />
      <h3 className="product-name-component">{product.name}</h3>
      <p className="product-price-component">${product.price}</p>
      <button className="product-add-to-cart" onClick={() => handleAddToCart()}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
