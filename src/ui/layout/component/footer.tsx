import React from 'react';
import { FlexRow } from './flex';
import Hr from 'ui/form/hr';

const Footer = () => (
  <FlexRow className="justify-content-center p-5 text-muted">
    <Hr className="col-12" />
    <span className="mt-4">
      &copy; 2020 Edu<span className="bold">Cere</span>
    </span>
  </FlexRow>
);

export default Footer;
