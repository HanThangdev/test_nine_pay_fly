import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useCallback } from 'react';
import { getUser } from '@/repository/me';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { emailVerify, isForgotPass, email } = useSelector(
    (state: RootState) => state.auth,
    shallowEqual,
  );

  const onGetUser = useCallback(
    async (isLoginIn?: boolean) => {
      const res = await dispatch(getUser());
      return res;
    },
    [dispatch],
  );

  return {
    onGetUser,
    emailVerify,
    isForgotPass,
    email,
  };
};
