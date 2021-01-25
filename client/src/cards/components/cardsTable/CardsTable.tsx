import React, { useState } from 'react';
import { Table } from 'antd';

import { Card } from '../../../types/card';
import CardsTableModalUpdateCard from './components/ModalUpdateCard/CardsTableModalUpdateCard';
import useCardsTableColumns from './components/cardsTableColumns/useCardsTableColumns';

interface Props {
  data: Card[];
  isLoading: boolean;
}

const CardsTable: React.FC<Props> = ({ data, isLoading }) => {
  const [isModalUpdateCard, setIsModalUpdateCard] = useState<boolean>(false);
  const showModalUpdateCard = () => setIsModalUpdateCard(true);

  const { columns } = useCardsTableColumns({ showModal: showModalUpdateCard });

  const closeModalUpdateCard = () => setIsModalUpdateCard(false);

  return (
    <>
      <CardsTableModalUpdateCard isVisible={isModalUpdateCard} onClose={closeModalUpdateCard} />

      <Table columns={columns} dataSource={data} loading={isLoading} />
    </>
  );
};

export default CardsTable;
