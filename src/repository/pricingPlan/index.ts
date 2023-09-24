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

export const getCurrentPricingPlanTransaction = createAsyncThunk(
  "transaction/getCurrentPricingPlanTransaction",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<string>>('/api/billing/get-current-pricing-plan')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getVnpayReturnTransaction = createAsyncThunk(
  "transaction/getVnpayReturnTransaction",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<string>>('/api/billing/upgrade/vnpay-return')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getVnpayRedirectTransaction = createAsyncThunk(
  "transaction/getVnpayRedirectTransaction",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.get<SuccessResponse<string>>('/api/billing/upgrade/vnpay-sanbox')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const registerUpgradeBillingTransaction = createAsyncThunk(
  "transaction/registerUpgradeBillingTransaction",
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await http.post<SuccessResponse<string>>(`/api/user/billing-upgrade-request?email=${payload}`)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);