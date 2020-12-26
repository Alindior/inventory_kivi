import { createAction } from 'redux-actions';

import { SignIn } from '../../types/auth';
import { User } from '../../types/user';

enum Type {
  SIGN_IN = 'auth/SIGN_IN',
  SET_AUTH = 'auth/SET_AUTH',
  UPDATE_AUTH = 'auth/UPDATE_AUTH',
  SIGN_OUT = 'auth/SIGN_OUT',
}

const signIn = createAction<SignIn>(Type.SIGN_IN);
const signOut = createAction(Type.SIGN_OUT);
const setAuth = createAction<User>(Type.SET_AUTH);
const updateAuth = createAction(Type.UPDATE_AUTH);

export const AuthActions = {
  Type,
  signIn,
  setAuth,
  updateAuth,
  signOut,
};

export type AuthActions = Omit<typeof AuthActions, 'Type'>;
