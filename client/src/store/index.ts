import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from '../users/store/usersReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const composeEnhancers: any =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const KEY = 'USERS';
export const store = createStore(
  combineReducers({
    [KEY]: usersReducer,
  }),
  compose(applyMiddleware(thunk), composeEnhancers),
);
