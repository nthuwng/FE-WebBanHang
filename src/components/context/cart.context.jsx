import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartWrapper = (props) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, setCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
