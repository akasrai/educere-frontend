import React from 'react';
import { Switch } from 'react-router-dom';

import { ROUTE } from 'app/app.route-path';
import { PrivateRoute } from 'app/app.routes';
import UserProfile from './components/profile';
import AddExpertiseView from './view/add-expertise.view';
import AddAvailibilityView from './view/add-availibility.view';
import AppointmentRequestView from './view/appointment-request.view';

const TutorRoutes = () => (
  <Switch>
    <PrivateRoute exact path={ROUTE.TUTOR_PROFILE} component={UserProfile} />
    <PrivateRoute
      exact
      path={ROUTE.ADD_AVAILABILITY}
      component={AddAvailibilityView}
    />
    <PrivateRoute
      exact
      path={ROUTE.TUTOR_APPOINTMENTS}
      component={AppointmentRequestView}
    />
    <PrivateRoute
      exact
      path={ROUTE.ADD_EXPERTISE}
      component={AddExpertiseView}
    />
  </Switch>
);

export default TutorRoutes;
