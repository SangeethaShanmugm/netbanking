// import React from 'react';
// import { Form, Input, Button, Checkbox, Card, Typography, message } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const { Title } = Typography;

// function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const onFinish = (values) => {
//     const { username, password } = values;
//     if (login(username, password)) {
//       message.success('Login successful!');
//       navigate('/', { state: { username } }); // Pass username to dashboard
//     } else {
//       message.error('Invalid username or password');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <Card style={{ width: 300 }}>
//         <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
//         <Form
//           name="login"
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//         >
//           <Form.Item
//             name="username"
//             rules={[{ required: true, message: 'Please input your Username!' }]}
//           >
//             <Input prefix={<UserOutlined />} placeholder="Username" />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: 'Please input your Password!' }]}
//           >
//             <Input
//               prefix={<LockOutlined />}
//               type="password"
//               placeholder="Password"
//             />
//           </Form.Item>
//           <Form.Item>
//             <Form.Item name="remember" valuePropName="checked" noStyle>
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
//               Log in
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import api from './api';

const { Title, Text } = Typography;

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { name, password } = values;
    try {
      const response = await api.post('/users/login', {
        name,
        password,
      });

      message.success('Login successful!');
      navigate('/dashboard', { state: { name } }); 
    } catch (error) {
      message.error('An error occurred during login. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 300 }}>
        <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Sign in
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Text style={{ display: 'inline-block', marginRight: '5px' }}>Not registered?</Text>
            <Button type="link" onClick={() => navigate('/register  ')} style={{ display: 'inline-block', padding: '0' }}>
              Please click here
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
