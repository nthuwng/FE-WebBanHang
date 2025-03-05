import { Button, Input, Form, notification, Row, Col,message, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../../services/api.service";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { full_name, email, password, phone, address } = values;

    const res = await registerAPI(full_name, email, password, phone, address);

    if (res.data && res.data.Error) {
      notification.error({
        message: "Error register",
        description: JSON.stringify(res.message),
      });

      navigate("/sign-up");
    } else {
      message.success("Đăng ký thành công");
      navigate("/sign-in");
    }
  };
  return (
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
            Bạn đã có tài khoản rồi ? <Link to={"/sign-in"}>Đăng nhập tại đây </Link>
          </div>
    </Form>
  );
};
export default RegisterPage;
