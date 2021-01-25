import { all } from 'redux-saga/effects';
import authSaga from './auth';
import cardSaga from './card';

export default function* rootSaga() {
  yield all([authSaga(), cardSaga()]);
}
