import React from 'react';
import CardsTableColumnsActionColumn from './components/CardsTableColumnsActionsColumn';

interface Props {
  showModal: () => void;
}

const useCardsTableColumns = ({ showModal }: Props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'age',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'id',
      render: (id: string) => <CardsTableColumnsActionColumn id={id} showModal={showModal} />,
    },
  ];

  return { columns };
};

export default useCardsTableColumns;
