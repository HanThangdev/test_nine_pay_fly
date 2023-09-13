import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { HistoryChat } from './type';
import { createSessionChatTransaction, getChatStreamingTransaction } from '@/repository/chat';
import { GetConversationStreamingRequest } from '@/repository/chat/type';
import { setGenerateChatIntoListConversation, setNewChatIntoListConversation } from './chat.slice';

export const useConversationsChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { chatConversations, session_id } = useSelector((state: RootState) => state.chat, shallowEqual);
  const onStreamingConversation = useCallback(
    async (payload: GetConversationStreamingRequest) => {
      const { message } = payload
      dispatch(setNewChatIntoListConversation({
        sender_type:"user",
        content: message
      }))
      const callBack = (data: HistoryChat) => {
        dispatch(setGenerateChatIntoListConversation(data))
      }
       await dispatch(getChatStreamingTransaction({payload, callBack}));
    },
    [dispatch],
  );

  const onCreateSessionChat = useCallback(
    async () => {
       await dispatch(createSessionChatTransaction());
    },
    [dispatch],
  );
  
  return {
    chatConversations,
    onStreamingConversation,
    onCreateSessionChat,
    session_id
  };
};
