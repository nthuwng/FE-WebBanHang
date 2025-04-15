import React from 'react';
import AdminDashboardOverview from '../../../sections/AdminDashboardOverview/AdminDashboardOverview.jsx';
import AdminUserManagement from '../../../sections/AdminUserManagement/AdminUserManagement.jsx';
import AdminProductManagement from '../../../sections/AdminProductManagement/AdminProductManagement.jsx';
// import AdminOrderManagement from '../../../sections/AdminOrderManagement';
// import AdminSettings from '../../../sections/AdminSettings';

const AdminMainContent = ({ activeSection }) => {
  // Render the appropriate section based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AdminDashboardOverview />;
      case 'users':
        return <AdminUserManagement />;
      case 'products':
        return <AdminProductManagement />;
      case 'orders':
        return "AdminOrderManagement";
        // return <AdminOrderManagement />;

      case 'settings':
        // return <AdminSettings />;
        return "AdminSettings";

      default:
        return <AdminDashboardOverview />;
    }
  };

  return (
    <main className="admin-main-content">
      {renderSection()}
    </main>
  );
};

export default AdminMainContent;