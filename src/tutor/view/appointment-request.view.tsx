import React, { useState, Fragment } from 'react';

import { Button } from 'ui/form/button';
import { FlexRow } from 'ui/layout/component/flex';
import { Input, TextArea, RadioButton } from 'ui/form/input';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const appointments = [
  { id: 1, description: 'Conference for SEE students.', status: 'Accepted' },
  { id: 2, description: 'Conference for +2 students.', status: 'Pending' },
  { id: 3, description: 'Conference for BIT students.', status: 'Rejected' },
];

const AppointmentList = () => {
  return (
    <div className="p-1">
      {appointments.map((appointment, key) => (
        <div className="row pb-2">
          <span className="col-md-8 appointment-text">
            {appointment.description}
          </span>
          {appointment.status === 'Pending' ? (
            <React.Fragment>
              <div className="col-md-2">
                <Button
                  name="Accept"
                  // onClick={() => handleAppointment('Accept')}
                  className="sm btn-outline-success"
                />
              </div>
              <div className="col-md-2">
                <Button
                  name="Reject"
                  // onClick={() => handleAppointment('Reject')}
                  className="sm btn-outline-danger"
                />
              </div>
            </React.Fragment>
          ) : (
            <div className="col-md-4 text-right text-white">
              <span
                className={`p-1 ${
                  appointment.status === 'Accepted'
                    ? 'btn btn-sm bg-success'
                    : 'btn btn-sm bg-danger'
                }`}
              >
                {appointment.status}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AppointmentRequestView = () => {
  return (
    <AuthenticatedLayout className="fixed-height-layout">
      <FlexRow className="justify-content-center">
        <div className="col-md-12 p-5 m-3 rounded bg-white border">
          <h4 className="mt-0 text-primary bold">
            <i className="icon ion-md-time mr-2" />
            Appointment Requests
            <span className="border-bottom mt-2 d-block"></span>
          </h4>
          <AppointmentList />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};
export default AppointmentRequestView;
