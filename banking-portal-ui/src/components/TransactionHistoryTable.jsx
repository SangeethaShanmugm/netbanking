import React from 'react';
import { Table } from 'antd';
import "./Dashboard.css"

const TransactionHistoryTable = ({ transactions }) => {
  // Define columns for the table
  
    const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          sorter: (a, b) => new Date(a.date) - new Date(b.date),
          className: 'custom-header',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          filters: [
            { text: 'Deposit', value: 'Deposit' },
            { text: 'Withdrawal', value: 'Withdrawal' },
          ],
          onFilter: (value, record) => record.description.includes(value),
          className: 'custom-header',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          sorter: (a, b) => a.amount - b.amount,
          className: 'custom-header',
        },
      ];
  // Define pagination configuration
  const pagination = {
    pageSize: 10, // Number of items per page
    pageSizeOptions: ['10', '20', '30'], // Options for number of items per page
    showSizeChanger: true, // Allow users to change number of items per page
    showQuickJumper: true, // Allow users to jump to a specific page
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`, // Display total number of items
  };

  return (
    <Table
      columns={columns}
      dataSource={transactions}
      pagination={pagination}
    />
  );
};

export default TransactionHistoryTable;
