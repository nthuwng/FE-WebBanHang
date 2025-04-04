import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../../services/api.service";
import {
  ArrowRightOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import "./SignInComponent.css";

const SignInComponent = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

  const onFinish = async (values) => {
    const { email, password } = values;

    setLoading(true);
    const res = await loginApi(email, password);
    if (res.data && res.data.Error) {
      api.error({
        message: "Tài khoản hoặc mật khẩu không chính xác",
        description: JSON.stringify(res.data.msg),
      });

      navigate("/login");
    } else {
      localStorage.setItem("accessToken", res.data.access_token);
      api.success({
        message: "Đăng nhập thành công",
        description: "Bạn sẽ được chuyển hướng đến trang chính",
      });
      setTimeout(() => {
        navigate("/"); // Điều hướng sau khi thông báo xong
      }, 1500);
    }
    setLoading(false);
  };
  return (
    <div className="form-container sign-in-container">
      <form action="#" onSubmit={onFinish} className="sign-in-container-form">
        <h1 className="login-page-h1">Sign in</h1>
        <div className="social-container">
          <a href="#" className="">
            <FacebookOutlined />
          </a>
          <a href="#" className="">
            <GooglePlusOutlined />
          </a>
        </div>
        <span className="login-page-span" style={{ marginBottom: "10px" }}>
          or use your account
        </span>
        {contextHolder}

        <Form
          className="sign-in-form"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className="sign-in-item-input"
            name="email"
            rules={[
              {
                required: true,
                message: "Email không đc để trống",
              },
              {
                type: "email",
                message: "Email không đúng định dạng",
              },
            ]}>
            <Input placeholder="Email" className="sign-in-input" />
          </Form.Item>
          <Form.Item
            className="sign-in-item-input"
            name="password"
            rules={[
              {
                required: true,
                message: "Passwd không đc để trống",
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Button
              loading={loading}
              onClick={() => form.submit()}
              type="primary"
              style={{ width: "360px", fontSize: "20px", height: "auto" }}>
              {" "}
              Login{" "}
            </Button>
          </div>
        </Form>
      </form>
    </div>
  );
};

export default SignInComponent;
