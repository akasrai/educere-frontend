import React from 'react';
import { Switch } from 'react-router-dom';

import { ROUTE } from 'app/app.route-path';
import { PrivateRoute } from 'app/app.routes';
import FindTutorView from './view/find-tutor.view';

const InstitutionRoute = () => (
  <Switch>
    <PrivateRoute exact path={ROUTE.FIND_TUTOR} component={FindTutorView} />
  </Switch>
);

export default InstitutionRoute;
