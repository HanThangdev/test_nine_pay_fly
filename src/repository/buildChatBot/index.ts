import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import {
  BotPayload,
  BotDataResponse,
  ImportURLPayload,
  AdvancePayload,
  GetStreamingPayload,
  CreateSessionResponse,
  GetChatStreamingRequest,
  DeleteURLPayload,
  GetAllURLPayload,
  GetAllURLResponse,
  GetBotInfoPayload,
  UpdateBotPayload,
  UpdateBotDataResponse,
  UploadFilePayload,
} from './type';
import Cookies from 'universal-cookie';
import { SuccessResponse } from '../type';
import { objectToQueryString } from '@/utils/utils';
const FORM_DATA_HEADER = { 'Content-Type': 'multipart/form-data' };
export const createBotTransaction = createAsyncThunk(
  'transaction/createBotTransaction',
  async (payload: BotPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<BotDataResponse>>(
        '/api/bot',
        payload,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const updateBotTransaction = createAsyncThunk(
  'transaction/updateBotTransaction',
  async (payload: UpdateBotPayload, { rejectWithValue }) => {
    try {
      const response = await http.put<SuccessResponse<UpdateBotDataResponse>>(
        '/api/bot',
        payload,
      );
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

export const getChatStreamingTransaction = createAsyncThunk(
  'transaction/getStreamingResponse',
  async (
    { payload, callBack }: GetStreamingPayload<GetChatStreamingRequest, string>,
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
      // console.log("response", response)
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textContainer += decoder.decode(value, { stream: true });
        callBack(textContainer);
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const importURLTransaction = createAsyncThunk(
  'transaction/importURLTransaction',
  async (
    { payload, callBack }: GetStreamingPayload<ImportURLPayload, any>,
    { rejectWithValue },
  ) => {
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
      let data
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        data = decoder.decode(value, { stream: true });
        console.log(data);
        callBack(JSON.parse(data));
      }
      if(!!data){
        callBack(JSON.parse(data));
      }
      return data
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getAdvanceSettingTransaction = createAsyncThunk(
  'transaction/AdvanceSettingTransaction',
  async (payload: { bot_id: string }, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<AdvancePayload>>(
        `/api/bot/bot-widget-setting?bot_id=${payload.bot_id}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const updateAdvanceSettingTransaction = createAsyncThunk(
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

export const uploadBotProfilePictureTransaction = createAsyncThunk(
  'transaction/AdvanceSettingTransaction',
  async (payload: { bot_id: string; file?: File }, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<AdvancePayload>>(
        '/api/bot/upload-bot-profile-picture',
        payload,
        {
          headers: FORM_DATA_HEADER,
        },
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const deleteURLTransaction = createAsyncThunk(
  'transaction/deleteURLTransaction',
  async (payload: DeleteURLPayload, { rejectWithValue }) => {
    try {
      const base64Url = btoa(payload.url)
      const response = await http.delete<SuccessResponse<string>>(
        `/api/scraping/url?bot_id=${payload.bot_id}&base64_url=${base64Url}`,
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
      const queryString = objectToQueryString(payload);
      const response = await http.get<SuccessResponse<GetAllURLResponse>>(
        `/api/scraping/url?${queryString}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getBotInfoTransaction = createAsyncThunk(
  'transaction/getBotInfoTransaction',
  async (payload: GetBotInfoPayload, { rejectWithValue }) => {
    try {
      const queryString = objectToQueryString(payload);
      const response = await http.get<SuccessResponse<BotDataResponse>>(
        `/api/bot/information?${queryString}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const uploadFileTransaction = createAsyncThunk(
  'transaction/uploadFileTransaction',
  async (
    { payload, callBack }: GetStreamingPayload<UploadFilePayload, any>,
    { rejectWithValue },
  ) => {
    const endPoint = 'api/scraping/file';
    const cookies = new Cookies();
    const token = cookies.get('access_token');

    try {
      const formData = new FormData();
      formData.append('bot_id', payload.bot_id);
      formData.append('file', payload.file);
      const response: any = await fetch(
        new URL(import.meta.env.VITE_API_URL).toString() + endPoint,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },

          body: formData,
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

        data = JSON.parse(lines[0]);
        console.log(lines);
        callBack(lines[0]);
      }
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.error);
    }
  },
);
