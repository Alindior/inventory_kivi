import React from 'react';
import { Button, Col, Popconfirm, Row } from 'antd';

import { Card } from '../../../../../../types';

interface Props {
  id: string;
  showModal: () => void;
  removeCard?: (id: string) => void;
  update?: (cardToUpdate: Card) => void;
}

const CardsTableColumnsActionColumn: React.FC<Props> = ({ showModal }) => {
  // const deleteCard = () => removeCard?(id);

  return (
    <Row gutter={4}>
      <Col>
        <Button type="primary" onClick={showModal}>
          Update
        </Button>
      </Col>
      <Col>
        <Button type="primary" danger>
          <Popconfirm title="Sure to delete?">Delete</Popconfirm>
        </Button>
      </Col>
    </Row>
  );
};

export default CardsTableColumnsActionColumn;
