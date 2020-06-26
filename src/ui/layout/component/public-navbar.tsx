import React from 'react';
import { Link } from 'react-router-dom';

import { Flex } from './flex';
import { ROUTE } from 'app/app.route-path';

const PublicNavBar = () => {
  return (
    <section className="col-12 p-4 mt-1">
      <Flex className="justify-content-between text-white pr-md-3 pl-md-3">
        <div className="col-md-3 p-0">
          <Link to={ROUTE.HOME} className="d-flex text-primary">
            <i className="icon ion-md-school h3 mr-2 m-0" />
            <span className=" p pt-1">
              Edu<span className="bold">Cere</span>
            </span>
          </Link>
        </div>
        <div className="col-md-6 p-0 d-none d-md-block"></div>
        <div className="col-md-3 p-0 text-primary">
          <div className="d-flex user-tool">
            <Link
              to={ROUTE.SIGNIN}
              className="d-none d-md-inline btn btn-sm btn-link text-muted"
            >
              <i className="icon ion-md-log-in mr-2 m-0" />
              Sign in
            </Link>

            <Link
              to={ROUTE.SIGNUP}
              className="d-none d-md-inline btn btn-sm btn-primary"
            >
              Register
            </Link>
          </div>
        </div>
      </Flex>
    </section>
  );
};

export default PublicNavBar;
