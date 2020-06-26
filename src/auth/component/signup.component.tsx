import React, {
  useContext,
  useReducer,
  useState,
  useEffect,
  Fragment,
} from 'react';

import * as auth from 'auth/auth.state';
import { Action } from 'auth/auth.type';
import { signIn } from 'api/resource.api';
import { ApiResponse } from 'api/api.type';
import { AuthContext } from 'auth/auth.context';
import { securedLS } from 'helper/local-storage-helper';

import { Input, RadioButton } from 'ui/form/input';
import { Button } from 'ui/form/button';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { FlexRow, Flex } from 'ui/layout/component/flex';
import USER_TYPE from 'app/app.user-type';

const handleSignIn = async (
  event: any,
  dispatch: (props: any) => void,
  setSignUpError: (error: string) => void
) => {
  event.preventDefault();
  dispatch({ type: auth.SIGN_IN_PENDING });

  const { data, error } = await signIn({
    email: event.target[0].value,
    password: event.target[1].value,
  });

  if (error) {
    setSignUpError(error.message);
    return dispatch({ type: auth.SIGN_IN_ERROR });
  }

  dispatch({
    type: auth.SIGN_IN_SUCCESS,
    payload: { token: data.token, roles: data.roles },
  });
};

const TutorName = ({ error }: { error: any }) => (
  <>
    <div className="col-md-6 p-0 pr-1">
      <Input
        type="text"
        name="fName"
        required={true}
        placeholder="First name"
        className={`${error ? 'is-invalid ' : ''}`}
      />
    </div>

    <div className="col-md-6 p-0 pl-1">
      <Input
        type="text"
        name="lName"
        required={true}
        placeholder="Last name"
        className={`${error ? 'is-invalid ' : ''}`}
      />
    </div>
  </>
);

const InstitutionName = ({ error }: { error: any }) => (
  <div className="col-md-12 p-0 pr-1">
    <Input
      type="text"
      name="name"
      required={true}
      placeholder="Institution Name"
      className={`${error ? 'is-invalid ' : ''}`}
    />
  </div>
);

const SignupForm = () => {
  const [type, setType] = useState<string>(USER_TYPE.TUTOR);
  const [signUpError, setSignUpError] = useState<String>('');
  const { setCurrentAuth, isHandlingAuth } = useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  useEffect(() => {
    setCurrentAuth(authState);
  }, [authState, setCurrentAuth]);

  const name =
    USER_TYPE.TUTOR === type ? (
      <TutorName error={signUpError} />
    ) : (
      <InstitutionName error={signUpError} />
    );

  return (
    <form
      className="col-12 p-md-3 p-0"
      onChange={() => setSignUpError('')}
      onSubmit={(e) => handleSignIn(e, dispatch, setSignUpError)}
    >
      <ErrorAlert message={signUpError} />
      <FlexRow>
        <div className="col-md-3 p-0">
          <RadioButton
            name="options"
            checked={true}
            required={true}
            onChange={setType}
            className="col-md-6"
            id={USER_TYPE.TUTOR}
            value={USER_TYPE.TUTOR}
          />
        </div>
        <div className="col-md-6 p-0">
          <RadioButton
            name="options"
            required={true}
            onChange={setType}
            id={USER_TYPE.INSTITUTION}
            value={USER_TYPE.INSTITUTION}
          />
        </div>
        {name}
      </FlexRow>

      <Input
        type="email"
        name="email"
        required={true}
        placeholder="Email"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />
      <Input
        type="password"
        name="password"
        required={true}
        placeholder="Password"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />
      <Input
        type="password"
        name="rePassword"
        required={true}
        placeholder="Confirm Password"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />
      <Button
        name="Sign in"
        disabled={isHandlingAuth}
        className="md btn-primary"
      />
    </form>
  );
};

export default SignupForm;
