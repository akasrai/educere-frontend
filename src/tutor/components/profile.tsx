import React from 'react';

import { FlexRow } from 'ui/layout/component/flex';
import BubbleBackground from 'ui/layout/bubble-background.layout';

const user = {
  firstName: 'Pasang',
  middleName: 'Dorje',
  lastName: 'Lama',
  fullName: 'Pasang Dorje Lama',
  email: 'Pdl@gmail.com',
  phoneNumber: '+9779808977135',
  address: { state: 'Province 3', country: 'Nepal' },
  imageUrl: '',
  Bio: 'I am the man.',
};

const UserProfile = () => {
  return (
    <BubbleBackground className="fixed-height-layout">
      <FlexRow className="justify-content-center">
        <div className="col-md-4 p-5 rounded-4 bg-white">
          <h3 className="mt-0 pr-1 text-primary bold">
            Welcome {user.firstName}
          </h3>
          <div className="col-md-12 row">
            <div className="col-md-3">
              <div className="pb-0">
                {user.imageUrl ? (
                  <img
                    className="profile-picture mb-3"
                    src={user.imageUrl}
                    alt="profile"
                  />
                ) : (
                  <i className="icon ion-md-contact profile-icon text-muted mr-4 h1" />
                )}
              </div>
            </div>
            <div className="col-md-9">
              <p className="mt-0 mb-0 pr-1 text-primary bold">
                {user.fullName}
              </p>
              <address className="w-100 text-muted m-0">
                <p className="mb-0">
                  <i className="icon ion-md-mail" /> {user.email}
                </p>

                <p className="mb-0">
                  <i className="icon ion-md-call" /> {user.phoneNumber}
                </p>

                <p className="mb-0">
                  <i className="icon ion-md-pin" /> {user.address.state},{' '}
                  {user.address.country}
                </p>
                <p className="mb-0">{user.Bio}</p>
              </address>
            </div>
          </div>
        </div>
      </FlexRow>
    </BubbleBackground>
  );
};

export default UserProfile;
