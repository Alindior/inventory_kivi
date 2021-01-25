import React from 'react';
import { Layout } from 'antd';
import { block } from 'bem-cn';

import './PrimaryLayout.scss';
import NavBar from '../navBar/NavBar';
import PrimaryLayoutContent from './components/PrimaryLayoutContent';

const PrimaryLayout: React.FC = ({ children }) => {
  const cn = block('PrimaryLayout');

  return (
    <Layout className={cn()}>
      <NavBar />

      <PrimaryLayoutContent>{children}</PrimaryLayoutContent>
    </Layout>
  );
};

export default PrimaryLayout;
