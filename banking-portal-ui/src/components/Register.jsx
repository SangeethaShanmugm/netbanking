import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import api from "./api"; // Make sure this is the correct path to your api.js file

const { Title, Text } = Typography;

function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password, email, address, phone_number } = values;
    try {
      const response = await api.post("/users/register", {
        name: username,
        password,
        email,
        address,
        phone_number,
      });
      message.success('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      message.error("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 300 }}>
        <Title level={2} style={{ textAlign: "center" }}>Register</Title>
        <Form name="register" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="email" rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item name="confirm" dependencies={["password"]} hasFeedback rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match!"));
              },
            }),
          ]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item name="address" rules={[{ required: true, message: "Please input your Address!" }]}>
            <Input prefix={<HomeOutlined />} placeholder="Address" />
          </Form.Item>
          <Form.Item name="phone_number" rules={[
            { required: true, message: "Please input your Phone Number!" },
            { pattern: /^\d{10}$/, message: "Phone number must be 10 digits" },
          ]}>
            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Register
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Text>Already registered? </Text>
            <Button type="link" onClick={() => navigate('/')} style={{ padding: 0 }}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Register;
