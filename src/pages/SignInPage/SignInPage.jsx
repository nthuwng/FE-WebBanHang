import {
  Button,
  Input,
  Form,
  notification,
  Row,
  Col,
  Divider,
  message,
} from "antd";

import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { loginApi } from "../../services/api.service";

const SignInPage = () => {
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

      navigate("/sign-in");
    } else {
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
    <>
      {contextHolder}
      <Row justify={"center"} style={{ marginTop: "30px" }}>
        <Col xs={24} md={8}>
          <fieldset
            style={{
              padding: "15px",
              margin: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}>
            <legend>Đăng Nhập</legend>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              style={{ margin: "10px" }}

              //   onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
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
                <Input />
              </Form.Item>

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

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Button
                  loading={loading}
                  onClick={() => form.submit()}
                  type="primary">
                  {" "}
                  Login{" "}
                </Button>
              </div>
              <Link to="/">
                Go to home <ArrowRightOutlined />
              </Link>
            </Form>
            <Divider />
            <div style={{ textAlign: "center" }}>
              Chưa có tài khoản ? <Link to={"/sign-up"}>Đăng ký tại đây </Link>
            </div>
          </fieldset>
        </Col>
      </Row>
    </>
  );
};
//test hihi

export default SignInPage;
