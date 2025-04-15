import React, { useState } from "react";

const AdminProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 89.99,
      stock: 45,
      status: "Active",
      date: "2025-04-10",
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Footwear",
      price: 129.99,
      stock: 23,
      status: "Active",
      date: "2025-04-09",
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Electronics",
      price: 199.99,
      stock: 12,
      status: "Active",
      date: "2025-04-08",
    },
    {
      id: 4,
      name: "Yoga Mat",
      category: "Fitness",
      price: 29.99,
      stock: 0,
      status: "Out of Stock",
      date: "2025-04-07",
    },
    {
      id: 5,
      name: "Coffee Maker",
      category: "Home",
      price: 79.99,
      stock: 8,
      status: "Low Stock",
      date: "2025-04-06",
    },
    {
      id: 6,
      name: "Protein Powder",
      category: "Nutrition",
      price: 49.99,
      stock: 32,
      status: "Active",
      date: "2025-04-05",
    },
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "price-high":
        return b.price - a.price;
      case "price-low":
        return a.price - b.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Extract unique categories for filter
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="admin-section admin-product-management">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Product Management</h2>
        <button
          className="admin-button admin-button-primary"
          onClick={() => setShowAddModal(true)}>
          <i className="fas fa-plus"></i> Add Product
        </button>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-search-container">
            <i className="fas fa-search admin-search-icon"></i>
            <input
              type="text"
              className="admin-search-input"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="admin-filter-controls">
            <div className="admin-filter-group">
              <label>Category:</label>
              <select
                className="admin-filter-select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
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
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>
        </div>

        <div className="admin-card-body">
          <div className="admin-table-responsive">
            <table className="admin-data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedProducts.map((product) => (
                  <tr key={product.id}>
                    <td>#{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.stock}</td>
                    <td>
                      <span
                        className={`admin-badge admin-badge-${
                          product.status === "Active"
                            ? "success"
                            : product.status === "Out of Stock"
                            ? "danger"
                            : "warning"
                        }`}>
                        {product.status}
                      </span>
                    </td>
                    <td>
                      <div className="admin-table-actions">
                        <button className="admin-action-button admin-edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="admin-action-button admin-delete">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {sortedProducts.length === 0 && (
            <div className="admin-empty-state">
              <i className="fas fa-box-open admin-empty-icon"></i>
              <p>No products found matching your filters.</p>
              <button
                className="admin-button admin-button-secondary"
                onClick={() => {
                  setSearchTerm("");
                  setFilterCategory("all");
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
            Showing {sortedProducts.length} of {products.length} products
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Add New Product</h3>
              <button
                className="admin-modal-close"
                onClick={() => setShowAddModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="admin-modal-body">
              <form className="admin-form">
                <div className="admin-form-group">
                  <label className="admin-form-label">Product Name</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="Enter product name"
                  />
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Category</label>
                    <select className="admin-form-select">
                      <option value="">Select Category</option>
                      {categories
                        .filter((cat) => cat !== "all")
                        .map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Price ($)</label>
                    <input
                      type="number"
                      className="admin-form-input"
                      placeholder="Enter price"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Stock Quantity</label>
                    <input
                      type="number"
                      className="admin-form-input"
                      placeholder="Enter stock quantity"
                      min="0"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Status</label>
                    <select className="admin-form-select">
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Description</label>
                  <textarea
                    className="admin-form-textarea"
                    placeholder="Enter product description"
                    rows="3"></textarea>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Product Image</label>
                  <div className="admin-file-upload">
                    <input type="file" id="admin-product-image" />
                    <label
                      htmlFor="admin-product-image"
                      className="admin-file-upload-label">
                      <i className="fas fa-cloud-upload-alt"></i>
                      <span>Choose file or drag & drop</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="admin-modal-footer">
              <button
                className="admin-button admin-button-secondary"
                onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
              <button className="admin-button admin-button-primary">
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductManagement;
