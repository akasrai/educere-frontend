import React, {
  useMemo,
  useState,
  Fragment,
  useContext,
  useReducer,
} from 'react';

import { Flex } from './flex';
import * as auth from 'auth/auth.state';
import { Action } from 'auth/auth.type';
import { signOut } from 'api/resource.api';
import { AuthContext } from 'auth/auth.context';
import { history } from 'app/app.history';

const getPageName = (): String => {
  return window.location.pathname
    .split('/')
    .map((path) => {
      return path.charAt(0).toUpperCase() + path.slice(1);
    })
    .join(' ')
    .slice(1);
};

const handleSignOut = async (
  dispatch: (props: Action) => void,
  setIsSignedOut: (prop: boolean) => void
) => {
  dispatch({ type: auth.SIGN_OUT_PENDING });
  const { error } = await signOut();

  if (error) {
    return dispatch({ type: auth.SIGN_OUT_ERROR });
  }

  dispatch({ type: auth.SIGN_OUT_SUCCESS });
  setIsSignedOut(true);
};

const PrivateNavBar = () => {
  const [isSignedOut, setIsSignedOut] = useState(false);
  const { user, isHandlingAuth } = useContext(AuthContext);
  const { setCurrentAuth } = React.useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  useMemo(() => {
    if (isSignedOut) {
      setCurrentAuth(authState);
    }
  }, [isSignedOut, authState, setCurrentAuth]);

  return (
    <Fragment>
      <section className="col-12 p-4 mt-1">
        <Flex className="justify-content-between text-primary pr-md-3 pl-md-3">
          <div className="col-md-3 p-0">
            <div className="d-flex">
              <i className="icon ion-md-school h3 mr-2 m-0" />
              <span className=" p pt-1">
                Edu<span className="bold">Cere</span>
              </span>
            </div>
          </div>
          <div className="col-md-6 p-0 d-none d-md-block">
            <div className="d-flex ">
              {/* <span className="bold lead page-title">{getPageName()}</span> */}
            </div>
          </div>
          <div className="col-md-3 p-0">
            <div className="d-flex user-tool">
              <i className="icon ion-md-contact h3 mr-2 m-0 text-muted" />
              <button className="bold p pt-1 user-tool-btn">
                <span className="d-none d-md-inline text-muted">
                  {user?.name || 'Akash Rai'}{' '}
                </span>
                <i className="icon ion-ios-arrow-down ml-2 text-primary" />
                <div className="dropdown text-muted">
                  <div className="list shake">
                    <i className="icon ion-md-contact mr-2 m-0 d-inline-block" />
                    Profile
                  </div>

                  {isHandlingAuth ? (
                    <div className="list shake text-muted">
                      <i className="icon ion-md-power mr-2 m-0 d-inline-block" />
                      Signing out...
                    </div>
                  ) : (
                    <div
                      className="list shake"
                      onClick={() => handleSignOut(dispatch, setIsSignedOut)}
                    >
                      <i className="icon ion-md-power mr-2 m-0 d-inline-block" />
                      Sign Out
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </Flex>
      </section>
      <MenuBar />
    </Fragment>
  );
};

interface MenuProps {
  name: string;
  icon?: string;
  route?: string;
}

const TOP_MENU = {
  MENU: 'menu',
  ACTIVE_MENU: 'Overview',

  setActiveMenu(menu: string) {
    return (this.ACTIVE_MENU = menu);
  },

  isActive(menu: string) {
    return this.ACTIVE_MENU === menu;
  },
};

const redirectTo = (route: string) => history.push(route);

const handleRoute = (route: string = '', menuId: string) => {
  redirectTo(route);
  TOP_MENU.setActiveMenu(menuId);
};

const Menu = ({ name, icon, route }: MenuProps) => (
  <div className="menu">
    <input
      id={name}
      type="radio"
      name="top-menu"
      className="menu-input"
      checked={TOP_MENU.isActive(name)}
      onChange={() => handleRoute(route, name)}
    />
    <label className="menu-label" htmlFor={name}>
      <span className="shake p text-primary">
        <i className={`icon ion-${icon} p mr-2 m-0 d-inline-block`} />
        {name}
      </span>
    </label>
  </div>
);

const MenuBar = () => (
  <section className="row menu-bar text-primary p-0">
    <div className="col-md-3"></div>
    <div className="col-md-9 pl-5">
      <Menu icon="md-clipboard" route="/overview" name="Overview" />
      <Menu icon="md-paper-plane" route="/appoinments" name="Appoinments" />
      <Menu icon="md-calendar" route="/schedule" name="Schedule" />
    </div>
  </section>
);

export default PrivateNavBar;
