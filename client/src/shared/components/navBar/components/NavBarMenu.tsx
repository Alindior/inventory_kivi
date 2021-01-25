import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { block } from 'bem-cn';
import { MailOutlined, ReadOutlined } from '@ant-design/icons';

import './NavBarMenu.scss';

const { SubMenu } = Menu;

const NavBarMenu = () => {
  const cn = block('NavBarMenu');

  return (
    <Menu className={cn()} defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<ReadOutlined />}>
        <Link to="/cards/new">Create New Card</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<ReadOutlined />}>
        <Link to="/cards">Create New Card</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default NavBarMenu;
