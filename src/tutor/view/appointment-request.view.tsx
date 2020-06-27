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
              <span className="col-md-2 p-1"></span>
              <div className="col-md-1 p-1">
                <Button
                  name="Accept"
                  // onClick={() => handleAppointment('Accept')}
                  className="sm btn-outline-success p-1"
                />
              </div>
              <div className="col-md-1 p-1">
                <Button
                  name="Reject"
                  // onClick={() => handleAppointment('Reject')}
                  className="sm btn-outline-danger p-1"
                />
              </div>
            </React.Fragment>
          ) : (
            <div className="col-md-4 p-1 text-right text-white">
              <span
                className={`p-1 ${
                  appointment.status === 'Accepted'
                    ? 'btn-sm bg-success pt-2 pb-2 pr-3 pl-3'
                    : 'btn-sm bg-danger pt-2 pb-2 pr-3 pl-3'
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
      <h3 className="p-3"> Appointment Requests</h3>
      <FlexRow className="justify-content-center">
        <div className="col-md-12 p-3 m-3 rounded border">
          {/* <h3 className="mt-0 text-primary">Appointment Requests</h3> */}
          <AppointmentList />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};
export default AppointmentRequestView;
