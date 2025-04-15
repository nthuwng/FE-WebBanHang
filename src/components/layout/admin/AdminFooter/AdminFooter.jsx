import React from 'react';

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="admin-dashboard-footer">
      <div className="admin-footer-content">
        <p>&copy; {currentYear} Your Company Admin Panel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default AdminFooter;