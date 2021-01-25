import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { push } from 'react-router-redux';

import { AuthActions, UserActions } from '../actions';
import { SignIn } from '../../types';
import AuthApiService from './services/AuthApiService';
import AxiosService from '../../shared/services/AxiosService';
import JwtService from '../../shared/services/JwtService';
import LocalStorageService from '../../shared/services/LocalStorageService';

function* signInWorker(action: Action<SignIn>) {
  try {
    const {
      data: { accessToken },
    } = yield call(AuthApiService.signIn, action.payload);

    yield LocalStorageService.setValue('accessToken', accessToken);

    yield AxiosService.setAuthToken(accessToken);

    const user = yield JwtService.decodeJwtToken(accessToken);

    yield put(AuthActions.setAuth(accessToken));

    yield put(UserActions.setUser(user));

    yield put(push('/test'));
  } catch (err) {
    console.log(err);
  }
}

function* updateAuthWorker() {
  const token = yield LocalStorageService.getValue('accessToken');

  if (token) {
    const user = yield JwtService.decodeJwtToken(token);

    yield AxiosService.setAuthToken(token);

    yield put(UserActions.setUser(user));

    yield put(AuthActions.setAuth(token));
  }
}

function* signOutWorker() {
  yield LocalStorageService.removeAll();

  yield put(UserActions.resetUser());

  yield put(push('/'));
}

export default function* watchAll() {
  yield takeLatest(AuthActions.Type.SIGN_IN, signInWorker);
  yield takeLatest(AuthActions.updateAuth, updateAuthWorker);
  yield takeLatest(AuthActions.Type.SIGN_OUT, signOutWorker);
}
