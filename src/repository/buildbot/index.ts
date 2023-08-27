import http from '..';

import { SuccessResponse } from '../type';
import { BotPayload, BotDataResponse } from './type';

const botRepository = {
  createBot: async (payload: BotPayload) =>
    http.post<SuccessResponse<BotDataResponse>>('/api/bot', payload),
};

export default botRepository;
