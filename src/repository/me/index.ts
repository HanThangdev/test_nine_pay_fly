import http from '..';

import { SuccessResponse } from '../type';
import { MeProfile } from './type';

const meRepository = {
  fetchProfile: async () =>
    http.get<SuccessResponse<MeProfile>>('/users/me'),
};

export default meRepository;
