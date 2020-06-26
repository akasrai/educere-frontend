import React from 'react';

import { LayoutProps } from './layout.type';

const PlainBackground = ({ children, className = '' }: LayoutProps) => {
  return <div className="bring-to-front">{children}</div>;
};

export default PlainBackground;
