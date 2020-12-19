import React from 'react';
import { Col, Row } from 'antd';

import './PrimarySectionContainer.scss';

interface Props {
  span?: number;
  offset?: number;
}

const PrimarySectionContainer: React.FC<Props> = ({ children }) => {
  return (
    <Row>
      <Col span={20} offset={2}>
        {children}
      </Col>
    </Row>
  );
};

export default PrimarySectionContainer;
