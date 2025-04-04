import React, { useState } from "react";
import { Button, Input, Form, notification, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../../../services/api.service";
import "./SignOutComponent.css";
import {
  ArrowRightOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";

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
      <form action="#" className="sign-out-container-form">
        <h1 className="login-page-h1">Create Account</h1>
        <div className="social-container">
          <a href="#" className="">
            <FacebookOutlined />
          </a>
          <a href="#" className="">
            <GooglePlusOutlined />
          </a>
        </div>
        <span className="login-page-span" style={{ marginBottom: "10px" }}>
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
            <Input placeholder="Full Name" className="sign-in-input" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email không đc để trống",
              },
            ]}>
            <Input placeholder="Email" className="sign-in-input" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password không đc để trống",
              },
            ]}>
            <Input.Password
              placeholder="Password"
              className="sign-in-input"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  form.submit();
                }
              }}
            />
          </Form.Item>
          <div>
            <Button
              onClick={() => form.submit()}
              type="primary"
              style={{ width: "360px", fontSize: "20px", height: "auto" }}>
              Register
            </Button>
          </div>
        </Form>
      </form>
    </div>
  );
};
export default SignOutComponent;
