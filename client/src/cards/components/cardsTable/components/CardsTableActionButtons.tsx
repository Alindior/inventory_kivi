import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Modal, Popconfirm, Row } from 'antd';
import { CardActions } from '../../../../redux/actions';
import { RootState } from '../../../../redux/reducers/state';
import Loader from '../../../../shared/components/Loader';
import CardTableFormUpdateCard from './ModalUpdateCard/components/CardsTableFormUpdateCard';
import { Card } from '../../../../types';

interface Props {
  id: string;
}

const CardsTableActionButtons: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const { card, isLoadingOne, isLoadingUpdate, isLoadingDelete } = useSelector(
    (state: RootState) => state.card,
  );
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const loadCard = () => {
    dispatch(CardActions.getOne(id));
  };

  const updateCard = (card: Card) => {
    dispatch(CardActions.updateCard({ ...card, _id: id }));
  };

  const deleteCard = () => {
    dispatch(CardActions.deleteCard(id));
  };

  return (
    <Row gutter={10}>
      <Col>
        <Button
          type="primary"
          onClick={() => {
            showModal();
            loadCard();
          }}
        >
          Update
        </Button>
      </Col>
      <Col>
        <Button type="primary" danger loading={isLoadingDelete}>
          <Popconfirm title="Sure to delete?" onConfirm={deleteCard}>
            Delete
          </Popconfirm>
        </Button>
      </Col>
      <Modal
        title="Create new Card"
        visible={isModalVisible}
        onCancel={handleCancel}
        confirmLoading={isLoadingUpdate}
        footer={[<Button type="primary">Back</Button>, <Button type="primary">Update</Button>]}
        onOk={() => {
          form.validateFields().then((cardValues) => {
            updateCard(cardValues as Card);
          });
        }}
      >
        {isLoadingOne ? (
          <Loader />
        ) : (
          card && <CardTableFormUpdateCard form={form} card={card} isLoading={isLoadingUpdate} />
        )}
      </Modal>
    </Row>
  );
};

export default CardsTableActionButtons;
