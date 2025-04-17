import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarAdmin.css';
import { FaChartBar, FaUsers, FaBoxOpen, FaShoppingCart, FaCog } from 'react-icons/fa';

const NavbarAdmin = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(() => {
        if (location.pathname === '/admin') return 'Dashboard';
        const path = location.pathname.split('/').pop();
        return path.charAt(0).toUpperCase() + path.slice(1);
    });
    
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    
    return (
        <div className="admin-navbar">
            <div className="admin-logo">
                <h2>Logo...</h2>
            </div>
            <div className="admin-nav-links">
                <Link 
                    to="/admin" 
                    className={`admin-navbar-item ${activeItem === 'Dashboard' ? 'active' : ''}`} 
                    onClick={() => handleItemClick('Dashboard')}
                >
                    <div className="menu-icon-container">
                        <FaChartBar className="icon admin-icon-dashboard" />
                    </div>
                    <span>Dashboard</span>
                </Link>
                <Link 
                    to="/admin/users" 
                    className={`admin-navbar-item ${activeItem === 'Users' ? 'active' : ''}`} 
                    onClick={() => handleItemClick('Users')}
                >
                    <div className="menu-icon-container">
                        <FaUsers className="icon admin-icon-users" />
                    </div>
                    <span>Users</span>
                </Link>
                <Link 
                    to="/admin/products" 
                    className={`admin-navbar-item ${activeItem === 'Products' ? 'active' : ''}`} 
                    onClick={() => handleItemClick('Products')}
                >
                    <div className="menu-icon-container">
                        <FaBoxOpen className="icon admin-icon-products" />
                    </div>
                    <span>Products</span>
                </Link>
                <Link 
                    to="/admin/orders" 
                    className={`admin-navbar-item ${activeItem === 'Orders' ? 'active' : ''}`} 
                    onClick={() => handleItemClick('Orders')}
                >
                    <div className="menu-icon-container">
                        <FaShoppingCart className="icon admin-icon-orders" />
                    </div>
                    <span>Orders</span>
                </Link>
                <Link 
                    to="/admin/settings" 
                    className={`admin-navbar-item ${activeItem === 'Settings' ? 'active' : ''}`} 
                    onClick={() => handleItemClick('Settings')}
                >
                    <div className="menu-icon-container">
                        <FaCog className="icon admin-icon-settings" />
                    </div>
                    <span>Settings</span>
                </Link>
            </div>
        </div>
    );
};

export default NavbarAdmin;