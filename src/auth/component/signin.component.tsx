import React, { useContext, useReducer, useState, useEffect } from 'react';

import * as auth from 'auth/auth.state';
import { Action } from 'auth/auth.type';
import { signIn, getCurrentUser } from 'api/resource.api';
import { ApiResponse } from 'api/api.type';
import { AuthContext } from 'auth/auth.context';
import { securedLS } from 'helper/local-storage-helper';

import { Input } from 'ui/form/input';
import { Button } from 'ui/form/button';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { Token } from 'api/token.api';

const getUser = (data: any) => ({
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
});

const completeSignIn = async (
  token: string,
  dispatch: (props: any) => void
) => {
  const { data, error } = await getCurrentUser();

  if (!error)
    dispatch({
      type: auth.SIGN_IN_SUCCESS,
      payload: { token: token, roles: data.roles, user: getUser(data) },
    });
};

const handleSignIn = async (
  event: any,
  dispatch: (props: any) => void,
  setSignInError: (error: string) => void
) => {
  event.preventDefault();
  dispatch({ type: auth.AUTH_ACTION_PENDING });

  const { data, error } = await signIn({
    email: event.target[0].value,
    password: event.target[1].value,
  });

  if (error) {
    setSignInError(error.message);
    return dispatch({ type: auth.SIGN_IN_ERROR });
  }

  Token.setAccessToken(data.token);
  completeSignIn(data.token, dispatch);
};

const restoreAuthentication = (dispatch: (props: Action) => void) => {
  dispatch({ type: auth.AUTH_ACTION_PENDING });
  const { data }: ApiResponse = securedLS.get(auth.AUTH_LS_KEY);

  if (data) {
    return dispatch({ type: auth.RESTORE_AUTH, payload: data });
  }

  dispatch({ type: auth.SIGN_IN_ERROR });
};

const SigninForm = () => {
  const [checkAuth, setCheckAuth] = useState<boolean>(true);
  const [signInError, setSignInError] = useState<String>('');
  const { setCurrentAuth, isHandlingAuth } = useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  useEffect(() => {
    setCurrentAuth(authState);

    if (checkAuth) {
      setCheckAuth(false);
      restoreAuthentication(dispatch);
    }
  }, [authState, checkAuth, setCheckAuth, setCurrentAuth]);

  return (
    <form
      className="col-12 p-md-3 p-0 text-muted"
      onChange={() => setSignInError('')}
      onSubmit={(e) => handleSignIn(e, dispatch, setSignInError)}
    >
      <ErrorAlert message={signInError} />
      <Input
        type="email"
        name="email"
        required={true}
        label="Email"
        placeholder="Email"
        className={`${signInError ? 'is-invalid ' : ''}`}
      />
      <Input
        type="password"
        name="password"
        required={true}
        label="Password"
        placeholder="Password"
        className={`${signInError ? 'is-invalid ' : ''}`}
      />
      <Button
        name="Sign in"
        disabled={isHandlingAuth}
        className="md btn-primary"
      />
    </form>
  );
};

export default SigninForm;
