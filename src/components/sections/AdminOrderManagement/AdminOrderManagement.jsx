import React, { useState } from "react";

const AdminOrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [dateRange, setDateRange] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Sample order data
  const orders = [
    {
      id: "25781",
      customer: "Alex Johnson",
      email: "alex.j@example.com",
      date: "2025-04-15",
      time: "09:45 AM",
      total: 249.99,
      items: 3,
      status: "Completed",
      payment: "Credit Card",
      shipping: "Express Shipping",
      products: [
        { id: 1, name: "Wireless Headphones", price: 89.99, quantity: 1 },
        { id: 2, name: "Running Shoes", price: 129.99, quantity: 1 },
        { id: 3, name: "Water Bottle", price: 24.99, quantity: 1 },
      ],
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "USA",
      },
    },
    {
      id: "25780",
      customer: "Maria Garcia",
      email: "maria.g@example.com",
      date: "2025-04-14",
      time: "03:12 PM",
      total: 159.98,
      items: 2,
      status: "Processing",
      payment: "PayPal",
      shipping: "Standard Shipping",
      products: [
        { id: 3, name: "Smart Watch", price: 129.99, quantity: 1 },
        { id: 4, name: "Yoga Mat", price: 29.99, quantity: 1 },
      ],
      address: {
        street: "456 Oak Ave",
        city: "San Francisco",
        state: "CA",
        zip: "94110",
        country: "USA",
      },
    },
    {
      id: "25779",
      customer: "James Wilson",
      email: "j.wilson@example.com",
      date: "2025-04-14",
      time: "11:05 AM",
      total: 325.97,
      items: 4,
      status: "Shipped",
      payment: "Credit Card",
      shipping: "Express Shipping",
      products: [
        { id: 5, name: "Coffee Maker", price: 79.99, quantity: 1 },
        { id: 6, name: "Protein Powder", price: 49.99, quantity: 2 },
        { id: 7, name: "Blender", price: 145.99, quantity: 1 },
      ],
      address: {
        street: "789 Pine Blvd",
        city: "Chicago",
        state: "IL",
        zip: "60611",
        country: "USA",
      },
    },
    {
      id: "25778",
      customer: "Sarah Miller",
      email: "sarah.m@example.com",
      date: "2025-04-13",
      time: "06:30 PM",
      total: 92.95,
      items: 1,
      status: "Cancelled",
      payment: "Credit Card",
      shipping: "Standard Shipping",
      products: [
        { id: 8, name: "Wireless Earbuds", price: 92.95, quantity: 1 },
      ],
      address: {
        street: "321 Maple Dr",
        city: "Boston",
        state: "MA",
        zip: "02108",
        country: "USA",
      },
    },
    {
      id: "25777",
      customer: "Thomas Brown",
      email: "t.brown@example.com",
      date: "2025-04-13",
      time: "10:22 AM",
      total: 175.98,
      items: 1,
      status: "Delivered",
      payment: "PayPal",
      shipping: "Express Shipping",
      products: [
        { id: 9, name: "Premium Backpack", price: 175.98, quantity: 1 },
      ],
      address: {
        street: "654 Cedar St",
        city: "Seattle",
        state: "WA",
        zip: "98101",
        country: "USA",
      },
    },
    {
      id: "25776",
      customer: "Emily Davis",
      email: "emily.d@example.com",
      date: "2025-04-12",
      time: "05:18 PM",
      total: 432.97,
      items: 3,
      status: "Refunded",
      payment: "Credit Card",
      shipping: "Standard Shipping",
      products: [
        { id: 10, name: "Smart Speaker", price: 199.99, quantity: 1 },
        { id: 11, name: "Desk Lamp", price: 32.99, quantity: 1 },
        { id: 12, name: "Wireless Keyboard", price: 99.99, quantity: 2 },
      ],
      address: {
        street: "987 Birch Ln",
        city: "Austin",
        state: "TX",
        zip: "78701",
        country: "USA",
      },
    },
  ];

  // Filter orders based on search, status, and date range
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.includes(searchTerm) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || order.status === filterStatus;

    let matchesDate = true;
    const orderDate = new Date(order.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateRange === "today") {
      const orderDateOnly = new Date(orderDate);
      orderDateOnly.setHours(0, 0, 0, 0);
      matchesDate = orderDateOnly.getTime() === today.getTime();
    } else if (dateRange === "yesterday") {
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const orderDateOnly = new Date(orderDate);
      orderDateOnly.setHours(0, 0, 0, 0);
      matchesDate = orderDateOnly.getTime() === yesterday.getTime();
    } else if (dateRange === "week") {
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      matchesDate = orderDate >= weekAgo;
    } else if (dateRange === "month") {
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      matchesDate = orderDate >= monthAgo;
    }

    return matchesSearch && matchesStatus && matchesDate;
  });

  // Sort orders
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.date + " " + b.time) - new Date(a.date + " " + a.time)
        );
      case "oldest":
        return (
          new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time)
        );
      case "total-high":
        return b.total - a.total;
      case "total-low":
        return a.total - b.total;
      default:
        return 0;
    }
  });

  // Handle view details
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  // Extract unique statuses for filter
  const statuses = ["all", ...new Set(orders.map((order) => order.status))];

  return (
    <div className="admin-section admin-order-management">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Order Management</h2>
        <div className="admin-header-actions">
          <button className="admin-button admin-button-secondary">
            <i className="fas fa-file-export"></i> Export
          </button>
          <button className="admin-button admin-button-secondary">
            <i className="fas fa-print"></i> Print
          </button>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-search-container">
            <i className="fas fa-search admin-search-icon"></i>
            <input
              type="text"
              className="admin-search-input"
              placeholder="Search orders by ID, customer or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="admin-filter-controls">
            <div className="admin-filter-group">
              <label>Status:</label>
              <select
                className="admin-filter-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "all" ? "All Statuses" : status}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-filter-group">
              <label>Date:</label>
              <select
                className="admin-filter-select"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}>
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>

            <div className="admin-filter-group">
              <label>Sort By:</label>
              <select
                className="admin-filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="total-high">Total: High to Low</option>
                <option value="total-low">Total: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="admin-card-body">
          <div className="admin-table-responsive">
            <table className="admin-data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date & Time</th>
                  <th>Total</th>
                  <th>Items</th>
                  <th>Status</th>
                  <th>Payment</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>
                      <div className="admin-customer-info">
                        <div className="admin-customer-name">
                          {order.customer}
                        </div>
                        <div className="admin-customer-email">
                          {order.email}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="admin-date-time">
                        <div>{new Date(order.date).toLocaleDateString()}</div>
                        <div className="admin-time">{order.time}</div>
                      </div>
                    </td>
                    <td>${order.total.toFixed(2)}</td>
                    <td>{order.items}</td>
                    <td>
                      <span
                        className={`admin-badge ${
                          order.status === "Completed" ||
                          order.status === "Delivered"
                            ? "admin-badge-success"
                            : order.status === "Processing" ||
                              order.status === "Shipped"
                            ? "admin-badge-info"
                            : order.status === "Cancelled" ||
                              order.status === "Refunded"
                            ? "admin-badge-danger"
                            : "admin-badge-warning"
                        }`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.payment}</td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          className="admin-action-button admin-view"
                          onClick={() => handleViewDetails(order)}>
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="admin-action-button admin-edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="admin-action-button admin-print">
                          <i className="fas fa-print"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {sortedOrders.length === 0 && (
            <div className="admin-empty-state">
              <i className="fas fa-shopping-cart admin-empty-icon"></i>
              <p>No orders found matching your filters.</p>
              <button
                className="admin-button admin-button-secondary"
                onClick={() => {
                  setSearchTerm("");
                  setFilterStatus("all");
                  setDateRange("all");
                }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        <div className="admin-card-footer">
          <div className="admin-pagination">
            <button className="admin-pagination-button" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="admin-pagination-pages">
              <button className="admin-pagination-page admin-pagination-active">
                1
              </button>
            </div>
            <button className="admin-pagination-button" disabled>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="admin-pagination-info">
            Showing {sortedOrders.length} of {orders.length} orders
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {showDetailsModal && selectedOrder && (
        <div className="admin-modal-overlay">
          <div className="admin-modal admin-modal-large">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                Order #{selectedOrder.id} Details
              </h3>
              <button
                className="admin-modal-close"
                onClick={() => setShowDetailsModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="admin-modal-body">
              <div className="admin-order-details">
                <div className="admin-order-details-header">
                  <div className="admin-order-status">
                    <span
                      className={`admin-badge ${
                        selectedOrder.status === "Completed" ||
                        selectedOrder.status === "Delivered"
                          ? "admin-badge-success"
                          : selectedOrder.status === "Processing" ||
                            selectedOrder.status === "Shipped"
                          ? "admin-badge-info"
                          : selectedOrder.status === "Cancelled" ||
                            selectedOrder.status === "Refunded"
                          ? "admin-badge-danger"
                          : "admin-badge-warning"
                      }`}>
                      {selectedOrder.status}
                    </span>
                  </div>
                  <div className="admin-order-date">
                    Placed on{" "}
                    {new Date(selectedOrder.date).toLocaleDateString()} at{" "}
                    {selectedOrder.time}
                  </div>
                </div>

                <div className="admin-order-details-grid">
                  <div className="admin-order-details-item">
                    <h4>Customer Information</h4>
                    <p>
                      <strong>Name:</strong> {selectedOrder.customer}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedOrder.email}
                    </p>
                    <p>
                      <strong>Shipping Address:</strong>{" "}
                      {`${selectedOrder.address.street}, ${selectedOrder.address.city}, ${selectedOrder.address.state} ${selectedOrder.address.zip}, ${selectedOrder.address.country}`}
                    </p>
                  </div>

                  <div className="admin-order-details-item">
                    <h4>Payment and Shipping</h4>
                    <p>
                      <strong>Payment Method:</strong> {selectedOrder.payment}
                    </p>
                    <p>
                      <strong>Shipping Method:</strong> {selectedOrder.shipping}
                    </p>
                    <p>
                      <strong>Total Amount:</strong> $
                      {selectedOrder.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <h4>Products</h4>
                <table className="admin-modal-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>{product.quantity}</td>
                        <td>
                          ${(product.price * product.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="admin-modal-footer">
              <button
                className="admin-button admin-button-primary"
                onClick={() => setShowDetailsModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderManagement;
