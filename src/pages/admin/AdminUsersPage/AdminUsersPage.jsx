import React, { useState, useEffect } from 'react'
import "./AdminUsersPage.css"

const AdminUsersPage = () => {
  // State quản lý danh sách users
  const [users, setUsers] = useState([
    { id: 1, username: 'admin1', email: 'admin1@example.com', role: 'admin', status: 'active' },
    { id: 2, username: 'user1', email: 'user1@example.com', role: 'user', status: 'active' },
    { id: 3, username: 'user2', email: 'user2@example.com', role: 'user', status: 'inactive' },
    { id: 4, username: 'manager1', email: 'manager1@example.com', role: 'admin', status: 'active' },
  ]);

  // State cho chức năng tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');
  
  // State cho modal form thêm/sửa user
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: '',
    email: '',
    password: '',
    role: 'user',
    status: 'active'
  });

  // Lọc danh sách users theo từ khóa tìm kiếm
  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mở modal thêm user mới
  const handleAddUser = () => {
    setEditMode(false);
    setCurrentUser({
      id: null,
      username: '',
      email: '',
      password: '',
      role: 'user',
      status: 'active'
    });
    setShowModal(true);
  };

  // Mở modal chỉnh sửa user
  const handleEditUser = (user) => {
    setEditMode(true);
    setCurrentUser({...user, password: ''});
    setShowModal(true);
  };

  // Xử lý xóa user
  const handleDeleteUser = (userId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này không?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Xử lý thay đổi trường input trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({...currentUser, [name]: value});
  };

  // Xử lý lưu user (thêm mới hoặc cập nhật)
  const handleSaveUser = (e) => {
    e.preventDefault();
    
    if (editMode) {
      // Cập nhật user hiện có
      setUsers(users.map(user => 
        user.id === currentUser.id ? currentUser : user
      ));
    } else {
      // Thêm user mới
      const newUser = {
        ...currentUser,
        id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1
      };
      setUsers([...users, newUser]);
    }
    
    setShowModal(false);
  };

  return (
    <div className="admin-users-page">
      <div className="users-header">
        <h1>Quản lý người dùng</h1>
        <div className="users-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Tìm kiếm user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <i className="search-icon">🔍</i>
            </button>
          </div>
          <button className="add-button" onClick={handleAddUser}>
            <i className="add-icon">+</i> Thêm User
          </button>
        </div>
      </div>

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
            {filteredUsers.map(user => (
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
                    onClick={() => handleEditUser(user)}
                  >
                    <i className="edit-icon">✏️</i> Sửa
                  </button>
                  <button 
                    className="delete-button" 
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <i className="delete-icon">🗑️</i> Xóa
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="no-data">Không tìm thấy dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal thêm/sửa user */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-header">
              <h2>{editMode ? 'Chỉnh sửa User' : 'Thêm User mới'}</h2>
              <button className="close-button" onClick={() => setShowModal(false)}>
                ✖
              </button>
            </div>
            <form onSubmit={handleSaveUser}>
              <div className="form-group">
                <label>Tên đăng nhập:</label>
                <input 
                  type="text" 
                  name="username" 
                  value={currentUser.username} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={currentUser.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu:{editMode ? ' (để trống nếu không thay đổi)' : ''}</label>
                <input 
                  type="password" 
                  name="password" 
                  value={currentUser.password} 
                  onChange={handleInputChange} 
                  required={!editMode}
                />
              </div>
              <div className="form-group">
                <label>Quyền:</label>
                <select 
                  name="role" 
                  value={currentUser.role} 
                  onChange={handleInputChange}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="form-group">
                <label>Trạng thái:</label>
                <select 
                  name="status" 
                  value={currentUser.status} 
                  onChange={handleInputChange}
                >
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Không hoạt động</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="cancel-button" onClick={() => setShowModal(false)}>
                  Hủy
                </button>
                <button type="submit" className="save-button">
                  {editMode ? 'Cập nhật' : 'Thêm mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminUsersPage;