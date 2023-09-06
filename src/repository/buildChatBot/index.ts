import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import {
  BotPayload,
  BotDataResponse,
  ScrapingURLPayload,
  AdvancePayload,
  GetStreamingPayload,
  CreateSessionResponse,
  GetChatStreamingRequest,
  DeleteURLPayload,
  GetAllURLPayload,
  GetAllURLResponse,
} from './type';
import Cookies from 'universal-cookie';
import { SuccessResponse } from '../type';
import { objectToQueryString } from '@/utils/utils';

export const createBotTransaction = createAsyncThunk(
  'transaction/createBotTransaction',
  async (payload: BotPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<BotDataResponse>>('/api/bot', payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const createSessionTransaction = createAsyncThunk(
  'transaction/createSessionTransaction',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<CreateSessionResponse>>('/api/chat/session', payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getChatStreamingTransaction = createAsyncThunk(
  "transaction/getStreamingResponse",
  async ({payload, callBack}: GetStreamingPayload<GetChatStreamingRequest, string>, { rejectWithValue }) => {
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
          callBack(textContainer)
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const scrapingURLTransaction = createAsyncThunk(
  'transaction/scrapingURLTransaction',
  async ({payload, callBack}: GetStreamingPayload<ScrapingURLPayload, any>, { rejectWithValue }) => {
    const endPoint = 'api/scraping/url';
    const cookies = new Cookies();
    const token = cookies.get('access_token');
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
      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      let data;

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }
        // Massage and parse the chunk of data
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        console.log("lines", lines)

        const parsedLines = lines
        .map((line) => line.replace(/^data: /, '').trim()) // Remove the "data: " prefix
        .filter((line) => line !== '' && line !== '[DONE]') // Remove empty lines and "[DONE]"
        .map((line) => {
          return JSON?.parse(line);
        });
        data = parsedLines;
        console.log("parsedLines", parsedLines)
        callBack(parsedLines)
      }
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const AdvanceSettingTransaction = createAsyncThunk(
  'transaction/AdvanceSettingTransaction',
  async (payload: AdvancePayload, { rejectWithValue }) => {
    try {
      const response = await http.put<SuccessResponse<AdvancePayload>>(
        '/api/bot/bot-widget-setting',
        payload,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);


export const deleteURLTransaction = createAsyncThunk(
  'transaction/AdvanceSettingTransaction',
  async (payload: DeleteURLPayload, { rejectWithValue }) => {
    try {
      const queryString = objectToQueryString(payload)
      const response = await http.delete<SuccessResponse<string>>(
        `/api/scraping/url?${queryString}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getAllURLTransaction = createAsyncThunk(
  'transaction/getAllURLTransaction',
  async (payload: GetAllURLPayload, { rejectWithValue }) => {
    try {
      const queryString = objectToQueryString(payload)
      const response = await http.get<SuccessResponse<GetAllURLResponse>>(
        `/api/scraping/url?${queryString}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);