import React from 'react';
import './UserTableAdmin.css';

const UserTableAdmin = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <div className="users-table-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên đăng nhập</th>
            <th>Email</th>
            <th>Quyền</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <span className={`role-badge ${user.role}`}>
                  {user.role}
                </span>
              </td>
              <td>
                <span className={`status-badge ${user.status}`}>
                  {user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                </span>
              </td>
              <td className="actions-cell">
                <button 
                  className="edit-button" 
                  onClick={() => onEditUser(user)}
                >
                  <i className="edit-icon">✏️</i> Sửa
                </button>
                <button 
                  className="delete-button" 
                  onClick={() => onDeleteUser(user.id)}
                >
                  <i className="delete-icon">🗑️</i> Xóa
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="6" className="no-data">Không tìm thấy dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTableAdmin;