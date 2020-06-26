import React from 'react';
import { Link } from 'react-router-dom';

import Vr from 'ui/form/vr';
import SigninForm from 'auth/component/signin.component';
import PlainBackground from 'ui/layout/plain-background.layout';
import { ROUTE } from 'app/app.route-path';

const SigninView = () => {
  return (
    <PlainBackground>
      <div className="col-md-12 m-0 row p-0 mt-5 mb-5 pt-4">
        <div className="col-md-5 float-left p-5">
          <h1 className="bold text-primary mt-3">Why?</h1>
          <p className="text-muted">
            <span className="bold">EduCere</span> is a one stop solution for
            institutions, schools, focused groups to book experts for events,
            for experts to share their availability and facilitate online
            sessions.
          </p>
        </div>
        <Vr />
        <div className="col-md-6  float-right">
          <div className="col-md-11 p-5 rounded login-form">
            <h3 className="text-primary ml-md-3 ml-0 mb-3">Welcome back :)</h3>
            <SigninForm />
            <Link className="pl-3 small" to={ROUTE.FORGOT_PASSWORD}>
              Forgot your password?
            </Link>
            <p className="text-muted pl-3 small">
              Don't have an account? <Link to={ROUTE.SIGNUP}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </PlainBackground>
  );
};

export default SigninView;
