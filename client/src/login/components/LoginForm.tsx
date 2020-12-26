import React from 'react';
import { Button, Form, Input } from 'antd';
import { block } from 'bem-cn';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './LoginForm.scss';

interface Props {
  signIn: any;
}

const LoginForm: React.FC<Props> = ({ signIn }) => {
  const cn = block('LoginForm');

  const onSubmit = (formValues: any) => {
    signIn(formValues);
  };

  return (
    <Form className={cn()} name="register" onFinish={onSubmit}>
      <h3 className={cn('title').toString()}>Войти</h3>

      <Form.Item name="email">
        <Input prefix={<UserOutlined />} placeholder="Введите email" />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password prefix={<LockOutlined />} placeholder="Введите пароль" />
      </Form.Item>

      <Form.Item>
        <Button className={cn('button').toString()} type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
