import { createSlice } from '@reduxjs/toolkit';
import { PricingPlanState } from './type';
import {
  getCurrentPricingPlanTransaction,
  getVnpayRedirectTransaction,
  getVnpayReturnTransaction,
  registerUpgradeBillingTransaction,
  upgradeBillingTransaction,
} from '@/repository/pricingPlan';

const initialState: PricingPlanState = {
  billingType: 1,
  currentPricingPlan: '',
  loading: false,
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
  },
});

export const {} = pricingPlaningSlice.actions;

export default pricingPlaningSlice.reducer;
