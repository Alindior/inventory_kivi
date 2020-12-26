import { handleActions } from 'redux-actions';
import { Auth } from '../../types';
import { AuthActions } from '../actions';

const initialState = null;

export const AuthReducer = handleActions<Auth | null, Auth>(
  {
    [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
    [AuthActions.Type.SIGN_OUT]: () => null,
  },
  initialState,
);
