import http from '../..';

import { LoginPayload } from './type';
const FORM_DATA_HEADER = {
  'Content-Type': 'application/x-www-form-urlencoded',
};
const userApi = {
  login: (body: any) =>
    http.post('/token', body, {
      headers: FORM_DATA_HEADER,
    }),
};

export default userApi;
