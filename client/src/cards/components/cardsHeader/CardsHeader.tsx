import React, { useState } from 'react';
import { Button } from 'antd';

import './CardsHeader.scss';
import CardsHeaderModal from './components/cardsHeaderModal/CardsHeaderModal';

const CardsHeader: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const toggleModal = () => setIsVisibleModal(!isVisibleModal);

  return (
    <div className="CardsHeader">
      <Button className="CardsHeader__btn" type="primary" size="large" onClick={toggleModal}>
        Create card
      </Button>

      <CardsHeaderModal isVisible={isVisibleModal} onCancel={toggleModal} />
    </div>
  );
};

export default CardsHeader;
