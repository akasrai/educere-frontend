import * as http from './http.api';
import { Experties } from 'tutor/tutor.type';

export const addExperties = (requestBody: Experties) => {
  return http.post('/experties', { requestBody });
};
