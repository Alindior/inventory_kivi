import React, { useState } from 'react';
import { Layout } from 'antd';
import { block } from 'bem-cn';

import './NavBar.scss';
import NavBarMenu from './components/NavBarMenu';
import NavBarLogo from './components/NavBarLogo';

const { Sider } = Layout;

const NavBar = () => {
  const cn = block('NavBar');

  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => setCollapse(!collapse);

  return (
    <div className={cn()}>
      <Sider
        collapsible
        collapsed={collapse}
        onCollapse={toggleCollapse}
        theme="light"
        className={cn('SideMenu').toString()}
      >
        <NavBarLogo />
        <NavBarMenu />
      </Sider>
    </div>
  );
};

export default NavBar;
