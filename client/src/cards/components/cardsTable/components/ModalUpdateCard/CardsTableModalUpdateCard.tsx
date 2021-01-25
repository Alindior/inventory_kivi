import React, { useEffect } from 'react';
import { Button, Modal } from 'antd';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const CardsTableModalUpdateCard: React.FC<Props> = ({ isVisible, onClose }) => {
  useEffect(() => {
    console.log('Was called');
  }, []);

  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      title="Create new Card"
      footer={[<Button type="primary">Back</Button>, <Button type="primary">Update</Button>]}
    />
  );
};

export default CardsTableModalUpdateCard;
