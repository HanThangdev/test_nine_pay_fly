import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuildChatBotState } from './type';
import { createBotTransaction, scrapingURLTransaction } from '@/repository/buildChatBot';
import { getStreamingResponse } from '@/repository/testingbot';

const initialState: BuildChatBotState = {
  data: null,
  loading: false,
  activeTab: "",
  listIncludesLink: [],
  fetchLink: {
    num_token: 0,
    progress: 0,
    url: ""
  },
};

export const buildChatbotSlice = createSlice({
  name: 'buildChatbot',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    resetStateBuild: (state) => initialState,

    loadFetchLink: (state, action) => {
      state.fetchLink= action.payload;
    },

    deletedListIncludes: (state, action) => {
      const newList = Array.from(state.listIncludesLink)
      newList.splice(action.payload, 1);
      state.listIncludesLink = action.payload;
    }
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
    builder.addCase(scrapingURLTransaction.fulfilled, (state, action: any) => {
      state.listIncludesLink.push(action.payload[0])
      return state
    } );
    builder.addCase(scrapingURLTransaction.rejected, (state) => state);
  },
});

export const { setActiveTab, resetStateBuild, loadFetchLink, deletedListIncludes } = buildChatbotSlice.actions;

export default buildChatbotSlice.reducer;
