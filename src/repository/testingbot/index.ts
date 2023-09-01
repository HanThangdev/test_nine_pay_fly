import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';

import { SuccessResponse } from '../type';
import {
  CreateSessionResponse,
  GetStreamingResponseRequest
} from "@/repository/testingbot/type.ts";
import Cookies from 'universal-cookie';

const testingBotRepository = {
  createSession: async () => http.post<SuccessResponse<CreateSessionResponse>>('/api/chat/session'),
  getNormalResponse: async (message: string) => http.post<SuccessResponse<string>>(`/api/chat/get-normal-response?message=${message}`),
};

// export const getStreamingResponse = createAsyncThunk(
//   "transaction/getStreamingResponse",
//   async (payload: GetStreamingResponseRequest, { rejectWithValue }) => {
//     try {
//       const response = await http.post<string>('/api/chat/get-streaming-response', payload, { responseType: 'stream'})
//       return response;
//     } catch (error: any) {
//       return rejectWithValue(error.response.data.error);
//     }
//   }
// );

export const getStreamingResponse = createAsyncThunk(
  "transaction/getStreamingResponse",
  async (payload: GetStreamingResponseRequest, { rejectWithValue }) => {
      const endPoint = "api/chat/get-streaming-response"
      const cookies = new Cookies();
      const token = cookies.get('access_token');
      let textContainer = '';
    try {
      const response: any = await fetch(new URL(import.meta.env.VITE_API_URL).toString() + endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        
        body: JSON.stringify(payload),
      });
      // console.log("response", response)
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      while (true) {
          const {done, value} = await reader.read();
          if (done) break;
          textContainer += decoder.decode(value, {stream: true})
          console.log("textContainer", textContainer)
      }
      return textContainer;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export default testingBotRepository;
