import { createSlice } from '@reduxjs/toolkit';
import { manageChatBotState } from './type';
import { deleteChatBotTransaction, getBotTransaction } from '@/repository/manageChatbot';

const initialState: manageChatBotState = {
  data: null,
  loading: false,
  ownerChatbot: []
};

export const manageChatBotSlice = createSlice({
  name: 'manageBot',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBotTransaction.pending, (state) => {
      state.loading = true
      return state
    });
    builder.addCase(getBotTransaction.fulfilled, (state, action: any) => {
      state.loading = false
      state.ownerChatbot = action.payload.data
      return state
    });
    builder.addCase(getBotTransaction.rejected, (state) => {
        state.loading = false
        return state
    });

    builder.addCase(deleteChatBotTransaction.pending, (state) => state);
    builder.addCase(deleteChatBotTransaction.fulfilled, (state) => state);
    builder.addCase(deleteChatBotTransaction.rejected, (state) => state);

  },
});

export const {  } = manageChatBotSlice.actions;

export default manageChatBotSlice.reducer;
