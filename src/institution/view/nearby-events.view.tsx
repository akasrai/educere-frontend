import React from 'react';

import { FlexRow } from 'ui/layout/component/flex';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { profession, categories } from 'data/mock.data';
import { Input, Select } from 'ui/form/input';
import { Button } from 'ui/form/button';

const nearbyEvents = [
  {
    expertName: 'Akash Rai',
    location: 'Online',
    contactNo: '9807898767',
    email: 'akashrai@gmail.com',
    avaibility: [
      {
        date: 'Jun 29th 2020',
        time: ['10:00 am - 12:00 pm', '03:00 pm - 06:00 pm'],
      },
      {
        date: 'Jun 30th 2020',
        time: ['10:00 am - 04:00 pm'],
      },
    ],
  },
  {
    expertName: 'Pasang Dorje Lama',
    date: 'July 20th 2020',
    location: 'Baneswor, Kathmandu',
    contactNo: '9807896233',
    email: 'pasang234242@gmail.com',
    avaibility: [
      { date: 'Jul 5th 2020', time: ['10:00 am - 3:00 pm'] },
      {
        date: 'Jul 8th 2020',
        time: ['10:00 am - 04:00 pm'],
      },
    ],
  },
  {
    expertName: 'Bikash Gurung',
    date: 'Aug 29th 2020',
    location: 'Sikles Gau, Kaski',
    contactNo: '9869874567',
    email: 'bikashgrg23@gmail.com',
    avaibility: [
      {
        date: 'Jul 5th 2020',
        time: ['09:00 am - 11:00 am', '03:00 pm - 05:00 pm'],
      },
      {
        date: 'Jul 8th 2020',
        time: ['06:00 am - 12:00 pm', '04:00 am - 06:00 pm'],
      },
    ],
  },
  {
    expertName: 'Ram Sharan Shrestha',
    date: 'Jun 29th 2020',
    location: 'Online',
    contactNo: '98412376567',
    email: 'sharanram56@gmail.com',
    avaibility: [
      { date: 'Jul 5th 2020', time: ['03:00 pm - 05:00 pm'] },
      {
        date: 'Jul 8th 2020',
        time: ['12:00 pm - 06:00 pm'],
      },
    ],
  },
  {
    expertName: 'Namita Sapkota',
    date: 'July 20th 2020',
    location: 'Salleri Nayabazaar, Solukhumbu',
    contactNo: '9818239878',
    email: 'sapkotanamita@gmail.com',
    avaibility: [
      { date: 'Jul 5th 2020', time: ['07:00 am - 05:00 pm'] },
      {
        date: 'Jul 8th 2020',
        time: ['03:00 pm - 06:00 pm'],
      },
    ],
  },
];

const SearchTutor = () => {
  return (
    <FlexRow>
      <div className="col-md-8 pl-2 pr-1">
        <Input name="search" placeholder="Find by location" />
      </div>
      <div className="col-md-2 pl-1 pr-1">
        <Select name="Category" placeholder="Category" options={categories} />
      </div>
      <div className="col-md-2 pr-2 pl-1">
        <Button className="-md btn-primary" name="Find" icon="md-search" />
      </div>
    </FlexRow>
  );
};

const EventList = () => {
  return (
    <>
      {nearbyEvents.map((event, key) => (
        <div key={key} className="col-md-12 p-2">
          <FlexRow className="appointment-card border p-3 rounded">
            <div className="col-md-6">
              <h5 className="m-0 text-primary">{event.expertName}</h5>
              <p className="m-0">
                <i className="icon ion-md-briefcase mr-1" />
                {profession.getRandomJob()}
              </p>
              <p className="m-0">
                <i className="icon ion-md-mail mr-1" />
                {event.email}
              </p>
              <p className="m-0">
                <i className="icon ion-md-call mr-1" />
                {event.contactNo}
              </p>
              <p className="m-0">
                <i className="icon ion-md-pin mr-1" />
                <span className="text-primary bold">{event.location} </span>
              </p>
              <div className="col-md-4 mt-3  m-0 btn btn-outline-primary btn-md p-1">
                <span className="">Book Now</span>
              </div>
            </div>
            <div className="col-md-6">
              <p className="m-0 bold mt-2">
                <i className="icon ion-md-calendar mr-1" />
                Avaibility
              </p>
              <table>
                {event.avaibility.map((avl, key) => (
                  <tr key={key}>
                    <td className="p-2">{avl.date}</td>
                    <td className="p-2">
                      {avl.time.map((t, key) => (
                        <p key={key} className="m-0">
                          {t}
                        </p>
                      ))}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </FlexRow>
        </div>
      ))}
    </>
  );
};

const NearbyEventsView = () => {
  return (
    <AuthenticatedLayout>
      <SearchTutor />
      <FlexRow className="tutor-list">
        <EventList />
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default NearbyEventsView;
