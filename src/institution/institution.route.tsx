import React from 'react';
import { Switch } from 'react-router-dom';

import { ROUTE } from 'app/app.route-path';
import { PrivateRoute } from 'app/app.routes';
import FindTutorView from './view/find-tutor.view';
import AppointmentsView from './view/appointment.view';
import NearbyEventsView from './view/nearby-events.view';

const InstitutionRoute = () => (
  <Switch>
    <PrivateRoute exact path={ROUTE.FIND_TUTOR} component={FindTutorView} />
    <PrivateRoute
      exact
      path={ROUTE.INSTITUTION_APPOINTMENTS}
      component={AppointmentsView}
    />
    <PrivateRoute
      exact
      path={ROUTE.NEARBY_EVENTS}
      component={NearbyEventsView}
    />
  </Switch>
);

export default InstitutionRoute;
