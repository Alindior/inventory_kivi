import { handleActions } from 'redux-actions';

import { Card, CardState } from '../../types/card';
import { CardActions } from '../actions';
import { CustomAny } from '../../shared/types/CustomAny';

const initialState = {
  cards: [],
  card: null,
  isLoadingOne: false,
  isLoading: false,
  isLoadingUpdate: false,
  isLoadingDelete: false,
  isLoadingCreate: false,
};

export const CardReducer = handleActions<CardState, CustomAny>(
  {
    [CardActions.Type.CREATE]: (state) => ({ ...state }),
    [CardActions.Type.SET_LOADING_CREATE]: (state) => ({
      ...state,
      isLoadingCreate: !state.isLoadingCreate,
    }),
    [CardActions.Type.ADD_NEW]: (state, action) => ({
      ...state,
      cards: [...state.cards, action.payload],
    }),
    [CardActions.Type.SET_ALL]: (state, action) => ({ ...state, cards: action.payload }),
    [CardActions.Type.SET_LOADING]: (state) => ({ ...state, isLoading: !state.isLoading }),
    [CardActions.Type.SET_ONE]: (state, action) => ({ ...state, card: action.payload }),
    [CardActions.Type.SET_LOADING_ONE]: (state) => ({
      ...state,
      isLoadingOne: !state.isLoadingOne,
    }),
    [CardActions.Type.UPDATE]: (state) => ({ ...state }),
    [CardActions.Type.SET_UPDATE_LOADING]: (state) => ({
      ...state,
      isLoadingUpdate: !state.isLoadingUpdate,
    }),
    [CardActions.Type.SET_UPDATE_CARD]: (state, action) => ({
      ...state,
      cards: state.cards.reduce((cards: Card[], card) => {
        if (card._id === action.payload._id) {
          return [...cards, action.payload];
        }
        return [...cards, card];
      }, []),
    }),
    [CardActions.Type.SET_DELETE_LOADING]: (state) => ({
      ...state,
      isLoadingDelete: !state.isLoadingDelete,
    }),
    [CardActions.Type.SET_DELETE]: (state, action) => ({
      ...state,
      cards: state.cards.filter((card) => card._id !== action.payload),
    }),
  },
  initialState,
);
