import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { CreateCard } from '../../../../../types/card';

interface Props {
  form: FormInstance<CreateCard>;
}

const CardsHeaderModalFormCreateCard: React.FC<Props> = ({ form }) => {
  return (
    <Form labelCol={{ span: 4 }} form={form}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Cost" name="cost">
        <InputNumber />
      </Form.Item>
    </Form>
  );
};

export default CardsHeaderModalFormCreateCard;
