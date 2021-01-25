import React from 'react';
import { Layout } from 'antd';
import { block } from 'bem-cn';

import './PrimaryLayoutContent.scss';
import Header from '../../header/Header';

const PrimaryLayoutContent: React.FC = ({ children }) => {
  const cn = block('PrimaryLayoutContent');

  return (
    <Layout className={cn()}>
      <Header />

      {children}
    </Layout>
  );
};

export default PrimaryLayoutContent;
