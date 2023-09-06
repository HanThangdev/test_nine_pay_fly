import { createSlice } from '@reduxjs/toolkit';
import { BuildChatBotState } from './type';
import {
  createBotTransaction,
  createSessionTransaction,
  deleteURLTransaction,
  getAllURLTransaction,
  getChatStreamingTransaction,
  scrapingURLTransaction,
} from '@/repository/buildChatBot';
import { LOADING_TEXT } from '@/constants';

const initialState: BuildChatBotState = {
  data: null,
  loading: false,
  activeTab: '',
  session: '',
  listIncludesLink: [],
  history: [],
  loadingFetchLink: false,
  loadingChat: false,
  fetchLink: {
    num_token: 0,
    progress: 0,
    url: '',
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

    setDataWhenUpdate: (state, action) => {
      state.data = action.payload
    },

    loadFetchLink: (state, action) => {
      state.fetchLink = action.payload;
    },

    deletedListIncludes: (state, action) => {
      const newList = Array.from(state.listIncludesLink);
      newList.splice(action.payload, 1);
      state.listIncludesLink = action.payload;
    },

    setGenerateChatIntoListHistory: (state, action) => {
      const newHistory = Array.from(state.history).splice(
        0,
        state.history.length - 1,
      );
      state.history = [...newHistory, action.payload];
    },

    setNewChatIntoListHistory: (state, action) => {
      const newHistory = Array.from(state.history);
      state.history = [...newHistory, action.payload];
    },
  },
  extraReducers: (builder) => {
    // start createBotTransaction
    builder.addCase(createBotTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBotTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(createBotTransaction.rejected, (state) => {
      state.loading = false;
    });

    // end createBotTransaction
    // start createSession

    builder.addCase(createSessionTransaction.pending, (state) => {
      state.session = '';
      state.loading = true;
    });
    builder.addCase(createSessionTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.session = action.payload.data.data.session_id;
    });
    builder.addCase(createSessionTransaction.rejected, (state) => {
      state.loading = false;
      state.session = '';
    });

    // end createSession
    // start getChatStreamingResponse

    builder.addCase(getChatStreamingTransaction.pending, (state) => {
      const listUpdateHistory = Array.from(state.history);
      state.history = [...listUpdateHistory, LOADING_TEXT];
      state.loadingChat = true;
    });
    builder.addCase(getChatStreamingTransaction.fulfilled, (state) => {
      state.history = Array.from(state.history);
      state.loadingChat = false;
    });
    builder.addCase(getChatStreamingTransaction.rejected, (state) => {
      state.loadingChat = false;

    });

    // end getChatStreamingResponse
    // start scrapingURLTransaction

    builder.addCase(scrapingURLTransaction.pending, (state) => {
      state.loadingFetchLink = true;
    });
    builder.addCase(scrapingURLTransaction.fulfilled, (state, action: any) => {
      state.listIncludesLink.push(action.payload[0]);
      state.loadingFetchLink = false;
    });
    builder.addCase(scrapingURLTransaction.rejected, (state) => {
      state.loadingFetchLink = false;
    });

    // end scrapingURLTransaction
    // start deleteURLTransaction

    builder.addCase(deleteURLTransaction.pending, (state) => {
      state.loadingFetchLink = true;
    });
    builder.addCase(deleteURLTransaction.fulfilled, (state) => { 
      state.loadingFetchLink = false;
    });
    builder.addCase(deleteURLTransaction.rejected, (state) => {
      state.loadingFetchLink = false;
    });

    // end deleteURLTransaction
    // start getAllURLTransaction

    builder.addCase(getAllURLTransaction.pending, (state) => {
      state.loadingFetchLink = true;
    });
    builder.addCase(getAllURLTransaction.fulfilled, (state, action) => { 
      console.log(action)
      // state.listIncludesLink = 
      state.loadingFetchLink = false;
    });
    builder.addCase(getAllURLTransaction.rejected, (state) => {
      state.loadingFetchLink = false;
    });

    // end getAllURLTransaction
  },
});

export const {
  setActiveTab,
  resetStateBuild,
  loadFetchLink,
  deletedListIncludes,
  setGenerateChatIntoListHistory,
  setNewChatIntoListHistory,
  setDataWhenUpdate,
} = buildChatbotSlice.actions;

export default buildChatbotSlice.reducer;