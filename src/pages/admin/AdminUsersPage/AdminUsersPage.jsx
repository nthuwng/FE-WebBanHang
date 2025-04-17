import React, { useState } from "react";

import "./AdminUsersPage.css";
import UsersHeader from "../../../components/common/admin/AdminUsers/UsersHeader/UsersHeader";
import UserTableAdmin from "../../../components/common/admin/AdminUsers/UserTableAdmin/UserTableAdmin";
import UserFormModal from "../../../components/common/admin/AdminUsers/UserFormModal/UserFormModal";

const AdminUsersPage = () => {
  // State quản lý danh sách users
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "admin1",
      email: "admin1@example.com",
      role: "admin",
      status: "active",
    },
    {
      id: 2,
      username: "user1",
      email: "user1@example.com",
      role: "user",
      status: "active",
    },
    {
      id: 3,
      username: "user2",
      email: "user2@example.com",
      role: "user",
      status: "inactive",
    },
    {
      id: 4,
      username: "manager1",
      email: "manager1@example.com",
      role: "admin",
      status: "active",
    },
  ]);

  // State cho chức năng tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");

  // State cho modal form thêm/sửa user
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: "",
    email: "",
    password: "",
    role: "user",
    status: "active",
  });

  // Lọc danh sách users theo từ khóa tìm kiếm
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mở modal thêm user mới
  const handleAddUser = () => {
    setEditMode(false);
    setCurrentUser({
      id: null,
      username: "",
      email: "",
      password: "",
      role: "user",
      status: "active",
    });
    setShowModal(true);
  };

  // Mở modal chỉnh sửa user
  const handleEditUser = (user) => {
    setEditMode(true);
    setCurrentUser({ ...user, password: "" });
    setShowModal(true);
  };

  // Xử lý xóa user
  const handleDeleteUser = (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  // Xử lý thay đổi trường input trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  // Xử lý lưu user (thêm mới hoặc cập nhật)
  const handleSaveUser = (e) => {
    e.preventDefault();

    if (editMode) {
      // Cập nhật user hiện có
      setUsers(
        users.map((user) => (user.id === currentUser.id ? currentUser : user))
      );
    } else {
      // Thêm user mới
      const newUser = {
        ...currentUser,
        id:
          users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1,
      };
      setUsers([...users, newUser]);
    }

    setShowModal(false);
  };

  return (
    <div className="admin-users-page">
      <UsersHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddUser={handleAddUser}
      />

      <UserTableAdmin
        users={filteredUsers}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />

      <UserFormModal
        showModal={showModal}
        editMode={editMode}
        currentUser={currentUser}
        onClose={() => setShowModal(false)}
        onInputChange={handleInputChange}
        onSave={handleSaveUser}
      />
    </div>
  );
};

export default AdminUsersPage;
