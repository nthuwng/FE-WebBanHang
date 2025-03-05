import { Button, Input,Form, notification, Row, Col, Divider, message } from "antd"

import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { loginApi } from "../../services/api.service";

const LoginForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
      const { email, password } = values;
      
   setLoading(true)
      const res = await loginApi(email,password);
        if (res.data) {
message.success("Đăng nhập thành công")
navigate("/");
        }else {
          notification.error({
            message   :"Error Login",
            description: JSON.stringify(res.message)
          })
          navigate("/login");
          }
          setLoading(false)
        }
  return (
    <Row justify={"center"} style={{marginTop: "30px"}}>
      <Col xs={24} md={8}>
    <fieldset style={{
      padding: "15px",
      margin: "5px",
      border: "1px solid #ccc",
      borderRadius: "5px"
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
            message: 'Email không đc để trống',
          },
          {
            type: "email",
            message: 'Email không đúng định dạng',
          }
        ]}
      >
        <Input />
      </Form.Item>
     
      
  
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Passwd không đc để trống',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
   
  
  

  
   
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'

        }}>
          <Button 
          loading={loading}
           onClick={() => form.submit()}
          type="primary" > Login </Button>
          </div>
       <Link to="/">Go to home <ArrowRightOutlined/></Link>
   
   
     
      </Form>
      <Divider />
      <div style={{ textAlign: 'center' }}>Chưa có tài khoản <Link to={"registers"}>Đăng ký tại đây </Link></div>
      </fieldset>
      </Col>
      </Row>
  )
  }

export default LoginForm