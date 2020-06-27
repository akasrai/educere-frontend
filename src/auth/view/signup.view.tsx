import React from 'react';
import { Link } from 'react-router-dom';

import Vr from 'ui/form/vr';
import { ROUTE } from 'app/app.route-path';
import SignupForm from 'auth/component/signup.component';
import NonAuthenticatedLayout from 'ui/layout/non-authenticated.layout';

const SigninView = () => {
  return (
    <NonAuthenticatedLayout>
      <div className="col-md-11 m-auto m-0 row p-0 mt-5 mb-5 pt-4">
        <div className="col-md-6 float-left p-5">
          <h1 className="bold text-primary mt-3">Why?</h1>
          <p className="text-muted">
            <span className="bold">EduCere</span> is a one stop solution for
            institutions, schools, focused groups to book experts for events,
            for experts to share their availability and facilitate online
            sessions.
          </p>
        </div>
        <Vr />
        <div className="col-md-5 float-right">
          <div className="col-md-12 pt-5 pl-5 pr-1 rounded login-form">
            <h3 className="text-primary ml-md-3 ml-0 mb-3">Good choice :)</h3>
            <SignupForm />
            <p className="text-muted p-3 small">
              Already have an account? <Link to={ROUTE.SIGNIN}>Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </NonAuthenticatedLayout>
  );
};

export default SigninView;
