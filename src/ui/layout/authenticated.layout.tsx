import React from 'react';

import Footer from './component/footer';
import { FlexRow } from './component/flex';
import { LayoutProps } from './layout.type';
import PrivateNavBar from './component/private-navbar';
import PrivateSidebar from './component/private-sidebar';

const AuthenticatedLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-100 col-12 ">
      <PrivateNavBar />
      <FlexRow className="justify-content-between pr-md-3 pl-md-3">
        <PrivateSidebar />
        <div className="col-md-9">
          <div className="col-md-12 mr-3 ml-3 p-md-5 p-3 h-100">{children}</div>
        </div>
      </FlexRow>
      <Footer />
    </div>
  );
};

export default AuthenticatedLayout;
