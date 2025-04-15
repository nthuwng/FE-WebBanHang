import React from 'react';

const AdminStatCard = ({ title, value, icon, trend, color }) => {
  // Define color classes based on the color prop
  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return 'admin-card-blue';
      case 'green':
        return 'admin-card-green';
      case 'purple':
        return 'admin-card-purple';
      case 'orange':
        return 'admin-card-orange';
      case 'red':
        return 'admin-card-red';
      default:
        return 'admin-card-blue';
    }
  };

  // Determine if trend is positive or negative
  const isTrendPositive = trend && trend.startsWith('+');
  
  return (
    <div className={`admin-stat-card ${getColorClass()}`}>
      <div className="admin-stat-card-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="admin-stat-card-content">
        <h3 className="admin-stat-card-title">{title}</h3>
        <p className="admin-stat-card-value">{value}</p>
        {trend && (
          <p className={`admin-stat-card-trend ${isTrendPositive ? 'admin-trend-up' : 'admin-trend-down'}`}>
            <i className={`fas ${isTrendPositive ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
            {trend}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminStatCard;