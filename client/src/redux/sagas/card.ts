import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';

import { CardActions } from '../actions';
import { Card, CreateCard } from '../../types';
import CardApiService from './services/CardApiService';

function* cardCreateWorker(action: Action<CreateCard>) {
  try {
    yield put(CardActions.setLoadingCreate());

    const { data } = yield call(CardApiService.create, action.payload);

    yield put(CardActions.setLoadingCreate());

    yield put(CardActions.addNewCard(data));
  } catch (err) {
    console.log(err);
  }
}

function* getAllCardsWorker() {
  try {
    yield put(CardActions.setLoading());

    const { data } = yield call(CardApiService.getAll);

    yield put(CardActions.setAllCards(data));

    yield put(CardActions.setLoading());
  } catch (err) {
    console.log(err);
  }
}

function* getOneCardWorker(action: Action<string>) {
  try {
    yield put(CardActions.setLoadingOne());

    const { data } = yield call(CardApiService.getOne, action.payload);

    yield put(CardActions.setOne(data));

    yield put(CardActions.setLoadingOne());
  } catch (err) {
    console.log(err);
  }
}

function* updateCardWorker(action: Action<Card>) {
  try {
    yield put(CardActions.setUpdateLoading());

    const { data } = yield call(CardApiService.update, action.payload);

    yield put(CardActions.setUpdateCard(data));

    yield put(CardActions.setUpdateLoading());
  } catch (err) {
    console.log(err);
  }
}

function* deleteCardWorker(action: Action<string>) {
  try {
    yield put(CardActions.setDeleteLoading());

    yield call(CardApiService.delete, action.payload);

    yield put(CardActions.setDelete(action.payload));

    yield put(CardActions.setDeleteLoading());
  } catch (err) {
    console.log(err);
  }
}

export default function* watchAll() {
  yield takeLatest(CardActions.Type.CREATE, cardCreateWorker);
  yield takeLatest(CardActions.Type.GET_ALL, getAllCardsWorker);
  yield takeLatest(CardActions.Type.GET_ONE, getOneCardWorker);
  yield takeLatest(CardActions.Type.UPDATE, updateCardWorker);
  yield takeLatest(CardActions.Type.DELETE, deleteCardWorker);
}
