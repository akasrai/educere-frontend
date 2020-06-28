import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Tutor } from 'institution/institution.type';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import { FlexRow } from 'ui/layout/component/flex';
import { profession } from 'data/mock.data';
import { socialMedia } from 'helper/common-helper';
import Hr from 'ui/form/hr';
import { ROUTE } from 'app/app.route-path';

interface SocialMediaProps {
  icon: string;
  link: string;
  username: string | undefined;
}

const SocialMedia = ({ icon, link, username }: SocialMediaProps) =>
  username ? (
    <p className="m-0 d-inline">
      <a href={link} target="_blank" rel="noopener noreferrer" title={username}>
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
            <div className="col-md-3 btn btn-md btn-primary p-0 mr-2 mt-2">
              <small>Follow</small>
            </div>
            <Link
              className="col-md-3 btn btn-md btn-outline-primary p-0  mt-2"
              to={ROUTE.BOOK_TUTOR}
            >
              <small>Book</small>
            </Link>
          </div>
          <p className="mt-3 small">{tutor?.bio}</p>

          <div className="col-md-12 p-0 row m-0">
            <Hr className="col-md-12 p-0" />
            <div className="col-md-5 p-0 schedule-text">
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

              <p className="m-0">
                <i className="icon ion-ios-arrow-forward mr-1" />
                UI/UX Engineer
              </p>
            </div>

            <div className="col-md-7 p-0">
              <h5 className="">
                <i className="icon ion-md-time mr-1" />
                Avaibility
              </h5>
              <div className="schedule col-md-12 p-4 border rounded schedule-text mt-4">
                <div className="avl-date text-muted">
                  <i className="icon ion-md-calendar mr-2" />
                  Jul 12th 2020
                </div>
                <div>
                  <p className="m-0 text-muted d-inline mr-3">
                    <i className="icon ion-md-time mr-1" />
                    10:00 am - 12:00 pm
                  </p>
                  <p className="m-0 text-muted d-inline">
                    <i className="icon ion-md-pin mr-1" />
                    Kathmandu
                  </p>
                </div>

                <div>
                  <p className="m-0 text-muted d-inline mr-3">
                    <i className="icon ion-md-time mr-1" />
                    03:00 pm - 06:00 pm
                  </p>
                  <p className="m-0 text-muted d-inline">
                    <i className="icon ion-md-pin mr-1" />
                    Online
                  </p>
                </div>
              </div>

              <div className="schedule col-md-12 p-4 border rounded schedule-text mt-4">
                <div className="avl-date text-muted">
                  <i className="icon ion-md-calendar mr-2" />
                  Jul 30th 2020
                </div>
                <div>
                  <p className="m-0 text-muted d-inline mr-3">
                    <i className="icon ion-md-time mr-1" />
                    11:00 am - 2:00 pm
                  </p>
                  <p className="m-0 text-muted d-inline">
                    <i className="icon ion-md-pin mr-1" />
                    Pokhara
                  </p>
                </div>

                <div>
                  <p className="m-0 text-muted d-inline mr-3">
                    <i className="icon ion-md-time mr-1" />
                    04:00 pm - 06:00 pm
                  </p>
                  <p className="m-0 text-muted d-inline">
                    <i className="icon ion-md-pin mr-1" />
                    Pokhara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FlexRow>
    </AuthenticatedLayout>
  );
};

export default TutorDetailView;
