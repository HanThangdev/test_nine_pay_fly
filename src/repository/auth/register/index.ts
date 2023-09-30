import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../..';

import { SuccessResponse } from '../../type';
import { RegisterRequest, RequestRegisterData } from './type';
import { AxiosError, AxiosResponse } from 'axios';
import { IErrorAPIRes } from '@/states/auth/type';

export const registerTransaction = createAsyncThunk(
  "transaction/registerTransaction",
  async (payload: RegisterRequest, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<RequestRegisterData>>('/api/user', payload)
      return response;
    } catch (error: any) {
      let result: IErrorAPIRes | null = null;
      if (!(error instanceof Error)) {
        const res = error as AxiosResponse<IErrorAPIRes, AxiosError>;
        result = res?.data;
      }
      return rejectWithValue(error);
    }
  }
);
