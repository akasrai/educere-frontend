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
    tutor: 'Akasky Rai',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
    tutor: 'Akasky Rai',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
    tutor: 'Akasky Rai',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
    tutor: 'Akasky Rai',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
    tutor: 'Akasky Rai',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
    tutor: 'Akasky Rai',
  },
  {
    id: 1,
    date: ' Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    agenda: 'Conference for SEE students',
    location: 'Jorpati, Kathmandu',
    tutor: 'Akasky Rai',
  },
];

const subscribedTutorList = [
  {
    name: 'Akasky Rai',
    field: 'Software Engineer',
    imgUrl:
      'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
  },
  {
    name: 'Akasky Rai',
    field: 'Software Engineer',
    imgUrl:
      'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
  },
  {
    name: 'Akasky Rai',
    field: 'Software Engineer',
    imgUrl:
      'https://avatars0.githubusercontent.com/u/18304391?s=460&u=b8a8e241f410db24197bd5f8fd3131e31d272ac7&v=4',
  },
  {
    name: 'Akasky Rai',
    field: 'Software Engineer',
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
              Date:{' '}
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
            <p className="m-0 p-2">
              Tutor:{' '}
              <span className="text-primary bold">{appointment.tutor} </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const TutorList = () => {
  return (
    <div className="col-md-12 p-2">
      {subscribedTutorList.map((tutor, key) => (
        <div key={key} className="w-100 rounded border tutor bg-lightblue mb-2">
          <div className="image">
            <img src={tutor.imgUrl} alt="dp" />
          </div>
          <p className="bold m-0">{tutor.name}</p>
          <p className="small">{tutor.field}</p>
          <Link
            to=""
            className="col-12 btn btn-md btn-outline-primary p-1 mb-1"
          >
            <span className="small">View Details</span>
          </Link>
          <div className="col-12 btn btn-md btn-outline-primary p-1">
            <span className="small">Unsubscribe</span>
          </div>
          <div />
        </div>
      ))}
    </div>
  );
};

const InstitutionOverView = () => {
  return (
    <React.Fragment>
      <FlexRow>
        <div className="col-md-8 p-4 mr-4 border">
          <h4 className="text-center">Upcoming Appointments</h4>
          <UpcomingAppointments />
        </div>
        <div className="col-md-3 p-4 ml-4 border tutor-list">
          <h4 className="text-center p-1">Subscribed Tutors</h4>

          <TutorList />
        </div>
      </FlexRow>
    </React.Fragment>
  );
};

export default InstitutionOverView;
