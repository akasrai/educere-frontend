import { Action } from './auth.type';
import * as auth from 'auth/auth.state';
import { ApiResponse } from 'api/api.type';
import { getCurrentUser } from 'api/resource.api';
import { securedLS } from 'helper/local-storage-helper';

const getUser = (data: any) => ({
  bio: data.bio,
  name: data.name,
  photo: data.photo,
  email: data.email,
  github: data.github,
  website: data.website,
  address: data.address,
  twitter: data.twitter,
  facebook: data.facebook,
  linkedIn: data.linkedIn,
  phoneNumber: data.phoneNumber,
});

export const getSignedInUser = async (
  token: string,
  dispatch: (props: any) => void
) => {
  const { data, error } = await getCurrentUser();

  if (error) {
    return dispatch({
      type: auth.AUTH_ACTION_STOPPED,
    });
  }

  dispatch({
    type: auth.SIGN_IN_SUCCESS,
    payload: { token, roles: data.roles, user: getUser(data) },
  });
};

export const restoreAuthentication = (dispatch: (props: Action) => void) => {
  dispatch({ type: auth.AUTH_ACTION_PENDING });
  const { data }: ApiResponse = securedLS.get(auth.AUTH_LS_KEY);

  if (data) {
    return dispatch({ type: auth.RESTORE_AUTH, payload: data });
  }

  dispatch({ type: auth.SIGN_IN_ERROR });
};
