import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import './shared/styles/index.scss';
import Routes from './routes/Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
