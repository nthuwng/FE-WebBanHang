// src/components/checkout/CheckoutPage.jsx
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Checkout.css";
import { AuthContext } from "../../../components/context/auth.context";
import { CartContext } from "../../../components/context/cart.context";
import { Select, notification } from "antd";
import { postCreateOrder } from "../../../services/api.service";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);
  const [api, contextHolder] = notification.useNotification();

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
  });

  const [paymentMethods, setPaymentMethods] = useState(
    "67bf305ddbf43749193f3238"
  );
  const [selectedPayment, setSelectedPayment] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  useEffect(() => {}, [user, cart, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      api.error({
        message: "Error",
        description: "Please log in to complete your order.",
      });
      navigate("/login");
      return;
    }

    if (!cart || cart.length === 0) {
      api.error({
        message: "Error",
        description: "Your cart is empty. Please add items before checkout.",
      });
      navigate("/carts");
      return;
    }

    setLoading(true);

    try {
      const response = await postCreateOrder(
        user._id,
        paymentMethods,
        subtotal,
        cart.map((item) => ({
          id: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        })),
        formData.address,
        user.email,
        formData.phone
      );
      setCart([]);

      api.success({
        message: "Bạn đã tạo đơn hàng",
        description: "Bạn đã thanh toán thành công!",
      });
    } catch (error) {
      api.error({
        message: "Error",
        description: "Không thể tạo đơn hàng. Vui lòng thử lại sau.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      {contextHolder}
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-layout">
        <div className="checkout-form-container">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Shipping Information</h2>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={user.full_name}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  disabled
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h2>Payment Method</h2>
              <div className="payment-methods">
                <Select
                  style={{ width: "100%" }}
                  value={paymentMethods}
                  onChange={setPaymentMethods}
                  options={[
                    { value: "67bf305ddbf43749193f3238", label: "Cash" },
                    { value: "67bf3077dbf43749193f323a", label: "Credit Card" },
                  ]}
                />
              </div>
            </div>

            <button
              type="submit"
              className="checkout-button"
              disabled={loading}>
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="summary-item" key={item._id}>
                <div className="item-details">
                  <span className="item-name">{item.product.name}</span>
                  <span className="item-quantity">x {item.quantity}</span>
                </div>
                <span className="item-price">
                  {(item.product.price * item.quantity).toLocaleString()}₫
                </span>
              </div>
            ))}
          </div>

          <div className="summary-totals">
            <div className="summary-row">
              <span className="summary-label">Subtotal:</span>
              <span className="summary-value">
                {subtotal.toLocaleString()}₫
              </span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Shipping:</span>
              <span className="summary-value">Free</span>
            </div>

            <div className="summary-row total">
              <span className="summary-label">Total:</span>
              <span className="summary-value">
                {subtotal.toLocaleString()}₫
              </span>
            </div>
          </div>

          <div className="back-to-cart">
            <button
              className="back-button"
              onClick={() => navigate("/carts")}
              type="button">
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
