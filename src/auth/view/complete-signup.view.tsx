import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Footer from 'ui/layout/component/footer';
import { FlexRow, Flex } from 'ui/layout/component/flex';
import PrivateNavBar from 'ui/layout/component/private-navbar';
import CompleteSignupForm from 'auth/component/complete-signup.component';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { AuthContext } from 'auth/auth.context';
import Hr from 'ui/form/hr';

const CompleteSigninView = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-100 col-12 ">
      <PrivateNavBar />
      <div className="col-md-8 m-auto pt-5 row">
        <div className="rounded border col-md-4 p-0 text-center p-fixed text-muted">
          <div className="col-12 pt-4">
            <div className="complete-profile-dp text-center">
              <i className="icon ion-md-contact text-center mr-2 m-0" />
            </div>
            <div className="btn btn-md btn-primary pt-0 pb-0 pl-4 pr-4 small">
              <i className="icon ion-md-create mr-1" />
              <small className="bold">Upload</small>
            </div>
            <div className="mt-2">
              <h5 className="mb-0">{user.name}</h5>
              <p className="mb-0">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 pl-5 pr-5 h-100">
          <div className="h5 mb-0 text-muted">
            Complete your profile <Hr className="mt-2 mb-3" />
          </div>
          <CompleteSignupForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompleteSigninView;
