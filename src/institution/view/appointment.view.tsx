import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';

const appoinments = [
  {
    title: 'Meditation and Mindfulness Training',
    location: 'Kamaladi Rd, Kathmandu, Nepal',
    date: 'Jul 27, 2020',
    speaker: 'Ramesh Spakota',
    agenda: [
      'Introduction to meditation and mildfulness',
      'Meditation training',
    ],
    status: 'accepted',
  },
  {
    title: 'Smart City',
    location: 'Ghandruk Gurung Gau Kaski, Nepal',
    date: 'Jul 30, 2020',
    speaker: 'Dr. Jon Doe',
    agenda: ['Introduction to Smart City', 'Smart City Workshop'],
    status: 'accepted',
  },
];

const AppointmentsView = () => {
  return (
    <AuthenticatedLayout>
      <FlexRow className="tutor-list">
        {appoinments.map((appoinment, key) => (
          <div key={key} className="col-12 rounded border p-4 mb-3">
            <span className="accpeted d-block">
              <i className="icon ion-md-checkmark-circle mr-1" />
              Confirmed
            </span>
            <h3 className="text-primary">{appoinment.title}</h3>

            <FlexRow>
              <div className="col-md-6 pl-4 pr-4 text-muted">
                <p className="m-0">
                  <i className="icon ion-md-pin mr-2" />
                  {appoinment.location}
                </p>
                <p className="m-0">
                  <i className="icon ion-md-calendar mr-2" />
                  {appoinment.date}
                </p>
                <p className="m-0">
                  <i className="icon ion-md-person mr-2" />
                  {appoinment.speaker}
                </p>
              </div>
              <div className="col-md-6 pl-4 pr-4 text-muted">
                <p className="lead m-0">Agenda</p>
                {appoinment.agenda.map((agenda, key) => (
                  <p className="m-0 small" key={key}>
                    <i className="icon ion-ios-arrow-forward mr-2" />
                    {agenda}
                  </p>
                ))}
              </div>
            </FlexRow>
          </div>
        ))}
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default AppointmentsView;
