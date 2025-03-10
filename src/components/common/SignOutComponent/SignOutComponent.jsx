import React, { useState } from "react";
import { Button, Input, Form, notification, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../../../services/api.service";
import "./SignOutComponent.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export const SignOutComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const onFinish = async (values) => {
    try {
      const { full_name, email, password } = values;
      const res = await registerAPI(full_name, email, password);
      if (res.data && res.data.Error) {
        api.error({
          message: "Lỗi đăng ký",
          description: JSON.stringify(res.data.msg),
        });

        navigate("/login");
      } else {
        api.success({
          message: "Đăng ký thành công",
          description: "Mời bạn đăng nhập",
        });

        setTimeout(() => {
          //   navigate("/sign-in"); // Điều hướng sau khi thông báo xong
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
    <div className="form-container sign-up-container">
      <form action="#">
        <h1 classname="login-page-h1">Create Account</h1>
        <div className="social-container">
          <a href="#" className="login-page-social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="login-page-social">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" className="login-page-social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span classname="login-page-span" style={{ marginBottom: "10px" }}>
          or use your email for registration
        </span>
        {contextHolder}
        <Form
          form={form}
          onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="full_name"
            rules={[
              {
                required: true,
                message: "Full Name Không đc để trống",
              },
            ]}>
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email không đc để trống",
              },
            ]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password không đc để trống",
              },
            ]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div>
            <Button onClick={() => form.submit()} type="primary">
              Register
            </Button>
          </div>
        </Form>
      </form>
    </div>
  );
};
export default SignOutComponent;
