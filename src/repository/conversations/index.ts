import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import { SuccessResponse } from '../type';
import { GetAllConversationsPayload, GetAllConversationsResponse } from './type';
import { objectToQueryString } from '@/utils/utils';

export const getAllConversations = createAsyncThunk(
  'transaction/getAllConversations',
  async (payload: GetAllConversationsPayload, { rejectWithValue }) => {
    try {
      const queryString = objectToQueryString(payload);
      const response = await http.get<SuccessResponse<string>>(
        `/api/chat/conversions-history?${queryString}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

