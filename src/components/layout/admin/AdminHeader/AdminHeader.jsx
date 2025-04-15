import React, { useState } from 'react';

const AdminHeader = ({ toggleSidebar, darkMode, toggleDarkMode }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowNotifications(false);
  };

  return (
    <header className="admin-dashboard-header">
      <div className="admin-header-left">
        <button className="admin-menu-toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
      </div>
      <div className="admin-header-right">
        <div className="admin-dark-mode-toggle">
          <div className="admin-toggle-switch">
            <input 
              type="checkbox" 
              id="admin-dark-mode-toggle" 
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="admin-dark-mode-toggle"></label>
          </div>
          <span>{darkMode ? 'Dark' : 'Light'}</span>
        </div>
        
        <div className="admin-header-actions">
          <div className="admin-notification-container">
            <button 
              className="admin-notification-button"
              onClick={toggleNotifications}
            >
              <i className="fas fa-bell"></i>
              <span className="admin-notification-badge">3</span>
            </button>
            
            {showNotifications && (
              <div className="admin-dropdown-menu admin-notification-menu">
                <div className="admin-notification-item">
                  <div className="admin-notification-title">New Order</div>
                  <div className="admin-notification-text">Order #12345 was placed</div>
                  <div className="admin-notification-time">5 minutes ago</div>
                </div>
                <div className="admin-notification-item">
                  <div className="admin-notification-title">Low Stock Alert</div>
                  <div className="admin-notification-text">Product "Headphones" is low on stock</div>
                  <div className="admin-notification-time">2 hours ago</div>
                </div>
                <div className="admin-notification-item">
                  <div className="admin-notification-title">New User</div>
                  <div className="admin-notification-text">John Smith just registered</div>
                  <div className="admin-notification-time">Yesterday</div>
                </div>
                <div className="admin-notification-footer">
                  <a href="#all-notifications">View All Notifications</a>
                </div>
              </div>
            )}
          </div>
          
          <div className="admin-user-container">
            <button 
              className="admin-user-button"
              onClick={toggleUserMenu}
            >
              <div className="admin-user-avatar">
                <img src="/api/placeholder/40/40" alt="Admin Avatar" />
              </div>
              <span className="admin-user-name">Admin User</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            
            {showUserMenu && (
              <div className="admin-dropdown-menu admin-user-menu">
                <a href="#admin-profile"><i className="fas fa-user"></i> Profile</a>
                <a href="#admin-settings"><i className="fas fa-cog"></i> Settings</a>
                <div className="admin-menu-divider"></div>
                <a href="#admin-logout"><i className="fas fa-sign-out-alt"></i> Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;