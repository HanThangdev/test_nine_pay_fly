import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import { SuccessResponse } from '../type';
import { GetAllConversationsPayload, GetAllConversationsResponse } from './type';

export const getAllConversations = createAsyncThunk(
  'transaction/getAllConversations',
  async (payload: GetAllConversationsPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<GetAllConversationsResponse>>(
        '/api/chat/get-conversions-history',
        payload,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

