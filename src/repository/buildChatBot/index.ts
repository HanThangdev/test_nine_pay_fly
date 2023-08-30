import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';

import { SuccessResponse } from '../type';
import { BotPayload, BotDataResponse } from './type';


export const createBotTransaction = createAsyncThunk(
  "transaction/createBotTransaction",
  async (payload: BotPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<BotDataResponse>>('/api/bot', payload)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
