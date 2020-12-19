import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Authentication from '../users/authentication/Authentication';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={Authentication} path="/auth" />

        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};

export default Routes;
