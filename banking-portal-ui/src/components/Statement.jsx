import React, { useState, useEffect } from 'react';
import { Table, DatePicker, Button } from 'antd';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Dashboard.css'; // Import your CSS file for styling

const { RangePicker } = DatePicker;

const Statement = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [isFiltered, setIsFiltered] = useState(false); // Track if filtering is applied

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
    setDateRange(dates);
    setIsFiltered(false); // Reset the filtered state when date range changes
  };

  useEffect(() => {
    if (dateRange && dateRange.length === 2) {
      const [startDate, endDate] = dateRange;
      if (startDate && endDate) {
        const filteredData = transactions.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          const start = new Date(startDate);
          const end = new Date(endDate);
          return transactionDate >= start && transactionDate <= end;
        });
        setFilteredTransactions(filteredData);
        setIsFiltered(true); // Set filtered state when data is filtered
      } else {
        setFilteredTransactions([]);
        setIsFiltered(false);
      }
    } else {
      setFilteredTransactions([]);
      setIsFiltered(false);
    }
  }, [transactions, dateRange]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Date", "Description", "Amount"];
    const tableRows = [];

    filteredTransactions.forEach(transaction => {
      const transactionData = [
        new Date(transaction.date).toISOString().slice(0, 10),
        transaction.description,
        transaction.amount
      ];
      tableRows.push(transactionData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Transaction Statement", 14, 15);
    doc.save(`statement_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  return (
    <div>
      <RangePicker 
        onChange={handleDateChange} 
        style={{ marginBottom: '20px' }} 
        format="YYYY-MM-DD" // Ensure date format consistency
      />
      <Button type="primary" onClick={downloadPDF} style={{ marginBottom: '20px' }} disabled={!isFiltered}>
        Download PDF
      </Button>
      {isFiltered && (
        <Table
          columns={columns}
          dataSource={filteredTransactions}
          pagination={{ pageSize: 10 }}
        />
      )}
    </div>
  );
};

export default Statement;
