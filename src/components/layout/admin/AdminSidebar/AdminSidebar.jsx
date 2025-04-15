import React from 'react';

const AdminSidebar = ({ activeSection, setActiveSection, collapsed }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-tachometer-alt' },
    { id: 'users', label: 'Users', icon: 'fa-users' },
    { id: 'products', label: 'Products', icon: 'fa-box' },
    { id: 'orders', label: 'Orders', icon: 'fa-shopping-cart' },
    { id: 'settings', label: 'Settings', icon: 'fa-cog' }
  ];

  return (
    <aside className={`admin-sidebar ${collapsed ? 'admin-sidebar-collapsed' : ''}`}>
      <div className="admin-sidebar-header">
        <div className="admin-logo">
          {!collapsed && <span className="admin-logo-text">AdminPanel</span>}
          {collapsed && <span className="admin-logo-icon">A</span>}
        </div>
      </div>
      
      <nav className="admin-main-nav">
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <button 
                className={activeSection === item.id ? 'admin-nav-active' : ''}
                onClick={() => setActiveSection(item.id)}
              >
                <i className={`fas ${item.icon}`}></i>
                {!collapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="admin-sidebar-footer">
        {!collapsed && (
          <div className="admin-help-section">
            <p>Need help?</p>
            <a href="#admin-support" className="admin-support-link">Contact Support</a>
          </div>
        )}
      </div>
    </aside>
  );
};

export default AdminSidebar;