import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { DataFetchFile, DataFetchLink, GetAdvanceSettingPayload, HistoryChat } from './type';
import { addQuestionAndAnswerTransaction, createSessionTransaction, deleteFileImportedTransaction, deleteQuestionAndAnswerTransaction, deleteURLTransaction, getAdvanceSettingTransaction, getAllFileTransaction, getAllQuestionAndAnswerTransaction, getAllURLTransaction, getBotInfoTransaction, getChatStreamingTransaction, getIncludesResources, importURLTransaction, uploadFileTransaction } from '@/repository/buildChatBot';
import { AddQuestionAndAnswerPayload, DeleteFileImportedPayload, DeleteQuestionAndAnswerPayload, DeleteURLPayload, GetAllFilePayload, GetAllQuestionAndAnswerPayload, GetAllURLPayload, GetBotInfoPayload, GetChatStreamingRequest, ImportURLPayload, UploadFilePayload } from '@/repository/buildChatBot/type';
import { loadFetchFile, loadFetchLink, setGenerateChatIntoListHistory, setNewChatIntoListHistory } from './buildChatBot.slice';

export const useBuildChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchLink, data, activeTab, session_id, listIncludesFile, loadingFetchFile, loadingChat, advanceSetting, includesResource, loadingQuestionAndAnswer } = useSelector((state: RootState) => state.buildChatBot, shallowEqual);
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
      await dispatch(getIncludesResources(payload))
       return await dispatch(getAllURLTransaction(payload));
    },
    [dispatch],
  );

  const onGetAllFile= useCallback(
    async (payload: GetAllFilePayload) => {
        await dispatch(getIncludesResources(payload))
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
       const res = await dispatch(getBotInfoTransaction(payload));
       return res
    },
    [dispatch],
  );

  const onGetAdvanceSetting = useCallback(
    async (payload: GetAdvanceSettingPayload) => {
       await dispatch(getAdvanceSettingTransaction(payload));
    },
    [dispatch],
  );

  const onGetIncludesSource= useCallback(
    async (payload: {bot_id: string}) => {
       await dispatch(getIncludesResources(payload));
    },
    [dispatch],
  );
  
  const onGetAllQuestionAndAnswer= useCallback(
    async (payload: GetAllQuestionAndAnswerPayload) => {
        await dispatch(getIncludesResources(payload))
       return await dispatch(getAllQuestionAndAnswerTransaction(payload));
    },
    [dispatch],
  );

  const onDeleteQuestionAndAnswer = useCallback(
    async (payload: DeleteQuestionAndAnswerPayload) => {
       return await dispatch(deleteQuestionAndAnswerTransaction(payload));
    },
    [dispatch],
  );

  const onAddQuestionAndAnswer = useCallback(
    async (payload: AddQuestionAndAnswerPayload) => {
       return await dispatch(addQuestionAndAnswerTransaction(payload));
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
    onGetInfoCurrentBot,
    onGetAdvanceSetting,
    advanceSetting,
    includesResource,
    onGetIncludesSource,
    onGetAllQuestionAndAnswer,
    onDeleteQuestionAndAnswer,
    onAddQuestionAndAnswer
  };
};
