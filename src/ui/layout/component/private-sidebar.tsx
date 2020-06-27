import React, { ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Flex } from './flex';
import { history } from 'app/app.history';
import { ROUTE } from 'app/app.route-path';
import { AuthContext } from 'auth/auth.context';
import { socialMedia } from 'helper/common-helper';

interface TabProps {
  name: String;
  icon?: String;
  route?: string;
  children?: ReactNode;
}

interface SocialMediaProps {
  icon: string;
  link: string;
  username: string | undefined;
}

const sidebarMenu = {
  TAB: 'tab',
  SUB_TAB: 'sub_tab',
  ACTIVE_SUB_TAB: '',
  ACTIVE_TAB: 'Dashboard',

  setActiveTab(tab: string, type: string) {
    if (this.TAB === type) return (this.ACTIVE_TAB = tab);

    return (this.ACTIVE_SUB_TAB = tab);
  },

  isActive(tab: string, type: string) {
    if (this.TAB === type) return this.ACTIVE_TAB === tab;

    return this.ACTIVE_SUB_TAB === tab;
  },
};

const redirectTo = (route: string = '/') => history.push(route);

const generateIdFromName = (name: String) => name.split(' ').join('-');

const handleRoute = (route: string = '', tabId: string, type: string) => {
  if (route) redirectTo(route);
  sidebarMenu.setActiveTab(tabId, type);
};

const Tab = ({ name, icon, route, children }: TabProps) => {
  const tabId = generateIdFromName(name);

  return (
    <div className="tab">
      <input
        id={tabId}
        type="radio"
        name="main-menu"
        className="tab-input"
        checked={sidebarMenu.isActive(tabId, sidebarMenu.TAB)}
        onChange={() => handleRoute(route, tabId, sidebarMenu.TAB)}
      />
      <label className="tab-label" htmlFor={tabId}>
        <span className="shake p">
          <i className={`icon ion-${icon} p mr-3 m-0 d-inline-block`} />
          {name}
        </span>
        {children && (
          <i className="icon ion-ios-arrow-forward ml-2 arrow float-right" />
        )}
      </label>
      <div className="tab-content">{children}</div>
    </div>
  );
};

const SubTab = ({ name, icon = 'ios-arrow-forward', route }: TabProps) => {
  const subTabId = generateIdFromName(name);

  return (
    <div className="sub-tab">
      <input
        type="radio"
        id={subTabId}
        name="sub-menu"
        className="sub-tab-input"
        checked={sidebarMenu.isActive(subTabId, sidebarMenu.SUB_TAB)}
        onChange={() => handleRoute(route, subTabId, sidebarMenu.SUB_TAB)}
      />
      <label className="sub-tab-label" htmlFor={subTabId}>
        <span className="p pt-0 pl-3 small shake">
          <i className={`icon ion-${icon} p mr-3 m-0 d-inline-block`} />
          {name}
        </span>
      </label>
    </div>
  );
};

const SidebarAccordinMenu = () => (
  <div className="tabs">
    <Tab name="Dashboard" icon="ios-home" route={ROUTE.DASHBOARD} />
    <Tab name="Availability" icon="md-time" route={ROUTE.ADD_AVAILABILITY} />
    <Tab
      name="Appointments"
      icon="md-calendar"
      route={ROUTE.TUTOR_APPOINTMENTS}
    />

    <Tab name="Settings" icon="md-construct" route={ROUTE.DASHBOARD} />
  </div>
);

const SocialMedia = ({ icon, link, username }: SocialMediaProps) =>
  username ? (
    <p className="m-0">
      <a href={link} target="_blank">
        <i className={`icon ion-${icon} mr-1`} />
        {username}
      </a>
    </p>
  ) : null;

const SidebarProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="col-12">
      <div className="sidebar-dp text-center">
        {user.photo ? (
          <div className="dp-circle ">
            <img src={user.photo} alt="dp" />
          </div>
        ) : (
          <i className="icon ion-md-contact text-center  mr-2 m-0 text-muted" />
        )}
      </div>
      <div className="pl-4 p-sticky text-black">
        <h5 className="mb-0">{user.name}</h5>
        <p className="text-muted">
          <i className="icon ion-md-mail mr-1 small" />
          {user.email}
        </p>
        <p>{user.bio}</p>
        <div className="text-left">
          <p className="m-0">
            <i className="icon ion-md-call mr-1" />
            {user.phoneNumber}
          </p>
          <SocialMedia
            icon="md-globe"
            username={user.website}
            link={user.website || ''}
          />
          <SocialMedia
            icon="logo-facebook"
            username={user.facebook}
            link={socialMedia.getFacebook(user.facebook || '')}
          />
          <SocialMedia
            icon="logo-twitter"
            username={user.twitter}
            link={socialMedia.getTwitter(user.twitter || '')}
          />
          <SocialMedia
            icon="logo-linkedin"
            username={user.linkedIn}
            link={socialMedia.getLinkedIn(user.linkedIn || '')}
          />
          <SocialMedia
            icon="logo-github"
            username={user.github}
            link={socialMedia.getGithub(user.github || '')}
          />
          <Flex>
            <i className="icon ion-md-pin mr-2" />
            <div>
              <p className="m-0">{user.address.street}</p>
              <p className="m-0">
                {user.address.city}, {user.address.country}
              </p>
              <p className="m-0">{user.address.zip}</p>
            </div>
          </Flex>
        </div>

        <Link to="" className="col-12 btn btn-md btn-outline-primary mt-3 p-1">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

const PrivateSidebar = () => {
  return (
    <section className="col-md-3">
      <div className="col-md-12 p-0 pt-3 pb-3 bg-transparent text-primary sidebar">
        {/* <SidebarAccordinMenu /> */}
        <SidebarProfile />
      </div>
    </section>
  );
};

export default PrivateSidebar;
