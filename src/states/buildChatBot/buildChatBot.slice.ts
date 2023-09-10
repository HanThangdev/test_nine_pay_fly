import { createSlice } from '@reduxjs/toolkit';
import { BuildChatBotState } from './type';
import {
  createBotTransaction,
  createSessionTransaction,
  deleteURLTransaction,
  getAllURLTransaction,
  getBotInfoTransaction,
  getChatStreamingTransaction,
  scrapingURLTransaction,
  updateBotTransaction,
  uploadFileTransaction,
} from '@/repository/buildChatBot';
import { LOADING_TEXT } from '@/constants';

const initialState: BuildChatBotState = {
  data: null,
  loading: false,
  activeTab: '',
  session_id: '',
  listIncludesLink: [],
  listIncludesFile: [],
  history: [],
  loadingFetchLink: false,
  loadingFetchFile: false,
  loadingChat: false,
  fetchLink: {
    num_token: 0,
    progress: 0,
    url: '',
  },
  fetchFile: {
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

    resetStateBuild: () => initialState,

    setDataWhenUpdate: (state, action) => {
      state.data = action.payload
    },

    loadFetchLink: (state, action) => {
      state.fetchLink = action.payload;
    },

    loadFetchFile: (state, action) => {
      state.fetchFile = action.payload;
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
    // start updateBotTransaction
    builder.addCase(updateBotTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateBotTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(updateBotTransaction.rejected, (state) => {
      state.loading = false;
    });

    // end updateBotTransaction
    // start createSession

    builder.addCase(createSessionTransaction.pending, (state) => {
      state.session_id = '';
      state.loading = true;
    });
    builder.addCase(createSessionTransaction.fulfilled, (state, action) => {
      console.log(action.payload.data.session_id)
      state.loading = false;
      state.session_id = action.payload.data.session_id;
    });
    builder.addCase(createSessionTransaction.rejected, (state) => {
      state.loading = false;
      state.session_id = '';
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
      // state.listIncludesLink = 
      state.loadingFetchLink = false;
    });
    builder.addCase(getAllURLTransaction.rejected, (state) => {
      state.loadingFetchLink = false;
    });

    // end getAllURLTransaction

    // start getBotInfoTransaction

    builder.addCase(getBotInfoTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBotInfoTransaction.fulfilled, (state, action) => { 
      state.data = action.payload.data
      state.loading = false;
    });
    builder.addCase(getBotInfoTransaction.rejected, (state) => {
      state.loading = false;
      state.data = null
    });

    // end getBotInfoTransaction

    // start uploadFile

    builder.addCase(uploadFileTransaction.pending, (state) => {
      state.loadingFetchFile = true;
    });
    builder.addCase(uploadFileTransaction.fulfilled, (state, action) => { 
      state.listIncludesFile.push(action.payload[0]);
      state.loadingFetchFile = false;
    });
    builder.addCase(uploadFileTransaction.rejected, (state) => {
      state.loadingFetchFile = false;
      state.data = null
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