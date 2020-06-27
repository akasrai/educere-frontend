import React, { useState } from 'react';

import { Tutor } from 'institution/institution.type';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { FlexRow } from 'ui/layout/component/flex';
import { profession } from 'data/mock.data';
import { Button } from 'ui/form/button';
import { socialMedia } from 'helper/common-helper';
import Hr from 'ui/form/hr';

interface SocialMediaProps {
  icon: string;
  link: string;
  username: string | undefined;
}

const SocialMedia = ({ icon, link, username }: SocialMediaProps) =>
  username ? (
    <p className="m-0 d-inline">
      <a href={link} target="_blank" title={username}>
        <i className={`icon ion-${icon} mr-2`} />
      </a>
    </p>
  ) : null;

const TutorDetailView = (props: any) => {
  const tutor = props?.location?.tutor as Tutor;

  return (
    <AuthenticatedLayout>
      <FlexRow className="col-12 tutor-detail m-auto pt-3">
        <div className="col-md-12 row rounded border p-5">
          <div className="col-md-2">
            <div className="image">
              <img src={tutor?.dp} alt="dp" />
            </div>
          </div>
          <div className="col-md-10 pt-2">
            <h5 className="m-0">
              {tutor?.firstName} {tutor?.lastName}
              <i className="icon ion-md-checkmark-circle text-success ml-2" />
            </h5>
            <p className="m-0 text-muted">
              <i className="icon ion-md-briefcase mr-1" />
              {profession.getRandomJob()}
            </p>
            <p className="text-muted m-0">
              <i className="icon ion-md-pin mr-2" />
              {tutor?.address?.city} {tutor?.address?.country}
            </p>
            <div className="lead">
              <SocialMedia
                icon="md-globe"
                username={tutor?.website}
                link={tutor?.website || ''}
              />
              <SocialMedia
                icon="logo-facebook"
                username={tutor?.facebook}
                link={socialMedia.getFacebook(tutor?.facebook || '')}
              />
              <SocialMedia
                icon="logo-twitter"
                username={tutor?.twitter}
                link={socialMedia.getTwitter(tutor?.twitter || '')}
              />
              <SocialMedia
                icon="logo-linkedin"
                username={tutor?.linkedin}
                link={socialMedia.getLinkedIn(tutor?.linkedin || '')}
              />
              <SocialMedia
                icon="logo-github"
                username={tutor?.github}
                link={socialMedia.getLinkedIn(tutor?.github || '')}
              />
            </div>
            <div className="col-md-3 btn btn-md btn-primary p-0 mt-2">
              <small>Follow</small>
            </div>
          </div>
          <p className="mt-3 small">{tutor?.bio}</p>

          <div className="col-md-12 p-0">
            <Hr />
            <h5>
              <i className="icon ion-md-school mr-1" />
              Experties
            </h5>
            <p className="m-0">
              <i className="icon ion-ios-arrow-forward mr-1" />
              Sofware Engineer
            </p>

            <p className="m-0">
              <i className="icon ion-ios-arrow-forward mr-1" />
              Data Engineer
            </p>
          </div>
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default TutorDetailView;
