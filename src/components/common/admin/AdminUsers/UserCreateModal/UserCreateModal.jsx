import React, { useState } from "react";
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
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { createUserAPI } from "../../../../../services/api.service";

const UserCreateModal = ({ isOpen, onClose, onSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

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

      const { full_name, email, password, phone, address, role } = values;

      const res = await createUserAPI(
        full_name,
        phone,
        password,
        address,
        email,
        role
      );

      if (res.data) {
        api.success({
          message: "Thành công",
          description: "Tạo mới người dùng thành công!",
        });
        handleCancel();
        onSuccess();
      } else {
        throw new Error(res.message || "Không thể tạo người dùng");
      }
    } catch (error) {
      api.error({
        message: "Lỗi",
        description: error.message || "Có lỗi xảy ra khi tạo người dùng!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Thêm người dùng mới"
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
            Tạo người dùng
          </Button>,
        ]}
        maskClosable={false}
        width={600}>
        <Divider />

        <Form form={form} layout="vertical" requiredMark="optional">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="full_name"
                label="Họ và tên"
                rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}>
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
                <Input prefix={<MailOutlined />} placeholder="Nhập email" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu!" },
                ]}>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Nhập mật khẩu"
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

          <Form.Item
            name="role"
            label="Quyền hạn"
            rules={[{ required: true, message: "Vui lòng chọn quyền hạn!" }]}>
            <Select
              placeholder="Chọn quyền hạn"
              options={[
                { value: "67bf253b864117b1d4b914df", label: "Admin" },
                { value: "67bf2560864117b1d4b914e1", label: "Client" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserCreateModal;
