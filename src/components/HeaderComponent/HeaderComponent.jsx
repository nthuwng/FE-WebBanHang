import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import "./HeaderComponent.css";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    message.success("Đăng xuất thành công!");
    navigate("/sign-in"); // Điều hướng về trang đăng nhập
  };

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
        <Heart size={20} className="icon" />
        <Tooltip title="Giỏ hàng">
          <ShoppingCart size={20} className="icon" />
        </Tooltip>

        {isLoggedIn ? (
          <Tooltip title="Đăng xuất">
            <LogoutOutlined
              size={20}
              className="icon"
              onClick={() => {
                navigate("/");
              }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Đăng nhập">
            <UserOutlined
              size={20}
              className="icon"
              onClick={() => {
                navigate("/sign-in");
              }}
            />
          </Tooltip>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
