import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FlexRow } from 'ui/layout/component/flex';
import Hr from 'ui/form/hr';

const appointments = [
  {
    date: ' Jul 2nd 2020',
    startTime: '09:00 pm',
    endTime: '10:00 pm',
    agenda: 'Covid-19 Awareness Program',
    location: 'Salleri Nayabazaar, Solukhumbu',
    tutor: 'Dr. Gopi Krishna Shrestha',
  },
  {
    date: ' Jul 15th 2020',
    startTime: '12:00 pm',
    endTime: '01:30 pm',
    agenda: 'Smart City',
    location: 'Bouddha Rd Jorpati, Kathmandu',
    tutor: 'Manish Kumar Sharma',
  },
];

const notification = [];

const UpcomingAppointments = () => {
  return (
    <Fragment>
      {appointments.map((appointment, key) => (
        <Fragment key={key}>
          <div className="col-md-12 d-flex shake">
            <i className="icon ion-md-notifications-outline mr-2 d-inline-block" />
            <div className="">
              <p className="m-0">
                You have{' '}
                <span className="text-primary bold">{appointment.agenda}</span>{' '}
                event on
                <span className="text-primary bold">{appointment.date} </span>
              </p>
              <p className="m-0 d-inline text-muted mr-3">
                <i className="icon ion-md-calendar mr-1" />
                {appointment.date}
              </p>
              <p className="m-0 d-inline text-muted mr-3">
                <i className="icon ion-md-time mr-1" />
                {appointment.startTime} - {appointment.endTime}
              </p>
              <p className="m-0 d-inline text-muted mr-3">
                <i className="icon ion-md-pin mr-1" />
                {appointment.location}{' '}
              </p>
              <p className="m-0 d-inline text-muted mr-3">
                <i className="icon ion-md-contact mr-1" />
                {appointment.tutor}
              </p>
            </div>
          </div>
          <Hr className="col-md-12 p-0" />
        </Fragment>
      ))}

      <div className="col-md-12 d-flex shake">
        <i className="icon ion-md-notifications-outline mr-2 d-inline-block" />

        <p className="m-0">
          <span className="text-primary bold">Dr. Sailesh Singh</span> is
          travelling around your region on{' '}
          <span className="text-primary bold">Jul 25th 2020</span>
        </p>
      </div>
      <Hr className="col-md-12 p-0" />
      <div className="col-md-12 d-flex shake">
        <i className="icon ion-md-notifications-outline mr-2 d-inline-block" />

        <p className="m-0">
          <span className="text-primary bold">The Theme University</span> is
          hosting event Cloud Computing on{' '}
          <span className="text-primary bold">Jul 3rd 2020</span>
        </p>
      </div>
    </Fragment>
  );
};

const InstitutionOverView = () => {
  return (
    <FlexRow>
      <div className="col-md-12 p-0 row">
        {/* <div className="col-md-4 mb-3">
          <div className="rounded border p-3 text-center">
            <h1 className="bold">10</h1>
            <p className="text-muted m-0">Events this months</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="rounded border p-3 text-center">
            <h1 className="bold">10</h1>
            <p className="text-muted m-0">Events this months</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="rounded border p-3 text-center">
            <h1 className="bold">10</h1>
            <p className="text-muted m-0">Events this months</p>
          </div>
        </div> */}
        <div className="col-md-12 mt-2">
          <div className="border rounded p-4">
            <UpcomingAppointments />
          </div>
        </div>
      </div>
    </FlexRow>
  );
};

export default InstitutionOverView;
