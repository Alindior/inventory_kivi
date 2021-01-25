import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import { block } from 'bem-cn';

import './PrimaryContainer.scss';

const { Title } = Typography;

interface Props {
  title?: string;
}

const PrimaryContainer: React.FC<Props> = ({ children, title }) => {
  const cn = block('PrimaryContainer');

  return (
    <Layout className={cn().toString()}>
      <Title>{title}</Title>

      <Row className={cn('content').toString()}>
        <Col span={24}>{children}</Col>
      </Row>
    </Layout>
  );
};

export default PrimaryContainer;
