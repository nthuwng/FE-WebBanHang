import { Link } from "react-router-dom";
import React from "react";

const CartPageCoupon = () => {
  return (
    <>
      <div className="cart-page-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/carts">Cart</Link>
        <div className="cart-summary">
          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-coupon">Apply Coupon</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPageCoupon;
