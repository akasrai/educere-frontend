export interface User {
  name: string | null;
  photo: string | null;
  email?: string | null;
  phoneNumber?: string;
  bio?: string;
  website?: string;
  facebook?: string;
  github?: string;
  linkedIn?: string;
  twitter?: string;
  address: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
    latitude?: string;
    longitude?: string;
  };
}

export interface AuthState {
  user: User;
  token: string;
  roles: string[];
  isHandlingAuth: boolean;
  isAuthenticated: boolean;
  setCurrentUser: (currentUser: User) => void;
  setCurrentAuth: (currentAuth: AuthState) => void;
}

export interface Action {
  payload?: any;
  type: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface SignupPayload {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  institutionName?: string;
  email: string;
  password: string;
  userType: string;
}

export interface CompleteSignupPayload {
  dp?: string;
  bio?: string;
  wall?: string;
  github?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  phoneOne: string;
  phoneTwo?: string;
  phoneThree?: string;
  address: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
    latitude?: string;
    longitude?: string;
  };
}
