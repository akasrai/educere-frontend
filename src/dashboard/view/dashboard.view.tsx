import React, { useContext, useState, useReducer, useEffect } from 'react';

import * as auth from 'auth/auth.state';
import { AuthContext } from 'auth/auth.context';
import AuthenticatedLayout from 'ui/layout/authenticated.layout';
import TutorOverView from 'dashboard/components/tutor-overview.component';
import { getCurrentUser } from 'api/resource.api';

const getUser = async (dispatch: (props: any) => void) => {
  dispatch({ type: auth.AUTH_ACTION_PENDING });
  const { data, error } = await getCurrentUser();

  if (error) {
    return dispatch({ type: auth.SIGN_IN_ERROR });
  }

  dispatch({
    type: auth.UPDATE_USER,
    payload: {
      user: {
        bio: data.bio,
        name: data.name,
        photo: data.photo,
        email: data.email,
        github: data.github,
        website: data.website,
        address: data.address,
        twitter: data.twittter,
        facebook: data.facebook,
        linkedIn: data.linkedIn,
        phoneNumber: data.phoneNumber,
      },
    },
  });
};

const DashboardView = () => {
  const { user } = useContext(AuthContext);

  const { setCurrentUser } = useContext(AuthContext);
  const [isUserFetched, setIsUserFetched] = useState<boolean>(false);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  // useEffect(() => {
  //   if (!user.name) setCurrentUser(authState.user);

  //   if (!isUserFetched) {
  //     getUser(dispatch);
  //     setIsUserFetched(true);
  //   }
  // }, [authState, isUserFetched, setCurrentUser]);

  return (
    <AuthenticatedLayout>
      <h3 className="p-3">
        Hi, <span className="bold">{user.name}!</span>
      </h3>
      <TutorOverView />
    </AuthenticatedLayout>
  );
};

export default DashboardView;
