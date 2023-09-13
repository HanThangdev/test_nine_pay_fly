import { createSlice } from '@reduxjs/toolkit';
import { ChatState } from './type';
import {
  getChatStreamingTransaction,
} from '@/repository/buildChatBot';
import { LOADING_TEXT } from '@/constants';
import { createSessionChatTransaction } from '@/repository/chat';

const initialState: ChatState = {
  chatConversations:[],
  loading: false,
  session_id: '', 
  currentBot: {}
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setGenerateChatIntoListConversation: (state, action) => {
      const newConversation = Array.from(state.chatConversations).splice(
        0,
        state.chatConversations.length - 1,
      );
      state.chatConversations = [...newConversation, action.payload];
    },
    setNewChatIntoListConversation: (state, action) => {
      const newConversation = Array.from(state.chatConversations);
      state.chatConversations = [...newConversation, action.payload];
    },
  },
  extraReducers: (builder) => {
    
    // start getChatStreamingResponse

    builder.addCase(getChatStreamingTransaction.pending, (state) => {
      const listUpdateHistory = Array.from(state.chatConversations);
      state.chatConversations = [...listUpdateHistory, {content: LOADING_TEXT, sender_type: 'assistant'}];
      state.loading = true;
    });
    builder.addCase(getChatStreamingTransaction.fulfilled, (state) => {
      state.chatConversations = Array.from(state.chatConversations);
      state.loading = false;
    });
    builder.addCase(getChatStreamingTransaction.rejected, (state) => {
      let listUpdateHistory = Array.from(state.chatConversations);
      listUpdateHistory.pop()
      state.chatConversations = [...listUpdateHistory];
      state.loading = false;
    });

    // start createSession

    builder.addCase(createSessionChatTransaction.pending, (state) => {
      state.session_id = '';
      state.loading = true;
    });
    builder.addCase(createSessionChatTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.session_id = action.payload.data.session_id;
    });
    builder.addCase(createSessionChatTransaction.rejected, (state) => {
      state.loading = false;
      state.session_id = '';
    });

    // end createSession

    // end getChatStreamingResponse
    
  },
});

export const {
  setGenerateChatIntoListConversation,
  setNewChatIntoListConversation
} = chatSlice.actions;

export default chatSlice.reducer;