import { createAction } from 'redux-actions';

import { Card, CreateCard } from '../../types/card';

enum Type {
  CREATE = 'card/CREATE',
  SET_LOADING_CREATE = 'card/SET_LOADING_CREATE',
  ADD_NEW = 'card/ADD_NEW',
  GET_ALL = 'card/GET_ALL',
  SET_ALL = 'card/SET_ALL',
  SET_LOADING = 'card/SET_LOADING',
  GET_ONE = 'card/GET_ONE',
  SET_ONE = 'card/SET_ONE',
  SET_LOADING_ONE = 'card/SET_LOADING_ONE',
  UPDATE = 'card/UPDATE',
  SET_UPDATE_LOADING = 'card/SET_UPDATE_LOADING',
  SET_UPDATE_CARD = 'card/SET_UPDATE_CARD',
  DELETE = 'card/DELETE',
  SET_DELETE = 'card/SET_DELETE',
  SET_DELETE_LOADING = 'card/SET_DELETE_LOADING',
}

const create = createAction<CreateCard>(Type.CREATE);
const setLoadingCreate = createAction(Type.SET_LOADING_CREATE);
const addNewCard = createAction(Type.ADD_NEW);
const setAllCards = createAction<Card[]>(Type.SET_ALL);
const getAllCards = createAction(Type.GET_ALL);
const setLoading = createAction(Type.SET_LOADING);
const getOne = createAction(Type.GET_ONE);
const setOne = createAction<Card>(Type.SET_ONE);
const setLoadingOne = createAction(Type.SET_LOADING_ONE);
const updateCard = createAction<Card>(Type.UPDATE);
const setUpdateCard = createAction<CreateCard>(Type.SET_UPDATE_CARD);
const setUpdateLoading = createAction(Type.SET_UPDATE_LOADING);
const deleteCard = createAction(Type.DELETE);
const setDelete = createAction(Type.SET_DELETE);
const setDeleteLoading = createAction(Type.SET_DELETE_LOADING);

export const CardActions = {
  Type,
  create,
  setLoadingCreate,
  addNewCard,
  getAllCards,
  setAllCards,
  setLoading,
  getOne,
  setOne,
  setLoadingOne,
  updateCard,
  setUpdateLoading,
  setUpdateCard,
  deleteCard,
  setDelete,
  setDeleteLoading,
};

export type CardActions = Omit<typeof CardActions, 'Type'>;
