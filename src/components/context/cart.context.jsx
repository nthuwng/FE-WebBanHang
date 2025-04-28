import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartWrapper = (props) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  // Lấy giỏ hàng từ localStorage khi component được mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Khôi phục giỏ hàng từ localStorage
    }
  }, []); 

  // Lưu giỏ hàng vào localStorage mỗi khi cart thay đổi
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
