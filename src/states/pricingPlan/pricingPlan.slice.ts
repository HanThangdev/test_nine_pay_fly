import { createSlice } from '@reduxjs/toolkit';
import { PricingPlanState } from './type';
import { getCurrentPricingPlan, getVnpayRedirect, getVnpayReturn, upgradeBillingTransaction } from '@/repository/pricingPlan';

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
    //start getCurrentPricingPlan
    builder.addCase(getCurrentPricingPlan.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentPricingPlan.fulfilled, (state,) => {
      state.loading = false;
    });
    builder.addCase(getCurrentPricingPlan.rejected, (state) => {
      state.loading = false;
    });
    //end getCurrentPricingPlan

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
    builder.addCase(getVnpayReturn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVnpayReturn.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getVnpayReturn.rejected, (state) => {
      state.loading = false;
    });
    //end getVnpayReturn

    //start getVnpayReturn
    builder.addCase(getVnpayRedirect.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVnpayRedirect.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(getVnpayRedirect.rejected, (state) => {
      state.loading = false;
    });
    //end getVnpayReturn
  },
});

export const {} = pricingPlaningSlice.actions;

export default pricingPlaningSlice.reducer;
