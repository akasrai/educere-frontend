import * as http from './http.api';
import { ExpertiesPayload } from 'tutor/tutor.type';

export const addExperties = (requestBody: ExpertiesPayload) => {
  return http.post('/experties', { requestBody });
};
