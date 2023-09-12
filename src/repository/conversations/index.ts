import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import { GetAllConversationsPayload, GetAllConversationsResponse } from './type';

export const getAllConversations = createAsyncThunk(
  'transaction/getAllConversations',
  async (params: GetAllConversationsPayload, { rejectWithValue }) => {
    try {
      const response = await http.get<GetAllConversationsResponse[]>(
        '/api/chat/history', {
            params
          },
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

