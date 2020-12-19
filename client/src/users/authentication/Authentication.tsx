import React from 'react';
import { block } from 'bem-cn';
import { Typography } from 'antd';

import './Authentication.scss';
import PrimarySection from '../../shared/components/primarySection/PrimarySection';
import AuthenticationForm from './components/AuthenticationForm';

const { Title } = Typography;

const Authentication: React.FC = () => {
  const cn = block('Authentication');

  return (
    <PrimarySection>
      <div className={cn()}>
        <Title level={4}>Войти</Title>

        <AuthenticationForm />
      </div>
    </PrimarySection>
  );
};

export default Authentication;
