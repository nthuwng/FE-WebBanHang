import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  notification,
  Divider,
  Button,
  Row,
  Col,
  Alert,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { updateUserAPI } from "../../../../../services/api.service";

const UserUpdateModal = ({ isOpen, onClose, userData, onSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo


  // Initialize form with user data when it changes
  useEffect(() => {
    if (userData && isOpen) {
      form.setFieldsValue({
        _id: userData._id,
        full_name: userData.full_name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        role: userData.role?._id,
      });
    }
  }, [userData, isOpen, form]);

  // Reset form when modal closes
  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  // Submit form
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      const { _id, full_name, email, password, phone, address } = values;

      const res = await updateUserAPI(
        _id,
        full_name,
        phone,
        password || undefined, // Only send password if it's provided
        address,
        email
      );

      if (res.data) {
        api.success({
          message: "Thành công",
          description: "Cập nhật thông tin người dùng thành công!",
        });
        handleCancel();
        onSuccess();
      } else {
        throw new Error(
          res.message || "Không thể cập nhật thông tin người dùng"
        );
      }
    } catch (error) {
        api.error({
        message: "Lỗi",
        description:
          error.message || "Có lỗi xảy ra khi cập nhật thông tin người dùng!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Cập nhật thông tin người dùng"
        open={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleSubmit}>
            Cập nhật
          </Button>,
        ]}
        maskClosable={false}
        width={600}>
        <Divider />

        {userData && (
          <Form form={form} layout="vertical" requiredMark="optional">
            <Form.Item name="_id" hidden={true}>
              <Input />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="full_name"
                  label="Họ và tên"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ tên!" },
                  ]}>
                  <Input prefix={<UserOutlined />} placeholder="Nhập họ tên" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email!" },
                    { type: "email", message: "Email không đúng định dạng!" },
                  ]}>
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="Nhập email"
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="password"
                  label="Mật khẩu"
                  extra="Để trống nếu không muốn thay đổi mật khẩu">
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Nhập mật khẩu mới"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại!" },
                  ]}>
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="Nhập số điện thoại"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="address" label="Địa chỉ">
              <Input prefix={<HomeOutlined />} placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default UserUpdateModal;
