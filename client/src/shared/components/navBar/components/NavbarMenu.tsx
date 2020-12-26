import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreAddOutlined, HomeOutlined, LogoutOutlined, ReadOutlined } from '@ant-design/icons';

const NavBarMenu = () => {
  return (
    <Menu defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<ReadOutlined />}>
        <Link to="/cards/new">Create New Card</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<HomeOutlined />}>
        Statistics
      </Menu.Item>
      <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
        Create
      </Menu.Item>
      <Menu.Item key="4" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default NavBarMenu;
