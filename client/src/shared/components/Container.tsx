import React from 'react';
import { Col, Row } from 'antd';

import './Container.scss';

const Container: React.FC = ({ children }) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        {children}
      </Col>
    </Row>
  );
};

export default Container;
