import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import {
  GetAllConversationsPayload,
  GetAllConversationsResponse,
  GetConversationPdfPayload,
} from './type';

export const getAllConversations = createAsyncThunk(
  'transaction/getAllConversations',
  async (params: GetAllConversationsPayload, { rejectWithValue }) => {
    try {
      return await http.get<GetAllConversationsResponse[]>(
        '/api/chat/history',
        {
          params,
        },
      );
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getConversationPdf = createAsyncThunk<
  string,
  GetConversationPdfPayload
>('transaction/getConversationPdf', async (payload, { rejectWithValue }) => {
  try {
    return await http.post('/api/chat/history.pdf', payload);
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});
