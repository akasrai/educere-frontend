import React, { useContext, useReducer, useState, useEffect } from 'react';

import * as auth from 'auth/auth.state';
import { Button } from 'ui/form/button';
import { pictures } from 'data/mock.data';
import { AuthContext } from 'auth/auth.context';
import { Input, TextArea } from 'ui/form/input';
import { completeSignUp } from 'api/resource.api';
import { ErrorAlert } from 'ui/alert/inline-alert';
import { FlexRow } from 'ui/layout/component/flex';
import { CompleteSignupPayload } from 'auth/auth.type';

const isAddressComponents = (name: string) =>
  name === 'street' || name === 'city' || name === 'country';

const getFormData = (inputs: any): CompleteSignupPayload => {
  const address: any = {};
  const formData: any = {};

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name) {
      if (isAddressComponents(inputs[i].name)) {
        address[inputs[i].name] = inputs[i].value;
        continue;
      }

      formData[inputs[i].name] = inputs[i].value;
    }
  }

  return { ...formData, dp: pictures.getRandomPicture(), address };
};

const CompleteSignupForm = () => {
  const [signUpError, setSignUpError] = useState<string>('');
  const { setCurrentAuth, isHandlingAuth } = useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    dispatch({ type: auth.AUTH_ACTION_PENDING });

    const { data, error } = await completeSignUp(getFormData(event.target));

    if (error) {
      setSignUpError(error.message);
      return dispatch({ type: auth.AUTH_ACTION_STOPPED });
    }

    dispatch({
      type: auth.UPDATE_AUTH,
      payload: { token: data.token, roles: data.roles },
    });
    // setCurrentAuth(authState);
  };

  return (
    <form
      className="col-12 p-0 text-muted"
      onChange={() => setSignUpError('')}
      onSubmit={(e) => handleSignUp(e)}
    >
      <ErrorAlert message={signUpError} />

      <Input
        max={10}
        type="text"
        name="phoneOne"
        required={true}
        label="Phone Number"
        placeholder="Phone Number"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />
      <Input
        type="text"
        name="street"
        required={true}
        label="Address Line"
        placeholder="Address Line"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />

      <FlexRow>
        <div className="col-md-6 pl-0">
          <Input
            type="text"
            name="city"
            required={true}
            label="City"
            placeholder="City"
            className={`${signUpError ? 'is-invalid ' : ''}`}
          />
        </div>
        <div className="col-md-6 pr-0">
          <Input
            type="text"
            name="country"
            required={true}
            label="Country"
            placeholder="Country"
            className={`${signUpError ? 'is-invalid ' : ''}`}
          />
        </div>
      </FlexRow>

      <Input
        type="text"
        name="website"
        required={false}
        label="Website"
        placeholder="Website"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />

      <Input
        type="text"
        name="facebook"
        required={false}
        label="Facebook"
        placeholder="Facebook"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />

      <Input
        type="text"
        name="twitter"
        required={false}
        label="Twitter"
        placeholder="Twitter"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />

      <Input
        type="text"
        name="linkedin"
        required={false}
        label="Linkedin"
        placeholder="Linkedin"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />

      <TextArea
        type="text"
        name="bio"
        required={false}
        label="Description"
        placeholder="Description"
        className={`${signUpError ? 'is-invalid ' : ''}`}
      />

      <Button
        name="Continue"
        disabled={isHandlingAuth}
        className="md btn-primary"
      />
    </form>
  );
};

export default CompleteSignupForm;
