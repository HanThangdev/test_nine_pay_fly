import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { buildChatBotState } from './type';
import { createBotTransaction, scrapingURLTransaction } from '@/repository/buildChatBot';
import { getStreamingResponse } from '@/repository/testingbot';

const initialState: buildChatBotState = {
  data: null,
  loading: false,
  activeTab: "",
  listIncludesLink: []
};

export const buildChatbotSlice = createSlice({
  name: 'buildChatbot',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    resetStateBuild: (state) => {
      state.data = null;
      state.activeTab= "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createBotTransaction.pending, (state) => state);
    builder.addCase(createBotTransaction.fulfilled, (state, action) => {
      state.data = action.payload.data
      return state;
    }
    );
    builder.addCase(createBotTransaction.rejected, (state) => state);

    builder.addCase(getStreamingResponse.pending, (state) => state);
    builder.addCase(getStreamingResponse.fulfilled, (state) => state);
    builder.addCase(getStreamingResponse.rejected, (state) => state);

    builder.addCase(scrapingURLTransaction.pending, (state) => state);
    builder.addCase(scrapingURLTransaction.fulfilled, (state, action) => {
      state.listIncludesLink.push(action.payload)
      return state
    } );
    builder.addCase(scrapingURLTransaction.rejected, (state) => state);
  },
});

export const { setActiveTab, resetStateBuild } = buildChatbotSlice.actions;

export default buildChatbotSlice.reducer;
