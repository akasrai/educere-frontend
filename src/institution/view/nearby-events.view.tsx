import React from 'react';

import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const nearbyEvents = [
  {
    expertName: 'Akash Rai',
    date: 'Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    avaiableOption: 'Online',
    location: 'Jorpati, Kathmandu',
    contactNo: '9807898767',
  },
  {
    expertName: 'Pasang Dorje Lama',
    date: 'July 20th 2020',
    startTime: '08:00 am',
    endTime: '09:30 am',
    avaiableOption: 'Offline',
    location: 'Jorpati, Kathmandu',
    contactNo: '9807898767',
  },
  {
    expertName: 'Bikash Gurung',
    date: 'Aug 29th 2020',
    startTime: '04:00 pm',
    endTime: '07:30 pm',
    avaiableOption: 'Offline',
    location: 'Jorpati, Kathmandu',
    contactNo: '9807898767',
  },
  {
    expertName: 'Akash Rai',
    date: 'Jun 29th 2020',
    startTime: '08:00 pm',
    endTime: '08:30 pm',
    avaiableOption: 'Online',
    location: 'Jorpati, Kathmandu',
    contactNo: '9807898767',
  },
  {
    expertName: 'Pasang Dorje Lama',
    date: 'July 20th 2020',
    startTime: '08:00 am',
    endTime: '09:30 am',
    avaiableOption: 'Offline',
    location: 'Jorpati, Kathmandu',
    contactNo: '9807898767',
  },
];

const EventList = () => {
  return (
    <FlexRow>
      {nearbyEvents.map((event, key) => (
        <div key={key} className="col-md-6 p-3">
          <FlexRow className="appointment-card bg-lightblue rounded">
            <p className="col-md-6 m-0 p-3">
              Expert Name:{' '}
              <span className="text-primary bold">{event.expertName} </span>
            </p>
            <p className="col-md-6  m-0 p-3">
              Date: <span className="text-primary bold">{event.date} </span>
            </p>
            <p className="col-md-6  m-0 p-3">
              Available Time:{' '}
              <span className="text-primary bold">
                {event.startTime} - {event.endTime}
              </span>
            </p>
            <p className="col-md-6  m-0 p-3">
              Available Option:{' '}
              <span className="text-primary bold">{event.avaiableOption} </span>
            </p>
            {event.avaiableOption === 'Offline' && (
              <p className="col-md-6  m-0 p-3">
                Location:{' '}
                <span className="text-primary bold">{event.location} </span>
              </p>
            )}
            <p className="col-md-6  m-0 p-3">
              Contact No.:{' '}
              <span className="text-primary bold">{event.contactNo} </span>
            </p>
            <div className="col-md-12 m-0 p-2 text-center">
              <span className="col-md-3  m-0 btn btn-outline-primary btn-md p-1">
                Book Now
              </span>
            </div>
          </FlexRow>
        </div>
      ))}
    </FlexRow>
  );
};

const NearbyEventsView = () => {
  return (
    <AuthenticatedLayout>
      <p className="p-0">Nearby Events</p>
      <FlexRow className="tutor-list">
        <div className="col-12 rounded border p-4">
          <EventList />
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default NearbyEventsView;
