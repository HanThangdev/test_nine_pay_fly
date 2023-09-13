import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  
  GetStreamingPayload,
  GetConversationStreamingRequest,
  CreateSessionResponse,
} from './type';
import Cookies from 'universal-cookie';
import { HistoryChat } from '@/states/buildChatBot/type';
import http from '..';

export const getChatStreamingTransaction = createAsyncThunk(
  'transaction/getStreamingResponse',
  async (
    { payload, callBack }: GetStreamingPayload<GetConversationStreamingRequest, HistoryChat>,
    { rejectWithValue },
  ) => {
    const endPoint = 'api/chat/get-streaming-response';
    const cookies = new Cookies();
    const token = cookies.get('access_token');
    let textContainer = '';
    try {
      const response: any = await fetch(
        new URL(import.meta.env.VITE_API_URL).toString() + endPoint,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(payload),
        },
      );
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textContainer += decoder.decode(value, { stream: true });
        callBack({
          content: textContainer,
          sender_type: "assistant"
        });
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const createSessionChatTransaction = createAsyncThunk(
  'transaction/createSessionChatTransaction',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.post<CreateSessionResponse>(
        '/api/chat/session',
        payload,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);
