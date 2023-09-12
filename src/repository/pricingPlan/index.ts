import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '..';
import { SuccessResponse } from '../type';
import { UpgradeBillingPayload, UpgradeBillingResponse } from './type';


export const upgradeBillingTransaction = createAsyncThunk(
  "transaction/upgradeBillingTransaction",
  async (payload: UpgradeBillingPayload, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<UpgradeBillingResponse>>('/api/billing/upgrade', payload)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getCurrentPricingPlan = createAsyncThunk(
  "transaction/getCurrentPricingPlan",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<string>>('/api/billing/get-current-pricing-plan')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getVnpayReturn = createAsyncThunk(
  "transaction/getVnpayReturn",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<string>>('/api/billing/upgrade/vnpay-return')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getVnpayRedirect = createAsyncThunk(
  "transaction/getVnpayRedirect",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<string>>('/api/billing/upgrade/vnpay-sanbox')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);