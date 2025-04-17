import React from 'react';
import './UsersHeader.css';

const UsersHeader = ({ searchTerm, onSearchChange, onAddUser }) => {
  return (
    <div className="users-header">
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
          <i className="add-icon">+</i> Thêm User
        </button>
      </div>
    </div>
  );
};

export default UsersHeader;