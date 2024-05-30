import React, { useState, useEffect } from 'react';
import { Table, DatePicker } from 'antd';
import './Dashboard.css'; // Import your CSS file for styling

const { RangePicker } = DatePicker;

const Transaction = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [dateRange, setDateRange] = useState([null, null]);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => new Date(text).toISOString().slice(0, 10),
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      className: 'custom-header',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text, record) => (
        <span style={{ color: record.amount < 0 ? 'red' : 'green' }}>
          {record.amount}
        </span>
      ),
      sorter: (a, b) => a.amount - b.amount,
      className: 'custom-header',
    },
  ];

  const handleDateChange = (dates) => {
    console.log('Selected Dates:', dates); // Debug log
    setDateRange(dates);
  };

  useEffect(() => {
    if (dateRange && dateRange.length === 2) {
      const [startDate, endDate] = dateRange;
      if (startDate && endDate) {
        const filteredData = transactions.filter((transaction) => {
          const transactionDate = new Date(transaction.date); // Parse transaction date
          const start = new Date(startDate);
          const end = new Date(endDate);
          const isBetween = transactionDate >= start && transactionDate <= end;
          console.log(`Transaction Date: ${transactionDate.toISOString().slice(0, 10)}, Start Date: ${start.toISOString().slice(0, 10)}, End Date: ${end.toISOString().slice(0, 10)}, Is Between: ${isBetween}`); // Debug log
          return isBetween;
        });
        setFilteredTransactions(filteredData);
      } else {
        setFilteredTransactions(transactions);
      }
    } else {
      setFilteredTransactions(transactions);
    }
  }, [transactions, dateRange]);

  console.log("filteredTransactions", filteredTransactions);
  return (
    <div>
      <RangePicker 
        onChange={handleDateChange} 
        style={{ marginBottom: '20px' }} 
        format="YYYY-MM-DD" // Ensure date format consistency
      />
      <Table
        columns={columns}
        dataSource={filteredTransactions}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Transaction;
