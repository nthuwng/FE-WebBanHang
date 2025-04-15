import React, { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader.jsx";
import AdminSidebar from "../AdminSidebar/AdminSidebar.jsx";
import AdminMainContent from "../AdminMainContent/AdminMainContent.jsx";

import AdminFooter from "../AdminFooter/AdminFooter.jsx";
import "./AdminDashboardLayout.css";

const AdminDashboardLayout = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`admin-dashboard-container ${
        darkMode ? "admin-dark-mode" : ""
      }`}>
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
      />
      <div className="admin-dashboard-main">
        <AdminHeader
          toggleSidebar={toggleSidebar}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <AdminMainContent activeSection={activeSection} />
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
