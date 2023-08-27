import http from '..';

import { SuccessResponse } from '../type';
import {
  CreateSessionResponse,
  GetStreamingResponseRequest
} from "@/repository/testingbot/type.ts";

const testingBotRepository = {
  createSession: async () => http.post<SuccessResponse<CreateSessionResponse>>('/api/chat/session'),
  getStreamingResponse: async (payload: GetStreamingResponseRequest) => http.post<string>('/api/chat/get-streaming-response', payload, { responseType: "stream" }),
  getNormalResponse: async (message: string) => http.post<SuccessResponse<string>>(`/api/chat/get-normal-response?message=${message}`),
};

export default testingBotRepository;
