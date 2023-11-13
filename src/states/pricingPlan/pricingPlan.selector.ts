import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
  getCurrentPricingPlanTransaction,
  getLatestInvoice,
  getPaymentUrlNinePay,
  getVnpayRedirectTransaction,
  getVnpayReturnTransaction,
  registerUpgradeBillingTransaction,
  upgradeBillingTransaction,
} from '@/repository/pricingPlan';
import { GetPaymentUrlNinePayPayload, UpgradeBillingPayload } from '@/repository/pricingPlan/type';

export const usePricingPlan = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentPricingPlan } = useSelector(
    (state: RootState) => state.pricing,
    shallowEqual,
  );

  const onGetCurrentPricingPlan = useCallback(async () => {
    return await dispatch(getCurrentPricingPlanTransaction());
  }, [dispatch]);

  const onUpgradeBilling = useCallback(
    async (payload: UpgradeBillingPayload) => {
      return await dispatch(upgradeBillingTransaction(payload));
    },
    [dispatch],
  );

  const onGetVnpayReturn = useCallback(async () => {
    return await dispatch(getVnpayReturnTransaction());
  }, [dispatch]);

  const onGetVnpayRedirect = useCallback(async () => {
    return await dispatch(getVnpayRedirectTransaction());
  }, [dispatch]);

  const onRegisterUpgradeBilling = useCallback(
    async (payload: string) => {
      return await dispatch(registerUpgradeBillingTransaction(payload));
    },
    [dispatch],
  );

  const onGetPaymentUrlNinePay = useCallback(
    async (payload: GetPaymentUrlNinePayPayload) => {
      return await dispatch(getPaymentUrlNinePay(payload));
    },
    [dispatch],
  );
  const onGetLatestInvoice = useCallback(
    async () => {
      return await dispatch(getLatestInvoice());
    },
    [dispatch],
  );
  return {
    currentPricingPlan,
    onGetCurrentPricingPlan,
    onGetVnpayRedirect,
    onGetVnpayReturn,
    onUpgradeBilling,
    onRegisterUpgradeBilling,
    onGetPaymentUrlNinePay,
    onGetLatestInvoice
  };
};
