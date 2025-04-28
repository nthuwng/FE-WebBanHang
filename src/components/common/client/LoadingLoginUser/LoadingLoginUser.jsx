import { ShoppingBag } from "lucide-react";
import React from "react";
import "./LoadingLoginUser.css";

const LoadingLoginUser = () => {
  return (
    <div className="not-logged-in-container">
      <div className="not-logged-in-content">
        <div className="not-logged-in-icon">
          <ShoppingBag size={64} className="icon-gray" />
        </div>
        <h2 className="not-logged-in-title">Bạn chưa đăng nhập</h2>
        <p className="not-logged-in-message">
          Vui lòng đăng nhập để xem thông tin đơn hàng của bạn
        </p>
      </div>
      <div className="not-logged-in-actions">
        <button
          className="btn primary"
          onClick={() => (window.location.href = "/login")}>
          Đăng nhập
        </button>
        <button
          className="btn secondary"
          onClick={() => (window.location.href = "/")}>
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
};

export default LoadingLoginUser;
