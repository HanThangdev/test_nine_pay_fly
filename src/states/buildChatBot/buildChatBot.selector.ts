import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { DataFetchFile, DataFetchLink, HistoryChat } from './type';
import { createSessionTransaction, deleteFileImportedTransaction, deleteURLTransaction, getAllFileTransaction, getAllURLTransaction, getBotInfoTransaction, getChatStreamingTransaction, importURLTransaction, uploadFileTransaction } from '@/repository/buildChatBot';
import { DeleteFileImportedPayload, DeleteURLPayload, GetAllFilePayload, GetAllURLPayload, GetBotInfoPayload, GetChatStreamingRequest, ImportURLPayload, UploadFilePayload } from '@/repository/buildChatBot/type';
import { loadFetchFile, loadFetchLink, setGenerateChatIntoListHistory, setNewChatIntoListHistory } from './buildChatBot.slice';

export const useBuildChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchLink, data, activeTab, session_id, listIncludesFile, loadingFetchFile, loadingChat } = useSelector((state: RootState) => state.buildChatBot, shallowEqual);
  const onStreamingDataTesting = useCallback(
    async (payload: GetChatStreamingRequest) => {
      const { message } = payload
      dispatch(setNewChatIntoListHistory({
        sender_type:"user",
        content: message
      }))
      const callBack = (data: HistoryChat) => {
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
        dispatch(loadFetchFile(data))
      }
       return await dispatch(uploadFileTransaction({payload, callBack}));
    },
    [dispatch],
  );

  const onGetAllUrl = useCallback(
    async (payload: GetAllURLPayload) => {
       return await dispatch(getAllURLTransaction(payload));
    },
    [dispatch],
  );

  const onGetAllFile= useCallback(
    async (payload: GetAllFilePayload) => {
       return await dispatch(getAllFileTransaction(payload));
    },
    [dispatch],
  );

  const onDeleteFileImported = useCallback(
    async (payload: DeleteFileImportedPayload) => {
       return await dispatch(deleteFileImportedTransaction(payload));
    },
    [dispatch],
  );

  const onGetInfoCurrentBot = useCallback(
    async (payload: GetBotInfoPayload) => {
       await dispatch(getBotInfoTransaction(payload));
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
    session_id,
    listIncludesFile,
    loadingFetchFile,
    onGetAllUrl,
    onGetAllFile,
    onDeleteFileImported,
    loadingChat,
    onGetInfoCurrentBot
  };
};
