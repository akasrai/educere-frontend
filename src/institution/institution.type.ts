export interface Tutor {
  address: {
    city: string;
    country: string;
    latitude?: string;
    longitude?: string;
    state?: string;
    street: string;
    zip?: string;
  };

  email: string;
  bio?: string;
  dp?: string;
  facebook?: string;
  firstName: string;
  github?: string;
  lastName: string;
  linkedin?: string;
  middleName?: string;
  phoneOne: string;
  phoneThree?: string;
  phoneTwo?: string;
  referenceId: string;
  status: boolean;
  twitter?: string;
  wall?: string;
  website?: string;
}
