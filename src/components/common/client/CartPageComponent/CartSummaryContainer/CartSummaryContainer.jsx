import { Link } from "react-router-dom";
import React from "react";

const CartSummaryContainer = (props) => {
  const { subtotal, handleUpdateCartDetail } = props;
  return (
    <>
      <div className="cart-summary-container">
        <div className="Home-and-Update">
          <button className="Return-To-Home">
            <Link to="/" className="Return-To-Home-text">
              Return To Home
            </Link>
          </button>
          <button
            className="Update-Cart"
            onClick={() => {
              handleUpdateCartDetail();
            }}>
            Update Cart
          </button>
        </div>

        <div className="total">
          <div className="Cart-Total">Cart Total</div>

          <p className="summary-row">
            <span className="summary-label">Subtotal:</span>
            <span className="summary-value">{subtotal.toLocaleString()}₫</span>
          </p>

          <p className="summary-row">
            <span className="summary-label">Shipping:</span>
            <span className="summary-value">Free</span>
          </p>

          <div className="total-Totalmoney">
            <span className="total-label">Total:</span>
            <span className="total-value">{subtotal.toLocaleString()}₫</span>
          </div>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <button className="checkout-button">
              <span className="checkout-text">Proceed to checkout</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSummaryContainer;
