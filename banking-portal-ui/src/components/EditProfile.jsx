import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./EditProfile.css"; // Ensure you have the CSS file for styling

const EditProfile = () => {
  const location = useLocation();
  const { username, accountDetails } = location.state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: accountDetails.email,
    phoneNumber: accountDetails.phoneNumber,
    address: accountDetails.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFinish = () => {
    console.log("Updated Data:", formData);
    // Perform your update logic here (e.g., API call to save the updated data)
    // After successful update, navigate to the dashboard with updated data
    navigate("/", { state: { updatedAccountDetails: { ...accountDetails, ...formData } }, replace: true });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <Form onFinish={handleFinish}>
        <Form.Item label="Email">
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Address">
          <Input type="text" name="address" value={formData.address} onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button type="default" onClick={handleCancel} style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProfile;
