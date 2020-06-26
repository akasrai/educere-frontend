import React from 'react';

import Footer from './component/footer';
import { LayoutProps } from './layout.type';
import PublicNavBar from './component/public-navbar';

const NonAuthenticatedLayout = ({ children }: LayoutProps) => {
  return (
    <div className="col-md-10 m-auto">
      <PublicNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default NonAuthenticatedLayout;
