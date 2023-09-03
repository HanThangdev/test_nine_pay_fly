import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import { SuccessResponse } from '../type';
import { DeleteChatbotPayload, ManageDataResponse } from './type';


export const getBotTransaction = createAsyncThunk(
  "transaction/getBotTransaction",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<ManageDataResponse>>('/api/bot')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const deleteChatBotTransaction = createAsyncThunk(
  "transaction/deleteChatBotTransaction",
  async (payload: DeleteChatbotPayload, { rejectWithValue }) => {
    try {
      const { bot_id } = payload
      const response = await http.delete<SuccessResponse<string>>(`/api/bot?bot_id=${bot_id}`)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);