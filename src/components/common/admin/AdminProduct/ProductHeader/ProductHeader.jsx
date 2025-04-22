import React from 'react';
import './ProductHearer.css';

const ProductHeader = ({ searchTerm, onSearchChange, onAddUser }) => {
  return (
    <div className="products-header">
      <h1>Quản lý người dùng</h1>
      <div className="users-actions">
        <div className="search-box">
          <input
            type="text"
            placeholder="Tìm kiếm user..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>
        <button className="add-button" onClick={onAddUser}>
          <i className="add-icon">+</i> Thêm Product
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;