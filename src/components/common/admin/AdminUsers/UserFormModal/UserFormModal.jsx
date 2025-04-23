import React from 'react';
import './UserFormModal.css';

const UserFormModal = ({ 
  showModal, 
  editMode, 
  currentUser, 
  onClose, 
  onInputChange, 
  onSave 
}) => {
  if (!showModal) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2>{editMode ? 'Chỉnh sửa User' : 'Thêm User mới'}</h2>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>
        <form onSubmit={onSave}>
          <div className="form-group">
            <label>Tên đăng nhập:</label>
            <input 
              type="text" 
              name="username" 
              value={currentUser.username} 
              onChange={onInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={currentUser.email} 
              onChange={onInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:{editMode ? ' (để trống nếu không thay đổi)' : ''}</label>
            <input 
              type="password" 
              name="password" 
              value={currentUser.password} 
              onChange={onInputChange} 
              required={!editMode}
            />
          </div>
          <div className="form-group">
            <label>Quyền:</label>
            <select 
              name="role" 
              value={currentUser.role.name} 
              onChange={onInputChange}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="save-button">
              {editMode ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;