import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FlexRow } from 'ui/layout/component/flex';

const appointments = [
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
  },
];

const subscribersList = [
  {
    name: 'Akasky Academy',
    location: 'Boudha, Tusal',
    imgUrl:
      'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
  },
  {
    name: 'Akasky Academy',
    location: 'Boudha, Tusal',
    imgUrl:
      'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
  },
  {
    name: 'Akasky Academy',
    location: 'Boudha, Tusal',
    imgUrl:
      'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
  },
  {
    name: 'Akasky Academy',
    location: 'Boudha, Tusal',
    imgUrl:
      'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
  },
];

const UpcomingAppointments = () => {
  return (
    <div className="row">
      {appointments.map((appointment, key) => (
        <div key={key} className="col-md-6 p-3">
          <div className="appointment-card bg-lightblue rounded">
            <p className="m-0 p-2">
              <i className="icon ion-md-calendar mr-1" />
              <span className="text-primary bold">{appointment.date} </span>
            </p>
            <p className="m-0 p-2">
              Time:{' '}
              <span className="text-primary bold">
                {appointment.startTime} - {appointment.endTime}
              </span>
            </p>
            <p className="m-0 p-2">
              Agenda:{' '}
              <span className="text-primary bold">{appointment.agenda} </span>
            </p>
            <p className="m-0 p-2">
              Location:{' '}
              <span className="text-primary bold">{appointment.location} </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const SubscriberList = () => {
  return (
    <div className="col-md-12 p-2">
      {subscribersList.map((subscriber, key) => (
        <div key={key} className="w-100 rounded border tutor bg-lightblue mb-2">
          <div className="image">
            <img src={subscriber.imgUrl} alt="dp" />
          </div>
          <p className="bold m-0">{subscriber.name}</p>
          <p className="small">{subscriber.location}</p>
          <Link to="" className="col-12 btn btn-md btn-outline-primary p-1">
            <span className="small">View Details</span>
          </Link>
          <div />
        </div>
      ))}
    </div>
  );
};

const TutorOverView = () => {
  return (
    <React.Fragment>
      <FlexRow>
        <div className="col-md-8 p-4 mr-4 border">
          <h4 className="text-center">Upcoming Appointments</h4>
          <UpcomingAppointments />
        </div>
        <div className="col-md-3 p-4 border ml-4 tutor-list">
          <h4 className="text-center p-1">Subscribers</h4>

          <SubscriberList />
        </div>
      </FlexRow>
    </React.Fragment>
  );
};

export default TutorOverView;
