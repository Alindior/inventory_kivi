import React, { useEffect } from 'react';
import { Form, Input, InputNumber } from 'antd';
import { CustomAny } from '../../../../../../shared/types/CustomAny';
import { Card } from '../../../../../../types/card';

interface Props {
  form: CustomAny;
  card: Card;
  isLoading: boolean;
}

const FormUpdate: React.FC<Props> = ({ form, card }) => {
  useEffect(() => {
    form.setFieldsValue(card);
  }, []);

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

export default FormUpdate;
