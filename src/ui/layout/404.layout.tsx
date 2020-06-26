import React from 'react';

import PlainBackground from './plain-background.layout';

const PageNotFound = () => {
  return (
    <PlainBackground className="fixed-height-layout ">
      <div className="d-flex justify-content-center align-items-center h-100">
        <h3 className="text-danger">404 | Not Found</h3>
      </div>
    </PlainBackground>
  );
};

export default PageNotFound;
