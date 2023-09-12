import { createSlice } from '@reduxjs/toolkit';
import { ConversationsState } from './type';
import { getAllConversations } from '@/repository/conversations';

const initialState: ConversationsState = {
  conversations: "",
  loading: false,
};

export const buildChatbotSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // start getAllConversations
    builder.addCase(getAllConversations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllConversations.fulfilled, (state, action) => {
      state.conversations = action.payload.data.data;
      state.loading = false;
    });
    builder.addCase(getAllConversations.rejected, (state) => {
      state.loading = false;
    });

    // end getAllConversations
    
  },
});

export const {
  
} = buildChatbotSlice.actions;

export default buildChatbotSlice.reducer;