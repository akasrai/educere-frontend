import React from 'react';
import { Link } from 'react-router-dom';

import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const AppointmentsView = () => {
  return (
    <AuthenticatedLayout>
      <p className="p-0">Appointments</p>
      <FlexRow className="tutor-list">
        <div className="col-12 rounded border p-4">
          <span className="accpeted d-block">
            <i className="icon ion-md-checkmark-circle mr-1" />
            Accepted
          </span>
          <h3 className="text-primary">Design Thinking Session</h3>

          <FlexRow>
            <div className="col-md-6 pl-4 pr-4 text-muted">
              <p className="m-0">
                <i className="icon ion-md-pin mr-2" /> Kamaladi Rd, Kathmandu,
                Nepal
              </p>
              <p className="m-0">
                <i className="icon ion-md-calendar mr-2" /> Jun 27, 2020
              </p>
              <p className="m-0">
                <i className="icon ion-md-person mr-2" /> Swapnilman Spakota
              </p>
            </div>
            <div className="col-md-6 pl-4 pr-4 text-muted">
              <p className="lead m-0">Agenda</p>
              <p className="m-0 small">
                <i className="icon ion-ios-arrow-forward mr-2" />
                Design Introduction
              </p>
              <p className="m-0 small">
                <i className="icon ion-ios-arrow-forward mr-2" />
                Design Concept
              </p>
              <p className="m-0 small">
                <i className="icon ion-ios-arrow-forward mr-2" />
                Design Workshop
              </p>
            </div>
          </FlexRow>
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default AppointmentsView;
