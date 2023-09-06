import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './type';
import { loginTransaction } from '@/repository/auth/login';

const initialState: AuthState = {
  data: {
    access_token: "",
    token_type: ""
  },
  loading: false,
};

export const buildChatbotSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginTransaction.pending, (state) => state);
    builder.addCase(loginTransaction.fulfilled, (state, action) => {
      state.data = action.payload.data.data;
      return state;
    });
    builder.addCase(loginTransaction.rejected, (state) => state);
  },
});

export const {} = buildChatbotSlice.actions;

export default buildChatbotSlice.reducer;
