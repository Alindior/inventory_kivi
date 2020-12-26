import { createAction } from 'redux-actions';

import { User } from '../../types';

enum Type {
  SET_USER = 'user/SET_USER',
  RESET_USER = 'user/RESET_USER',
}

const setUser = createAction<User>(Type.SET_USER);
const resetUser = createAction(Type.RESET_USER);

export const UserActions = {
  Type,
  setUser,
  resetUser,
};

export type UserAction = Omit<typeof UserActions, 'Type'>;
