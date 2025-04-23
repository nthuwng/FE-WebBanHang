import React, { useState, useEffect } from "react";
import "./AdminOrdersPage.css";
import { getOrderAPI } from "../../../services/api.service";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await getOrderAPI();
      console.log("Danh sách đơn hàng:", response.data);
      setOrders(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy đơn hàng:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOrderClick = (orderId) => {
    // In a real app, you might navigate to order details page
    console.log(`Viewing details for order: ${orderId}`);
  };

  if (loading) {
    return (
      <div className="admin-orders-container">
        <div className="admin-orders-loading">
          <div className="spinner"></div>
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-orders-container">
      <div className="admin-orders-header">
        <h1>Order Management</h1>
        <div className="admin-orders-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by order ID or customer name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="filter-select">
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className="refresh-button" onClick={fetchOrders}>
            Refresh
          </button>
        </div>
      </div>

      <div className="admin-orders-summary">
        <div className="summary-card">
          <h3>Total Orders</h3>
          <p>{orders.status}</p>
        </div>
        <div className="summary-card">
          <h3>Pending</h3>
          <p>{orders.status}</p>
        </div>
        <div className="summary-card">
          <h3>Processing</h3>
          <p>{orders.status}</p>
        </div>
        <div className="summary-card">
          <h3>Completed</h3>
          <p>{orders.status}</p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>No orders found matching your criteria.</p>
        </div>
      ) : (
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} onClick={() => handleOrderClick(order.id)}>
                  <td>{order._id}</td>
                  <td>{order.customerName}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>{order.items}</td>
                  <td>${order.total}</td>
                  <td>
                    <span className={`status-badge ${order.status}`}>
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <div className="order-actions">
                      <button className="action-button view-button">
                        View
                      </button>
                      <button className="action-button edit-button">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrdersPage;
