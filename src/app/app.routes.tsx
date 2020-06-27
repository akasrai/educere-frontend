import React, { useContext } from 'react';
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { ROUTE } from './app.route-path';
import { history } from 'app/app.history';
import TutorRoutes from 'tutor/tutor.route';
import InstitutionRoute from 'institution/institution.route';

import { AuthContext } from 'auth/auth.context';
import SigninView from 'auth/view/signin.view';
import PageNotFound from 'ui/layout/404.layout';
import { ReloadRoute } from 'ui/route/reload-route';
import DashboardView from 'dashboard/view/dashboard.view';

const AuthenticatedRoute = (props: any) => {
  const { isAuthenticated } = useContext(AuthContext);

  return true ? <Route {...props} /> : <ReloadRoute to={ROUTE.HOME} />;
};

export const PrivateRoute = withRouter(AuthenticatedRoute);

const NonAuthenticatedRoute = (props: any) => {
  const { isAuthenticated } = useContext(AuthContext);

  return true ? <Redirect to={ROUTE.DASHBOARD} /> : <Route {...props} />;
};

export const PublicRoute = withRouter(NonAuthenticatedRoute);

const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path={ROUTE.HOME} component={SigninView} />
      <PublicRoute exact path={ROUTE.SIGNIN} component={SigninView} />
      <PrivateRoute exact path={ROUTE.DASHBOARD} component={DashboardView} />

      <Route path="/tutor">
        <TutorRoutes />
      </Route>

      <Route path="/institution">
        <InstitutionRoute />
      </Route>

      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRoutes;
