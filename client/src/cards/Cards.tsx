import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Cards.scss';
import { RootState } from '../redux/reducers/state';
import PrimaryContainer from '../shared/components/PrimaryContainer';
import CardsTable from './components/cardsTable/CardsTable';
import CardsHeader from './components/cardsHeader/CardsHeader';
import { CardActions } from '../redux/actions';

const Cards: React.FC = () => {
  const dispatch = useDispatch();
  const { cards, isLoading } = useSelector((state: RootState) => state.card);

  const getAllCards = () => dispatch(CardActions.getAllCards());

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <PrimaryContainer title="Cards">
      <CardsHeader />

      <CardsTable data={cards} isLoading={isLoading} />
    </PrimaryContainer>
  );
};

export default Cards;
