import React, { Fragment } from 'react';

import Hr from 'ui/form/hr';
import { FlexRow } from 'ui/layout/component/flex';

const appointments = [
  {
    date: ' Jul 9th 2020',
    startTime: '11:00 am',
    endTime: '01:00 pm',
    agenda: 'Research and Design',
    location: 'Mahendrapul Pokhara, Kaski',
  },
];

const UpcomingAppointments = () => {
  return (
    <Fragment>
      {appointments.map((appointment, key) => (
        <Fragment key={key}>
          <div className="col-md-12 d-flex shake">
            <i className="icon ion-md-notifications-outline mr-2 d-inline-block text-muted" />
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
            </div>
          </div>
          <Hr className="col-md-12 p-0" />
        </Fragment>
      ))}
      <div className="col-md-12 d-flex shake">
        <i className="icon ion-md-notifications-outline mr-2 d-inline-block text-muted" />

        <p className="m-0">
          <span className="text-primary bold">The National College</span> is
          looking for guest lecturer on{' '}
          <span className="text-primary bold">Research Methodology</span>
        </p>
      </div>
      <Hr className="col-md-12 p-0" />
      <div className="col-md-12 d-flex shake">
        <i className="icon ion-md-notifications-outline mr-2 d-inline-block text-muted" />

        <p className="m-0">
          <span className="text-primary bold">Arbor School</span> is looking for
          trainer on <span className="text-primary bold">Cloud Computing</span>
        </p>
      </div>
      <Hr className="col-md-12 p-0" />
      <div className="col-md-12 d-flex shake">
        <i className="icon ion-md-notifications-outline mr-2 d-inline-block text-muted" />

        <p className="m-0">
          <span className="text-primary bold">Antioch University</span> is
          hosting event Research Methodology on{' '}
          <span className="text-primary bold">Jul 18th 2020</span>
        </p>
      </div>
    </Fragment>
  );
};

const TutorOverView = () => {
  return (
    <React.Fragment>
      <FlexRow>
        <div className="col-md-12 p-0 mt-2">
          <div className="border rounded p-4">
            <UpcomingAppointments />
          </div>
        </div>
      </FlexRow>
    </React.Fragment>
  );
};

export default TutorOverView;
