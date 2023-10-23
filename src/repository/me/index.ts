import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import { GetUserResponse } from './type';

export const getUser = createAsyncThunk(
  'transaction/getUser',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<GetUserResponse[]>('/user/me');
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  },
);
