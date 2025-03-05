import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import "./HeaderComponent.css";
import { UserOutlined } from "@ant-design/icons";
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
        <Heart size={20} className="icon" />
        <ShoppingCart size={20} className="icon" />
        <UserOutlined
          size={20}
          className="icon"
          onClick={() => {
            navigate("/sign-in");
          }}
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
