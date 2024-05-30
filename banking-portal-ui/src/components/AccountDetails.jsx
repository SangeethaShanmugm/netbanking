import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

function AccountDetails() {
  return (
    <Card title="Account Details">
      <Title level={4}>Account Number: 123456789</Title>
      <Paragraph>Account Holder: John Doe</Paragraph>
      <Paragraph>Balance: $10,000</Paragraph>
    </Card>
  );
}

export default AccountDetails;
