import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { BuildChatBotState, DataFetchLink } from './type';
import { deleteURLTransaction, getChatStreamingTransaction, scrapingURLTransaction } from '@/repository/buildChatBot';
import { DeleteURLPayload, GetChatStreamingRequest, ScrapingURLPayload } from '@/repository/buildChatBot/type';
import { loadFetchLink, setGenerateChatIntoListHistory, setNewChatIntoListHistory } from './buildChatBot.slice';

export const useBuildChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchLink, data } = useSelector((state: BuildChatBotState) => state, shallowEqual);
  const onStreamingDataTesting = useCallback(
    async (payload: GetChatStreamingRequest) => {
      const { message } = payload
      await dispatch(setNewChatIntoListHistory(message))
      const callBack = (data: string) => {
        dispatch(setGenerateChatIntoListHistory(data))
      }
       await dispatch(getChatStreamingTransaction({payload, callBack}));
    },
    [dispatch],
  );

  const onStreamingUploadUrl = useCallback(
    async (payload: ScrapingURLPayload) => {
      const callBack = (data: DataFetchLink) => {
        dispatch(loadFetchLink(data))
      }
       await dispatch(scrapingURLTransaction({payload, callBack}));
    },
    [dispatch],
  );

  const onDeleteURL = useCallback(
    async (payload: DeleteURLPayload) => {
       await dispatch(deleteURLTransaction(payload));
    },
    [dispatch],
  );
  
  return {
    fetchLink,
    data,
    onStreamingDataTesting,
    onStreamingUploadUrl,
    onDeleteURL
  };
};
