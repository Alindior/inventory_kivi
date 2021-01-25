import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './styles/index.scss';
import { AuthActions } from './redux/actions';
import { history } from './redux/store';
import { RootState } from './redux/reducers/state';
import { Auth } from './types';
import Login from './login/Login';
import Cards from './cards/Cards';
import PrimaryLayout from './shared/components/primaryLayout/PrimaryLayout';

interface Props {
  updateAuth: typeof AuthActions.updateAuth;
  auth: Auth;
}

const App: React.FC<Props> = ({ updateAuth, auth }) => {
  useEffect(() => {
    updateAuth();
  }, []);

  return (
    <Router history={history}>
      <Switch>
        {auth ? (
          <PrimaryLayout>
            <Route path="/test" />
            <Route path="/cards/new" component={Cards} />
          </PrimaryLayout>
        ) : (
          <Route component={Login} path="/" />
        )}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateAuth: () => dispatch(AuthActions.updateAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
