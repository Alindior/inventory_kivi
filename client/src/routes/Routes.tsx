import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { LoginPage } from '../users/login/Authentication';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} path="/auth" />

        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};

export default Routes;
