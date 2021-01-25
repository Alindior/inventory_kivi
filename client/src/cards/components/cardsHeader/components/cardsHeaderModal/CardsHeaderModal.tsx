import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'antd';
import { block } from 'bem-cn';

import './CardsHeaderModal.scss';
import CardsHeaderModalFormCreateCard from './CardsHeaderModalFormCreateCard';
import { RootState } from '../../../../../redux/reducers/state';
import { CardActions } from '../../../../../redux/actions';
import { CreateCard } from '../../../../../types';

interface Props {
  isVisible: boolean;
  onCancel: () => void;
}

const CardsHeaderModal: React.FC<Props> = ({ onCancel, isVisible }) => {
  const cn = block('CardsHeaderModal');
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.card.isLoadingCreate);
  const [form] = Form.useForm<CreateCard>();

  const createCard = async () => {
    const formValues = await form.getFieldsValue();
    dispatch(CardActions.create(formValues));
  };

  const resetFormValues = () => form.resetFields();

  return (
    <Modal
      className={cn()}
      title="Create new Card"
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button type="primary">Back</Button>,

        <Button type="primary" onClick={resetFormValues}>
          Reset
        </Button>,

        <Button
          className={cn('CreateBtn').toString()}
          type="primary"
          loading={isLoading}
          onClick={createCard}
        >
          Create
        </Button>,
      ]}
    >
      <CardsHeaderModalFormCreateCard form={form} />
    </Modal>
  );
};

export default CardsHeaderModal;
