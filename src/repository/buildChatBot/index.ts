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
  GetbotInfosPayload,
  UpdateBotPayload,
  UpdateBotDataResponse,
  UploadFilePayload,
  GetAllFilePayload,
  GetAllFileResponse,
  DeleteFilePayload,
  GetIncludesResourcesPayload,
  GetIncludesResourcesResponse,
  AddQuestionAndAnswerResponse,
  AddQuestionAndAnswerPayload,
  GetAllQuestionAndAnswerPayload,
  GetAllQuestionAndAnswerResponse,
  DeleteQuestionAndAnswerPayload,
  GetTokenTelegramPayload,
  GetTokenTelegramResponse,
  GetBotEvaluationStrongPayload,
  GetBotEvaluationStrongResponse,
  GetLinkIntegrationMSTeamPayload,
  GetLinkIntegrationMSTeamResponse,
  UpdateListDomainPayload,
  UpdateRateLimitPayload,
} from './type';
import Cookies from 'universal-cookie';
import { SuccessResponse } from '../type';
import { objectToQueryString } from '@/utils/utils';
import { HistoryChat } from '@/states/buildChatBot/type';
import { notification } from 'antd';
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
    {
      payload,
      callBack,
    }: GetStreamingPayload<GetChatStreamingRequest, HistoryChat>,
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
          sender_type: 'assistant',
        });
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
      let data;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        data = decoder.decode(value, { stream: true });
        console.log(data);
        callBack(JSON.parse(data));
      }
      if (!!data) {
        callBack(JSON.parse(data));
      }
      return data;
    } catch (error: any) {
      if (error) {
        notification.warning({
          message: 'Import url fail',
        });
      }
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
  'transaction/updateAdvanceSettingTransaction',
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
      const { url, bot_id } = payload;
      // const base64Url = [btoa(url)];
      const payloadFinal = {
        bot_id,
        base64_urls: [...url],
      };
      const response = await http.delete<SuccessResponse<string>>(
        `/api/scraping/url`,
        {
          data: payloadFinal,
        },
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
      const response = await http.get<SuccessResponse<GetAllURLResponse>>(
        `/api/scraping/url/${payload.bot_id}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getbotInfosTransaction = createAsyncThunk(
  'transaction/getbotInfosTransaction',
  async (payload: GetbotInfosPayload, { rejectWithValue }) => {
    try {
      const queryString = objectToQueryString(payload);
      const response = await http.get<BotDataResponse>(
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
        if (done) break;
        data = decoder.decode(value, { stream: true });
      }
      if (!!data) {
        callBack(JSON.parse(data));
        return JSON.parse(data);
      }
      return data;
    } catch (error: any) {
      if (error) {
        notification.warning({
          message: 'Import file fail',
        });
      }
      console.log(error);
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const deleteFileImportedTransaction = createAsyncThunk(
  'transaction/deleteFileImportedTransaction',
  async (payload: DeleteFilePayload, { rejectWithValue }) => {
    try {
      const { knowledge_base_id, bot_id } = payload;
      const payloadFinal = {
        bot_id,
        knowledge_base_ids: [...knowledge_base_id],
      };
      const response = await http.delete<SuccessResponse<string>>(
        `/api/scraping/file`,
        {
          data: payloadFinal,
        },
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getAllFileTransaction = createAsyncThunk(
  'transaction/getAllFileTransaction',
  async (payload: GetAllFilePayload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<GetAllFileResponse>>(
        `/api/scraping/file/${payload.bot_id}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getIncludesResources = createAsyncThunk(
  'transaction/getIncludesData',
  async (payload: GetIncludesResourcesPayload, { rejectWithValue }) => {
    try {
      const response = await http.get<
        SuccessResponse<GetIncludesResourcesResponse>
      >(`/api/scraping/include-resources/${payload.bot_id}`);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const addQuestionAndAnswerTransaction = createAsyncThunk(
  'transaction/addQuestionAndAnswerTransaction',
  async (payload: AddQuestionAndAnswerPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<
        SuccessResponse<AddQuestionAndAnswerResponse>
      >(`/api/scraping/question-answer/${payload.bot_id}/many`, payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const deleteQuestionAndAnswerTransaction = createAsyncThunk(
  'transaction/deleteQuestionAndAnswerTransaction',
  async (payload: DeleteQuestionAndAnswerPayload, { rejectWithValue }) => {
    try {
      const { question_answer_id, bot_id } = payload;
      const payloadFinal = {
        bot_id,
        question_answer_ids: [...question_answer_id],
      };
      const response = await http.delete<SuccessResponse<string>>(
        `/api/scraping/question-answer/${bot_id}`,
        {
          data: payloadFinal,
        },
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getAllQuestionAndAnswerTransaction = createAsyncThunk(
  'transaction/getAllQuestionAndAnswerTransaction',
  async (payload: GetAllQuestionAndAnswerPayload, { rejectWithValue }) => {
    try {
      const response = await http.get<
        SuccessResponse<GetAllQuestionAndAnswerResponse>
      >(`/api/scraping/question-answer/${payload.bot_id}`);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getTokenTelegramTransaction = createAsyncThunk(
  'transaction/getTokenTelegramTransaction',
  async (payload: GetTokenTelegramPayload, { rejectWithValue }) => {
    try {
      const response = await http.get<
        SuccessResponse<GetTokenTelegramResponse>
      >(`/api/integration/telegram/token?bot_id=${payload.bot_id}`);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getBotEvaluationStrong = createAsyncThunk(
  'transaction/getBotEvaluationStrong',
  async (payload: GetBotEvaluationStrongPayload, { rejectWithValue }) => {
    try {
      const response = await http.get<
        SuccessResponse<GetBotEvaluationStrongResponse>
      >(`/api/bot/evaluation?bot_id=${payload.bot_id}`);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);
export const getLinkIntegrationMSTeamTransaction = createAsyncThunk(
  'transaction/getLinkIntegrationMSTeamTransaction',
  async (payload: GetLinkIntegrationMSTeamPayload, { rejectWithValue }) => {
    try {
      const response = await http.get<
        SuccessResponse<GetLinkIntegrationMSTeamResponse>
      >(
        `/api/integration/ms-team/get-link-integration?bot_id=${payload.bot_id}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const updateListDomainTransaction = createAsyncThunk(
  'transaction/updateListDomainTransaction',
  async (payload: UpdateListDomainPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<any>>(
        `/api/bot/domain-access`,
        payload,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const updateRateLimitTransaction = createAsyncThunk(
  'transaction/updateRateLimitTransaction',
  async (payload: UpdateRateLimitPayload, { rejectWithValue }) => {
    try {
      const { bot_id, rate_limit_per_day } = payload;
      const response = await http.post<SuccessResponse<string>>(
        `/api/bot/rate-limit-per-day?bot_id=${bot_id}&rate_limit_per_day=${rate_limit_per_day}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getRateLimitTransaction = createAsyncThunk(
  'transaction/getRateLimitTransaction',
  async (bot_id: string, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<{}>>(
        `/api/bot/rate-limit-per-day?bot_id=${bot_id}`,
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);
