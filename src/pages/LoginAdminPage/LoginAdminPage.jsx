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
const LoginAdminPage = () => {
    const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {


    setLoading(true);
  try {
    const res = await loginApi(values.email, values.password);
    if (res.data?.Error) {
      notification.error({
        message: "Lỗi đăng nhập",
        description: res.data.Error,
      });
    } else {
      message.success("Đăng nhập thành công");

      // Lưu token & role vào localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      // Điều hướng dựa trên quyền
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  } catch (error) {
    notification.error({
      message: "Lỗi hệ thống",
      description: error.response?.data?.message || "Đã có lỗi xảy ra!",
    });
  } finally {
    setLoading(false);
  }
};
  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}>
          <legend>Đăng Nhập Bằng Tài Khoản Admin</legend>

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
        
        </fieldset>
      </Col>

    </Row>
    
  );
}
export default  LoginAdminPage
