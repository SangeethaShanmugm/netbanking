import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AccountCard from "./AccountCard";
import AccountProfile from "./AccountProfile";
import TransactionHistoryTable from "./TransactionHistoryTable";
import MyCarousel from "./MyCarousel";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const location = useLocation();

  const initialAccountDetails = {
    accountNumber: "1234567890",
    email: "jack@gmail.com",
    phoneNumber: 123456789,
    address: "Street 2, Rockefeller Center, NY",
  };

  const [accountDetails, setAccountDetails] = useState(
    location.state?.updatedAccountDetails || initialAccountDetails
  );


  // Dummy transaction data
  const transactions = [
    { key: '1', date: '2024-01-01', description: 'Deposit', amount: 1000 },
    { key: '2', date: '2024-01-02', description: 'Withdrawal', amount: -500 },
    { key: '3', date: '2024-01-03', description: 'Deposit', amount: 1500 },
    { key: '4', date: '2024-01-04', description: 'Withdrawal', amount: -200 },
    { key: '5', date: '2024-01-05', description: 'Deposit', amount: 800 },
    { key: '6', date: '2024-01-06', description: 'Withdrawal', amount: -300 },
    { key: '7', date: '2024-01-07', description: 'Deposit', amount: 1200 },
    { key: '8', date: '2024-01-08', description: 'Withdrawal', amount: -700 },
    { key: '9', date: '2024-01-09', description: 'Deposit', amount: 400 },
    { key: '10', date: '2024-01-10', description: 'Withdrawal', amount: -600 },
    { key: '11', date: '2024-01-11', description: 'Deposit', amount: 900 },
    { key: '12', date: '2024-01-12', description: 'Withdrawal', amount: -400 },
    { key: '13', date: '2024-01-13', description: 'Deposit', amount: 1300 },
    { key: '14', date: '2024-01-14', description: 'Withdrawal', amount: -100 },
    { key: '15', date: '2024-01-15', description: 'Deposit', amount: 500 },
    { key: '16', date: '2024-01-16', description: 'Withdrawal', amount: -300 },
    { key: '17', date: '2024-01-17', description: 'Deposit', amount: 1100 },
    { key: '18', date: '2024-01-18', description: 'Withdrawal', amount: -800 },
    { key: '19', date: '2024-01-19', description: 'Deposit', amount: 600 },
    { key: '20', date: '2024-01-20', description: 'Withdrawal', amount: -500 },
    { key: '21', date: '2024-01-21', description: 'Deposit', amount: 1400 },
    { key: '22', date: '2024-01-22', description: 'Withdrawal', amount: -300 },
    { key: '23', date: '2024-01-23', description: 'Deposit', amount: 700 },
    { key: '24', date: '2024-01-24', description: 'Withdrawal', amount: -600 },
    { key: '25', date: '2024-01-25', description: 'Deposit', amount: 1500 },
    { key: '26', date: '2024-01-26', description: 'Withdrawal', amount: -400 },
    { key: '27', date: '2024-01-27', description: 'Deposit', amount: 800 },
    { key: '28', date: '2024-01-28', description: 'Withdrawal', amount: -300 },
    { key: '29', date: '2024-01-29', description: 'Deposit', amount: 1000 },
    { key: '30', date: '2024-01-30', description: 'Withdrawal', amount: -200 },
    { key: '31', date: '2024-01-31', description: 'Deposit', amount: 900 },
    { key: '32', date: '2024-02-01', description: 'Withdrawal', amount: -400 },
    { key: '33', date: '2024-02-02', description: 'Deposit', amount: 1300 },
    { key: '34', date: '2024-02-03', description: 'Withdrawal', amount: -100 },
    { key: '35', date: '2024-02-04', description: 'Deposit', amount: 500 },
    { key: '36', date: '2024-02-05', description: 'Withdrawal', amount: -300 },
    { key: '37', date: '2024-02-06', description: 'Deposit', amount: 1100 },
    { key: '38', date: '2024-02-07', description: 'Withdrawal', amount: -800 },
    { key: '39', date: '2024-02-08', description: 'Deposit', amount: 600 },
    { key: '40', date: '2024-02-09', description: 'Withdrawal', amount: -500 },
    { key: '41', date: '2024-02-10', description: 'Deposit', amount: 1400 },
    { key: '42', date: '2024-02-11', description: 'Withdrawal', amount: -300 },
    { key: '43', date: '2024-02-12', description: 'Deposit', amount: 700 },
    { key: '44', date: '2024-02-13', description: 'Withdrawal', amount: -600 },
    { key: '45', date: '2024-02-14', description: 'Deposit', amount: 1500 },
    { key: '46', date: '2024-02-15', description: 'Withdrawal', amount: -400 },
    { key: '47', date: '2024-02-16', description: 'Deposit', amount: 800 },
    { key: '48', date: '2024-02-17', description: 'Withdrawal', amount: -300 },
    { key: '49', date: '2024-02-18', description: 'Deposit', amount: 1000 },
    { key: '50', date: '2024-02-19', description: 'Withdrawal', amount: -200 },
  ];
  


  // To calculate the balance after all transactions
const calculateBalance = (transactions) => {
  return transactions.reduce((acc, transaction) => acc + transaction.amount, 100000); // Starting balance of 1,00,000
};

const totalBalance = calculateBalance(transactions);

// useEffect(() => {
//   alert('hello');
// }, []);
console.log("Total Balance: ", totalBalance);

  return (
    <div>
      
  
      {/* <MyCarousel/> */}
      <div className="dashboard-container">
        <div className="dashboard-item">
          <AccountProfile accountDetails={accountDetails} />
        </div>
        <div className="dashboard-item">
          <AccountCard />
        </div>
      </div>
     
      <div className="dashboard-item">
      <h1>Recent Transactions</h1>
        <TransactionHistoryTable transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;
