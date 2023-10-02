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
      const { payload }: any = await dispatch(getBotTransaction());
      if (!payload?.data?.length && isLoginIn) {
        navigate('/build-chatbots');
      } else if (!payload?.data?.length) {
        notification.warning({
          message: "You don't have any bot, Please config your bot",
        });
        navigate('/build-chatbots');
      } else {
        navigate('/');
      }
    },
    [dispatch],
  );

  return {
    onGetBot,
    ownerChatbot,
    loading,
  };
};
