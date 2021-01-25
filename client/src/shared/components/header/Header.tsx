import React from 'react';
import { PageHeader } from 'antd';
import { block } from 'bem-cn';

import './Header.scss';
import HeaderMenu from './components/HeaderMenu';

const Header = () => {
  const cn = block('Header');

  return (
    <PageHeader className={cn()} ghost={false} title="Inventory system" extra={<HeaderMenu />} />
  );
};

export default Header;
