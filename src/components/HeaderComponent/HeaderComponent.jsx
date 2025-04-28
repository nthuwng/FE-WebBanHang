import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import "./HeaderComponent.css";
import { AndroidOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Exclusive</div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Search Bar & Icons */}
      <div className="search-icons">
        <div className="search-box">
          <input type="text" placeholder="What are you looking for?" />
          <button className="search-btn">
            <Search size={18} />
          </button>
        </div>
        <Tooltip placement="top" title="Theo dõi đơn hàng">
          <Heart size={20} className="icon" />
        </Tooltip>

        <Tooltip placement="top" title="Giỏ Hàng">
          <ShoppingCart size={20} className="icon" />
        </Tooltip>

        <Tooltip placement="top" title="Đăng Nhập">
          <UserOutlined
            size={20}
            className="iconLogin"
            onClick={() => {
              navigate("/sign-in");
            }}
          />
        </Tooltip>

        <Tooltip placement="top" title="Admin">
          <AndroidOutlined
            size={20}
            className="iconLogin"
            onClick={() => {
              navigate("/login-admin");
            }}
          />
        </Tooltip>
      </div>
    </header>
  );
};

export default HeaderComponent;
