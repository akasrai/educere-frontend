import React from 'react';

import { LayoutProps } from './layout.type';
import PublicNavBar from './component/public-navbar';
import Footer from './component/footer';

const PlainBackground = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className={`col-md-11 m-auto ${className}`}>
      <PublicNavBar />
      <div className="bring-to-front">{children}</div>
      <Footer />
    </div>
  );
};

export default PlainBackground;