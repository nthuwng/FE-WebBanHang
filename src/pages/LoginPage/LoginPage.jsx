import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import SignInComponent from "../../components/common/SignInComponent/SignInComponent";
import SignOutComponent from "../../components/common/SignOutComponent/SignOutComponent";
import { Button, Divider, Form, Input, notification } from "antd";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

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
    <div className="Login-Page-body">
      <div
        className={`container ${isRegistering ? "right-panel-active" : ""}`}
        id="container">
        {/* Form Đăng ký */}
        <SignOutComponent />
        {/* Form Đăng nhập */}
        <SignInComponent />
        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 classname="login-page-h1">Welcome!</h1>
              <p className="login-page-p" >
                Do you have an account? Then log in and join us now.
              </p>
              <button
                style={{ backgroundColor: "transparent", borderColor: "#fff" }}
                className="login-page-ghost"
                onClick={() => setIsRegistering(false)}>
                Sign In
              </button>
              <Button className="Button-go-to-home">
                <Link to="/">
                  Go to home
                </Link>
              </Button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 classname="login-page-h1">Hello!</h1>
              <p className="login-page-p">
                Don't have an account? Register now to join us.
              </p>
              <button
                className="login-page-ghost"
                onClick={() => setIsRegistering(true)}
                style={{ backgroundColor: "transparent", borderColor: "#fff" }}>
                Sign Up
              </button>
              <Button className="Button-go-to-home">
                <Link to="/">
                  Go to home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
