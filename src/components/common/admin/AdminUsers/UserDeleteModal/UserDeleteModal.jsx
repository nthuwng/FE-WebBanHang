import React, { useEffect, useState } from "react";
import {
  Modal,
  Typography,
  notification,
  Button,
  Space,
  Alert,
  Descriptions,
  Avatar,
  Divider,
} from "antd";
import {
  ExclamationCircleOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { deleteUserAPI } from "../../../../../services/api.service";

const { Text, Title } = Typography;

const UserDeleteModal = ({ isOpen, onClose, userData, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

  // Handle delete user
  const handleDelete = async () => {
    if (!userData?._id) return;

    try {
      setLoading(true);
      const res = await deleteUserAPI(userData._id);

      if (res.data) {
        api.success({
          message: "Thành công",
          description: "Xóa người dùng thành công!",
        });
        onClose();
        onSuccess();
      } else {
        throw new Error(res.message || "Không thể xóa người dùng");
      }
    } catch (error) {
      api.error({
        message: "Lỗi",
        description: error.message || "Có lỗi xảy ra khi xóa người dùng!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={
          <Space>
            <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
            <span>Xác nhận xóa người dùng</span>
          </Space>
        }
        open={isOpen}
        onCancel={onClose}
        footer={[
          <Button key="cancel" onClick={onClose}>
            Hủy
          </Button>,
          <Button
            key="delete"
            type="primary"
            danger
            icon={<DeleteOutlined />}
            loading={loading}
            onClick={handleDelete}>
            Xác nhận xóa
          </Button>,
        ]}
        maskClosable={false}
        centered>
        <Divider />

        <Alert
          message="Cảnh báo"
          description="Hành động này không thể hoàn tác. Tất cả dữ liệu liên quan đến người dùng này sẽ bị xóa vĩnh viễn."
          type="warning"
          showIcon
          style={{ marginBottom: 16 }}
        />

        {userData && (
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <Avatar
              size={64}
              icon={<UserOutlined />}
              style={{ marginBottom: 16 }}
            />
            <Title level={4}>{userData.full_name}</Title>
            <Text type="secondary">{userData.email}</Text>

            <Divider />

            <Descriptions column={1} size="small">
              <Descriptions.Item label="ID">{userData._id}</Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                {userData.phone || "Chưa cập nhật"}
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ">
                {userData.address || "Chưa cập nhật"}
              </Descriptions.Item>
              <Descriptions.Item label="Quyền hạn">
                {userData.role?.name || "User"}
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Modal>
    </>
  );
};

export default UserDeleteModal;
