/* eslint-disable @typescript-eslint/no-namespace */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AuthReducer } from './auth';
import { RootState } from './state';
import { UserReducer } from './user';

const rootReducer = combineReducers<RootState>({
  router: routerReducer,
  auth: AuthReducer as any,
  user: UserReducer as any,
});

export default rootReducer;
