import React from "react";
import AdminStatCard from "../../common/admin/AdminStatCard/AdminStatCard.jsx";

const AdminDashboardOverview = () => {
  // Sample data for stats
  const statsData = [
    {
      title: "Total Users",
      value: "1,254",
      icon: "fa-users",
      trend: "+12%",
      color: "blue",
    },
    {
      title: "Total Revenue",
      value: "$45,678",
      icon: "fa-dollar-sign",
      trend: "+8%",
      color: "green",
    },
    {
      title: "Total Orders",
      value: "867",
      icon: "fa-shopping-cart",
      trend: "+5%",
      color: "purple",
    },
    {
      title: "Products",
      value: "432",
      icon: "fa-box",
      trend: "+3%",
      color: "orange",
    },
  ];

  return (
    <div className="admin-section admin-dashboard-overview">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Dashboard Overview</h2>
      </div>

      <div className="admin-stats-grid">
        {statsData.map((stat, index) => (
          <AdminStatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            color={stat.color}
          />
        ))}
      </div>

      <div className="admin-dashboard-sections">
        <div className="admin-recent-section">
          <div className="admin-card">
            <div className="admin-card-header">
              <h3 className="admin-card-title">Recent Orders</h3>
              <a href="#admin-view-all-orders" className="admin-link">
                View All
              </a>
            </div>
            <div className="admin-card-body">
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ORDER-1234</td>
                    <td>John Smith</td>
                    <td>15 Apr, 2025</td>
                    <td>$120.00</td>
                    <td>
                      <span className="admin-badge admin-badge-success">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>#ORDER-1233</td>
                    <td>Sarah Johnson</td>
                    <td>14 Apr, 2025</td>
                    <td>$245.99</td>
                    <td>
                      <span className="admin-badge admin-badge-warning">
                        Processing
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>#ORDER-1232</td>
                    <td>Michael Brown</td>
                    <td>14 Apr, 2025</td>
                    <td>$82.50</td>
                    <td>
                      <span className="admin-badge admin-badge-danger">
                        Cancelled
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>#ORDER-1231</td>
                    <td>Emily Davis</td>
                    <td>13 Apr, 2025</td>
                    <td>$189.75</td>
                    <td>
                      <span className="admin-badge admin-badge-success">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="admin-chart-section">
          <div className="admin-card">
            <div className="admin-card-header">
              <h3 className="admin-card-title">Revenue Overview</h3>
              <div className="admin-card-actions">
                <select className="admin-filter-select">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="admin-card-body">
              <div className="admin-chart-container">
                {/* Placeholder for chart - would be replaced with actual chart component */}
                <div className="admin-chart-placeholder">
                  <p>Revenue Chart will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOverview;
