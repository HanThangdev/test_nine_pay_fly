import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './type';
import {
  loginTransaction,
  loginViaGoogleTransaction,
} from '@/repository/auth/login';
import { registerTransaction } from '@/repository/auth/register';
import { getUser } from '@/repository/me';
import { STORAGE, setLocalStorage } from '@/utils/storage';

const initialState: AuthState = {
  data: {
    access_token: '',
    token_type: '',
  },
  loading: false,
  emailVerify: '',
  isForgotPass: false,
  email: '',
  is_active: false,
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
    resetStateAuth: () => initialState,
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

    // start getUser

    builder.addCase(getUser.pending, (state) => {
      state.is_active = false;
    });
    builder.addCase(getUser.fulfilled, (state, action: any) => {
      state.email = action.payload.data.email;
      state.is_active = action.payload.data.is_active;
      setLocalStorage(STORAGE.USER_ID, action.payload.data.id);
    });
    builder.addCase(getUser.rejected, (state) => {
      state.is_active = false;
    });

    // end getUser
  },
});

export const { setEmailVerify, setIsForgotPass, resetStateAuth } =
  authSlice.actions;

export default authSlice.reducer;
