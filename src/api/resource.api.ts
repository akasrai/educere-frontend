import * as http from './http.api';
import { Token } from './token.api';
import {
  Credentials,
  SignupPayload,
  CompleteSignupPayload,
} from 'auth/auth.type';

export const refreshAccessToken = () => {
  return http.post(`/auth/token`, {
    referenceToken: Token.getAccessToken(),
  });
};

export const signIn = (credentials: Credentials) => {
  return http.post(`/auth/signin`, credentials);
};

export const signUp = (user: SignupPayload) => {
  return http.post(`/auth/users`, user);
};

export const completeSignUp = (user: CompleteSignupPayload) => {
  return http.post(`/auth/complete-signup`, user);
};

export const getCurrentUser = () => {
  return http.get(`/auth/users`);
};

export const signOut = () => {
  return http.get(`/auth/signout`);
};
