import React, { useState } from 'react';
import { Layout } from 'antd';

import './NavBar.scss';
import NavBarLogo from './components/NavBarLogo';
import NavBarMenu from './components/NavbarMenu';

const { Sider } = Layout;

const NavBar = () => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => setCollapse(!collapse);

  return (
    <Sider
      collapsible
      collapsed={collapse}
      onCollapse={toggleCollapse}
      theme="light"
      className="SideMenu"
    >
      <NavBarLogo />
      <NavBarMenu />
    </Sider>
  );
};

export default NavBar;
