import http from '@/repository';
import { LoginResponse } from './type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SuccessResponse } from '@/repository/type';

const FORM_DATA_HEADER = {
  'Content-Type': 'application/x-www-form-urlencoded',
};
<<<<<<< HEAD
=======
const userApi = {
  login: (body: any) =>
    http.post('/token', body, {
      headers: FORM_DATA_HEADER,
    }),
  verifyEmail: (token?: string) =>
    http.get(`/api/user/verify-email?token=${token}`),
};
>>>>>>> 0a2575a (CF-51 forgot-password)

export const loginTransaction = createAsyncThunk(
  "transaction/loginTransaction",
  async (payload: URLSearchParams, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<LoginResponse>>(`/token`, payload, {
        headers: FORM_DATA_HEADER
      })
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
