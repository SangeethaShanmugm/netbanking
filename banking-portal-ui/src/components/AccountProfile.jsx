import React from "react";
import "./Dashboard.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

const AccountProfile = ({ accountDetails }) => {
  const location = useLocation();
  const { username } = location.state || {};
  const navigate = useNavigate();

  // Dummy data if accountDetails is not available
  const dummyData = {
    accountNumber: "1234567890",
    email: "jack@gmail.com",
    phoneNumber: 123456789,
    address: "Street 2, Rockefeller Center, NY",
  };

  // Merge dummy data with accountDetails if accountDetails is not available
  const data = accountDetails ? accountDetails : dummyData;


   // Convert username to uppercase
   const displayUsername = username ? username.toUpperCase() : "USER";


   const handleEditClick = () => {
    navigate("/edit-profile", { state: { username, accountDetails: data } });
  };



  return (
    <div className="account-card">
      <div className="card-content">
       <div className="user-align">
       <h2>Welcome, {displayUsername}</h2>
        <Button to="/" className="edit-link" onClick={handleEditClick}>Edit Profile details</Button></div>
        <div className="details">
          <p>
            <strong>Account Number:</strong> {data.accountNumber}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {data.phoneNumber}
          </p>
          <p>
            <strong>Address:</strong> {data.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
