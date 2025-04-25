import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Table,
  Space,
  Tooltip,
  Typography,
  Card,
  Breadcrumb,
  Badge,
  Tag,
  Row,
  Col,
  Divider,
  Avatar,
  message,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
  SearchOutlined,
  UserOutlined,
  ReloadOutlined,
  EyeOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import UserCreateModal from "../../../components/common/admin/AdminUsers/UserCreateModal/UserCreateModal";
import UserUpdateModal from "../../../components/common/admin/AdminUsers/UserUpdateModal/UserUpdateModal";
import UserDeleteModal from "../../../components/common/admin/AdminUsers/UserDeleteModal/UserDeleteModal";
import { fetchUsertAPI } from "../../../services/api.service";
import "./AdminUsersPage.scss";

const { Title, Text } = Typography;

const AdminUsersPage = (props) => {
  const {
    current = 1,
    pageSize = 10,
    setCurrent,
    setPageSize,
    total = 0,
  } = props;

  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataUsers, setDataUsers] = useState([]);

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Table pagination change handler
  const handleTableChange = (pagination) => {
    if (pagination?.current && pagination.current !== current) {
      setCurrent(pagination.current);
    }
    if (pagination?.pageSize && pagination.pageSize !== pageSize) {
      setPageSize(pagination.pageSize);
    }
  };

  // Fetch user data
  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await fetchUsertAPI();
      setDataUsers(res.data);
    } catch (error) {
      message.error("Không thể tải dữ liệu người dùng");
      console.error("Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initialize data on component mount
  useEffect(() => {
    loadUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = dataUsers.filter((user) => {
    const keyword = searchTerm.toLowerCase();
    return (
      (user?.full_name || "").toLowerCase().includes(keyword) ||
      (user?.email || "").toLowerCase().includes(keyword) ||
      (user?.phone || "").toLowerCase().includes(keyword) ||
      (user?.address || "").toLowerCase().includes(keyword)
    );
  });

  // Handle edit user action
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
  };

  // Handle delete user action
  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  // Table columns configuration
  const columns = [
    {
      title: "Thông tin",
      key: "user_info",
      render: (_, record) => (
        <Space>
          <Avatar
            size={40}
            icon={<UserOutlined />}
            style={{ backgroundColor: "#1890ff" }}
          />
          <Space direction="vertical" size={0}>
            <Text strong>{record.full_name}</Text>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {record.email}
            </Text>
          </Space>
        </Space>
      ),
    },
    {
      title: "Điện thoại",
      key: "phone",
      dataIndex: "phone",
      render: (phone) => phone || <Text type="secondary">Chưa cập nhật</Text>,
    },
    {
      title: "Địa chỉ",
      key: "address",
      dataIndex: "address",
      render: (address) =>
        address || <Text type="secondary">Chưa cập nhật</Text>,
      ellipsis: true,
    },
    {
      title: "Quyền hạn",
      key: "role",
      render: (_, record) => {
        const isAdmin = record?.role?.name === "Admin";
        return (
          <Tag color={isAdmin ? "red" : "blue"}>
            {record?.role?.name || "User"}
          </Tag>
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      width: 120,
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Chỉnh sửa">
            <Button
              icon={<EditOutlined />}
              size="small"
              type="primary"
              ghost
              onClick={() => handleEditUser(record)}
            />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button
              icon={<DeleteOutlined />}
              size="small"
              danger
              onClick={() => handleDeleteUser(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="admin-users-page">
      {/* Page header */}
      <Card className="page-header-card">
        <Breadcrumb
          items={[{ title: "Dashboard" }, { title: "Quản lý người dùng" }]}
        />
        <Row align="middle" justify="space-between" style={{ marginTop: 16 }}>
          <Col>
            <Title level={2}>Quản lý người dùng</Title>
            <Text type="secondary">
              Quản lý tất cả người dùng trong hệ thống
            </Text>
          </Col>
          <Col>
            <Space>
              <Button icon={<ReloadOutlined />} onClick={loadUsers}>
                Làm mới
              </Button>
              <Button
                type="primary"
                icon={<UserAddOutlined />}
                onClick={() => setIsCreateModalOpen(true)}>
                Thêm người dùng
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Tools and filters */}
      <Card className="tools-card" style={{ marginTop: 16, marginBottom: 16 }}>
        <Row gutter={16} align="middle">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Tìm kiếm người dùng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              allowClear
            />
          </Col>
          <Col>
            <Button icon={<FilterOutlined />}>Bộ lọc</Button>
          </Col>
          <Col flex="auto">
            <Text type="secondary" style={{ float: "right" }}>
              Hiển thị {filteredUsers.length} / {dataUsers.length} người dùng
            </Text>
          </Col>
        </Row>
      </Card>

      {/* Users table */}
      <Card className="table-card">
        <Table
          rowKey="_id"
          columns={columns}
          dataSource={filteredUsers}
          loading={loading}
          pagination={{
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total || filteredUsers.length,
            showTotal: (total, range) => (
              <span>
                {range[0]}-{range[1]} trên {total} người dùng
              </span>
            ),
          }}
          onChange={handleTableChange}
          scroll={{ x: "max-content" }}
        />
      </Card>

      {/* Create user modal */}
      <UserCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={loadUsers}
      />

      {/* Update user modal */}
      <UserUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => {
          setIsUpdateModalOpen(false);
          setSelectedUser(null);
        }}
        userData={selectedUser}
        onSuccess={loadUsers}
      />

      {/* Delete user modal */}
      <UserDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedUser(null);
        }}
        userData={selectedUser}
        onSuccess={loadUsers}
      />
    </div>
  );
};

export default AdminUsersPage;
