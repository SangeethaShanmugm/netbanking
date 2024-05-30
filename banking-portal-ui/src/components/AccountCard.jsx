import React from 'react';
import "./Dashboard.css"
import { useLocation } from 'react-router-dom';


const AccountCard = ({ accountDetails }) => {
  const location = useLocation();
  const { username } = location.state || {};

  // Dummy data if accountDetails is not available
  const dummyData = {
    balance: '$1,00,000',
    accountNumber: '1234567890',
    accountType: 'Savings',
    branch: 'Main Street',
    ifsccode: 'ABCD12345678',
  };

  // Merge dummy data with accountDetails if accountDetails is not available
  const data = accountDetails ? accountDetails : dummyData;

  return (
    <div className="account-card">
      <div className="card-content">
      <div className="header">
      <h2 className="balance">{data.balance}</h2>
      </div>
     
        <div className="details">
          <p><strong>Account Number:</strong> {data.accountNumber}</p>
          <p><strong>Account Type:</strong> {data.accountType}</p>
          <p><strong>Branch:</strong> {data.branch}</p>
          <p><strong>IFSC Code:</strong> {data.ifsccode}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
