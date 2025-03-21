import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    message.success("Đăng xuất thành công!");
    navigate("/login");
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Shop</div>

      {/* Navigation */}
      <nav className="nav-container-login">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Search Bar & Icons */}
      <div className="search-icons">
        <div className="search-box">
          <input type="text" placeholder="What are you looking for?" />
          <button className="search-btn">
            <Search size={25} />
          </button>
        </div>
        <Heart size={30} className="icon" />
        <Tooltip title="Giỏ hàng">
          <ShoppingCart size={30} className="icon" style={{cursor: "pointer"}}/>
        </Tooltip>

        {/* Nếu đăng nhập, hiển thị icon Logout */}
        {isLoggedIn ? (
          <Tooltip title="Đăng xuất">
            <LogoutOutlined size={30} className="icon-login" onClick={handleLogout} />
          </Tooltip>
        ) : (
          <Tooltip title="Đăng nhập">
            <UserOutlined
              className="icon-login"
              onClick={() => navigate("/login")}
            />
          </Tooltip>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
