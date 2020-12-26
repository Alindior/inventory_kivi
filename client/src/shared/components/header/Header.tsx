import React from 'react';
import { PageHeader } from 'antd';

import './Header.scss';
import HeaderMenu from './components/HeaderMenu';

const Header = () => {
  return (
    <div>
      <PageHeader ghost={false} title="Inventory system" extra={<HeaderMenu />} />
    </div>
  );
};

export default Header;
