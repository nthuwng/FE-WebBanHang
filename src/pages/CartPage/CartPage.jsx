import { Link } from "react-router-dom";
import { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1 },
    { id: 2, name: "HI Gamepad", price: 550, quantity: 2 },
  ]);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-page-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/carts">Cart</Link>
        <div className="cart-summary">
          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-coupon">Apply Coupon</button>
          </div>
        </div>
      </div>
      <div className="cart-page-items">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    className="Quantity-number"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    min="1"
                  />
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="Home-and-Update">
        <button className="Return-To-Home">
          <Link to="/" className="Return-To-Home-text">Return To Home</Link>
        </button>
        <button className="Update-Cart">Update Cart</button>
      </div>
      <div className="total">
        <div className="Cart-Total">Cart Total</div>
        <p>
          <span>Subtotal:</span> <span>${subtotal}</span>
        </p>
        <p>
          <span>Shipping:</span> <span>Free</span>
        </p>
        <div className="total-Totalmoney">
          <span>Total:</span> <span>${subtotal}</span>
        </div>
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
