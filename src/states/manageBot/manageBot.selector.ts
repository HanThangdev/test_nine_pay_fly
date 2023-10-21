import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getBotTransaction } from '@/repository/manageChatbot';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

export const useManageChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { ownerChatbot, loading } = useSelector(
    (state: RootState) => state.manageBot,
    shallowEqual,
  );

  const onGetBot = useCallback(
    async (isLoginIn?: boolean) => {
      await dispatch(getBotTransaction());
        navigate('/');
    },
    [dispatch],
  );

  return {
    onGetBot,
    ownerChatbot,
    loading,
  };
};
