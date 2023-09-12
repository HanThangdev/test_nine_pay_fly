import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getCurrentPricingPlan, getVnpayRedirect, getVnpayReturn, upgradeBillingTransaction } from '@/repository/pricingPlan';
import { UpgradeBillingPayload } from '@/repository/pricingPlan/type';

export const useManageChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {  } = useSelector(
    (state: RootState) => state.pricing,
    shallowEqual,
  );

  const onGetCurrentPricingPlan = useCallback(
    async () => {
       return await dispatch(getCurrentPricingPlan());
    },
    [dispatch],
  );

  const onUpgradeBillingTransaction = useCallback(
    async (payload: UpgradeBillingPayload) => {
       return await dispatch(upgradeBillingTransaction(payload));
    },
    [dispatch],
  );

  const onGetVnpayReturn = useCallback(
    async () => {
       return await dispatch(getVnpayReturn());
    },
    [dispatch],
  );

  const onGetVnpayRedirect = useCallback(
    async () => {
       return await dispatch(getVnpayRedirect());
    },
    [dispatch],
  );

  return {
    onGetCurrentPricingPlan,
    onGetVnpayRedirect,
    onGetVnpayReturn,
    onUpgradeBillingTransaction
  };
};
