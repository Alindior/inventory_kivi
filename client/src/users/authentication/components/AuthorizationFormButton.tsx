import React from 'react';
import './AuthorizationFormButton.scss';
import { Button } from 'antd';

const AuthorizationFormButton: React.FC = ({ children }) => {
  return (
    <Button className="AuthorizationFormButton" type="primary" htmlType="submit">
      {children}
    </Button>
  );
};

export default AuthorizationFormButton;
