import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './type';
import { loginTransaction, loginViaGoogleTransaction } from '@/repository/auth/login';
import { registerTransaction } from '@/repository/auth/register';

const initialState: AuthState = {
  data: {
    access_token: '',
    token_type: '',
  },
  loading: false,
  emailVerify: '',
  isForgotPass: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmailVerify: (state, action) => {
      state.emailVerify = action.payload;
    },
    setIsForgotPass: (state, action) => {
      state.isForgotPass = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginTransaction.fulfilled, (state, action) => {
      state.data = action.payload.data.data;
      state.loading = false;
      return state;
    });
    builder.addCase(loginTransaction.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(registerTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerTransaction.fulfilled, (state, action) => {
      state.loading = false;
      return state;
    });
    builder.addCase(registerTransaction.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(loginViaGoogleTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginViaGoogleTransaction.fulfilled, (state, action) => {
      state.loading = false;
      return state;
    });
    builder.addCase(loginViaGoogleTransaction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setEmailVerify, setIsForgotPass } = authSlice.actions;

export default authSlice.reducer;
