import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAuth = () => {
  const { emailVerify, isForgotPass } = useSelector(
    (state: RootState) => state.auth,
    shallowEqual,
  );

  return {
    emailVerify,
    isForgotPass,
  };
};
