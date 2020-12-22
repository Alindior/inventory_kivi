import React from 'react';
import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { AuthenticationFormValues } from '../interfaces/AuthenticationFormValues';
import AuthorizationFormButton from './AuthorizationFormButton';
import AuthenticationApiService from '../services/AuthenticationApiService';

const AuthenticationForm = () => {
  const onSignIn = async (formValues: AuthenticationFormValues) => {
    try {
      await AuthenticationApiService.singIn(formValues);
    } catch ({ response }) {
      console.log(response.data);
    }
  };

  return (
    <Form className="Form" name="register" onFinish={onSignIn}>
      <Form.Item name="email">
        <Input prefix={<UserOutlined />} placeholder="Введите email" />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password prefix={<LockOutlined />} placeholder="Введите пароль" />
      </Form.Item>

      <Form.Item>
        <AuthorizationFormButton>Войти</AuthorizationFormButton>
      </Form.Item>
    </Form>
  );
};

export default AuthenticationForm;
