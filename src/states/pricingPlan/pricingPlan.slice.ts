import { createSlice } from '@reduxjs/toolkit';
import { PricingPlanState } from './type';
import {
  getCurrentPricingPlanTransaction,
  getLatestInvoice,
  getNinePayCallback,
  getPaymentUrlNinePay,
  getVnpayRedirectTransaction,
  getVnpayReturnTransaction,
  registerUpgradeBillingTransaction,
  upgradeBillingTransaction,
} from '@/repository/pricingPlan';

const initialState: PricingPlanState = {
  billingType: 1,
  currentPricingPlan: '',
  loading: false,
  number_of_chatbots: 0,
  monthly_message_credits: 0,
};

export const pricingPlaningSlice = createSlice({
  name: 'pricingPlaningSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //start getCurrentPricingPlanTransaction
    builder.addCase(getCurrentPricingPlanTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCurrentPricingPlanTransaction.fulfilled,
      (state, action: any) => {
        state.currentPricingPlan = action.payload.data.pricing_plan_name;
        state.number_of_chatbots = action.payload.data.number_of_chatbots;
        state.monthly_message_credits =
          action.payload.data.monthly_message_credits;
        state.loading = false;
      },
    );
    builder.addCase(getCurrentPricingPlanTransaction.rejected, (state) => {
      state.loading = false;
    });
    //end getCurrentPricingPlanTransaction

    //start upgradeBillingTransaction
    builder.addCase(upgradeBillingTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(upgradeBillingTransaction.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(upgradeBillingTransaction.rejected, (state) => {
      state.loading = false;
    });
    //end upgradeBillingTransaction

    //start getVnpayReturn
    builder.addCase(getVnpayReturnTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVnpayReturnTransaction.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getVnpayReturnTransaction.rejected, (state) => {
      state.loading = false;
    });
    //end getVnpayReturnTransaction

    //start getVnpayRedirectTransaction
    builder.addCase(getVnpayRedirectTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVnpayRedirectTransaction.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getVnpayRedirectTransaction.rejected, (state) => {
      state.loading = false;
    });
    //end getVnpayRedirectTransaction

    //start registerUpgradeBillingTransaction
    builder.addCase(registerUpgradeBillingTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUpgradeBillingTransaction.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(registerUpgradeBillingTransaction.rejected, (state) => {
      state.loading = false;
    });
    //end registerUpgradeBillingTransaction

     //start getPaymentUrlNinePay
     builder.addCase(getPaymentUrlNinePay.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaymentUrlNinePay.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getPaymentUrlNinePay.rejected, (state) => {
      state.loading = false;
    });
    //end getPaymentUrlNinePay

     //start getLatestInvoice
     builder.addCase(getLatestInvoice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLatestInvoice.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getLatestInvoice.rejected, (state) => {
      state.loading = false;
    });
    //end getLatestInvoice

     //start getNinePayCallback
     builder.addCase(getNinePayCallback.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNinePayCallback.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getNinePayCallback.rejected, (state) => {
      state.loading = false;
    });
    //end getNinePayCallback
  },
});

export const {} = pricingPlaningSlice.actions;

export default pricingPlaningSlice.reducer;
