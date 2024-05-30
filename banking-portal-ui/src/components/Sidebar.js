import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  DollarOutlined,
  MoneyCollectOutlined,
  SwapOutlined,
  KeyOutlined,
  HistoryOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      className="sidebar"
      theme="light"
      width={250}
      trigger={null}
    >
      <div className="logo">
        <h1 style={{ display: collapsed ? "none" : "block" }}>OneStopBank</h1>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        inlineCollapsed={collapsed}
        className="menu"
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<HistoryOutlined />}>
          <Link to="/transactions">Transaction History</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SwapOutlined />}>
          <Link to="/fund-transfer">Fund Transfer</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<KeyOutlined />}>
          <Link to="/statement">Statement</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DollarOutlined />}>
          <Link to="/deposit">Deposit</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
          <Link to="/withdraw">Withdraw</Link>
        </Menu.Item>

        <Menu.Item key="6" icon={<UserOutlined />}>
          <Link to="/user-profile"> User Profile</Link>
        </Menu.Item>
      </Menu>
      <div className="toggle-button" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Sider>
  );
};

export default Sidebar;
