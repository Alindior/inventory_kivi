import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Dispatch } from 'redux';

import './styles/index.scss';
import { AuthActions } from './redux/actions';
import { history } from './redux/store';
import { RootState } from './redux/reducers/state';
import { Auth } from './types';
import Login from './login/Login';
import NavBar from './shared/components/navBar/NavBar';
import Header from './shared/components/header/Header';
import Cards from './cards/Cards';

interface Props {
  updateAuth: typeof AuthActions.updateAuth;
  auth: Auth;
}

const App: React.FC<Props> = ({ updateAuth, auth }) => {
  useEffect(() => {
    updateAuth();
  }, []);
  HELLO JOPA!!!
  return (
    <Router history={history}>
      <Switch>
        {auth ? (
          <>
            <Layout>
              <NavBar />
              <Layout>
                <Header />
                <Route path="/test" />
                <Route path="/cards/new" component={Cards} />
              </Layout>
            </Layout>
          </>
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
