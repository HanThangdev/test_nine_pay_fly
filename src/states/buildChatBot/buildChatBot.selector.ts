import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { DataFetchFile, DataFetchLink } from './type';
import { createSessionTransaction, deleteURLTransaction, getChatStreamingTransaction, importURLTransaction, uploadFileTransaction } from '@/repository/buildChatBot';
import { DeleteURLPayload, GetChatStreamingRequest, ImportURLPayload, UploadFilePayload } from '@/repository/buildChatBot/type';
import { loadFetchLink, setGenerateChatIntoListHistory, setNewChatIntoListHistory } from './buildChatBot.slice';

export const useBuildChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchLink, data, activeTab, session_id } = useSelector((state: RootState) => state.buildChatBot, shallowEqual);
  const onStreamingDataTesting = useCallback(
    async (payload: GetChatStreamingRequest) => {
      const { message } = payload
      dispatch(setNewChatIntoListHistory(message))
      const callBack = (data: string) => {
        dispatch(setGenerateChatIntoListHistory(data))
      }
       await dispatch(getChatStreamingTransaction({payload, callBack}));
    },
    [dispatch],
  );

  const onStreamingUploadUrl = useCallback(
    async (payload: ImportURLPayload) => {
      const callBack = (data: DataFetchLink) => {
        dispatch(loadFetchLink(data))
      }
       const response = await dispatch(importURLTransaction({payload, callBack}));
       return response
    },
    [dispatch],
  );

  const onDeleteURL = useCallback(
    async (payload: DeleteURLPayload) => {
       await dispatch(deleteURLTransaction(payload));
    },
    [dispatch],
  );

  const onCreateSession = useCallback(
    async () => {
       await dispatch(createSessionTransaction());
    },
    [dispatch],
  );

  const onUploadFile = useCallback(
    async (payload: UploadFilePayload) => {
      const callBack = (data: DataFetchFile) => {
        dispatch(loadFetchLink(data))
      }
       await dispatch(uploadFileTransaction({payload, callBack}));
    },
    [dispatch],
  );

  
  return {
    fetchLink,
    data,
    onStreamingDataTesting,
    onStreamingUploadUrl,
    onCreateSession,
    onDeleteURL, 
    onUploadFile,
    activeTab,
    session_id
  };
};
