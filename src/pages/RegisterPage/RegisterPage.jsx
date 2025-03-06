import React from "react";
import {
  Button,
  Input,
  Form,
  notification,
  Row,
  Col,
  message,
  Divider,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../../services/api.service";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = async (values) => {
    try {
      const { full_name, email, password, phone, address } = values;
      const res = await registerAPI(full_name, email, password, phone, address);

      if (res.data && res.data.Error) {
        api.error({
          message: "Lỗi đăng ký",
          description: JSON.stringify(res.data.msg),
        });

        navigate("/sign-up");
      } else {
        api.success({
          message: "Đăng ký thành công",
          description: "Bạn sẽ được chuyển hướng đến trang đăng nhập.",
        });

        setTimeout(() => {
          navigate("/sign-in"); // Điều hướng sau khi thông báo xong
        }, 1500);
      }
    } catch (error) {
      console.error("Lỗi hệ thống:", error);

      api.error({
        message: "Lỗi hệ thống",
        description: "Không thể kết nối đến server. Vui lòng thử lại!",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ margin: "10px" }}

        //   onFinishFailed={onFinishFailed}
      >
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Full Name"
              name="full_name"
              rules={[
                {
                  required: true,
                  message: "Full Name Không đc để trống",
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email không đc để trống",
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Passwd không đc để trống",
                },
              ]}>
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Địa chỉ không đc để trống",
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/\d+/g),
                  message: "Chỉ nhập số!",
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <div>
              <Button onClick={() => form.submit()} type="primary">
                Register
              </Button>
            </div>
          </Col>
        </Row>
        <Divider />

        <div style={{ textAlign: "center" }}>
          Bạn đã có tài khoản rồi ?{" "}
          <Link to={"/sign-in"}>Đăng nhập tại đây </Link>
        </div>
      </Form>
    </>
  );
};
export default RegisterPage;
