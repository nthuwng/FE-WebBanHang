import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import "./AdminPage.css";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const AdminPage = () => {
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
                to="/admin-user"
                className={({ isActive }) => (isActive ? "active" : "")}>
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Product Management
              </NavLink>
            </li>
          </ul>
        </nav>
  
        {/* Search Bar & Icons */}
        <div className="search-icons">
  
          <Tooltip placement="top" title="Đăng xuất" >
        <LogoutOutlined 
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
}
export default AdminPage