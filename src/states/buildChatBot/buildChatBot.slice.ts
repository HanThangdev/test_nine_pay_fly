import { createSlice } from '@reduxjs/toolkit';
import { BuildChatBotState } from './type';
import {
  addQuestionAndAnswerTransaction,
  createBotTransaction,
  createSessionTransaction,
  deleteQuestionAndAnswerTransaction,
  deleteURLTransaction,
  getAdvanceSettingTransaction,
  getAllFileTransaction,
  getAllQuestionAndAnswerTransaction,
  getAllURLTransaction,
  getBotInfoTransaction,
  getChatStreamingTransaction,
  getIncludesResources,
  getLinkIntegrationMSTeamTransaction,
  getTokenTelegramTransaction,
  importURLTransaction,
  updateBotTransaction,
  uploadFileTransaction,
} from '@/repository/buildChatBot';
import { LOADING_TEXT } from '@/constants';
import uuid from 'react-uuid';

const initialState: BuildChatBotState = {
  data: null,
  loading: false,
  activeTab: '',
  session_id: uuid(),
  listIncludesLink: [],
  listIncludesFile: [],
  listIncludesQandA: [],
  history: [],
  loadingFetchLink: false,
  loadingFetchFile: false,
  loadingQuestionAndAnswer: false,
  loadingChat: false,
  advanceSetting: null,
  includesResource: null,
  num_message_left: null,
  fetchLink: {
    num_token: null,
    progress: 0,
    url: '',
  },
  fetchFile: {
    num_token: 0,
    filename: '',
    knowledge_base_id: '',
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

    resetHistoryChatTest: (state) => {
      state.history = [];
    },

    setDataWhenUpdate: (state, action) => {
      state.data = action.payload;
    },

    loadFetchLink: (state, action) => {
      state.fetchLink = action.payload;
    },

    loadFetchFile: (state, action) => {
      state.fetchFile = action.payload;
    },

    deletedListIncludes: (state, action) => {
      const newList = Array.from(state.listIncludesLink).filter((_, index) => {
        return index !== action.payload;
      });
      state.listIncludesLink = newList;
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
      state.history = [
        ...listUpdateHistory,
        { content: LOADING_TEXT, sender_type: 'assistant' },
      ];
      state.loadingChat = true;
    });
    builder.addCase(getChatStreamingTransaction.fulfilled, (state) => {
      state.history = Array.from(state.history);
      state.loadingChat = false;
      state.num_message_left = state.num_message_left ? state.num_message_left-1 : state.num_message_left;
    });
    builder.addCase(getChatStreamingTransaction.rejected, (state) => {
      let listUpdateHistory = Array.from(state.history);
      listUpdateHistory.pop();
      state.history = [...listUpdateHistory];
      state.loadingChat = false;
    });

    // end getChatStreamingResponse
    // start importURLTransaction

    builder.addCase(importURLTransaction.pending, (state) => {
      state.loadingFetchLink = true;
      state.fetchLink = {
        num_token: 0,
        progress: 0,
        url: '',
      };
    });
    builder.addCase(importURLTransaction.fulfilled, (state, action: any) => {
      state.loadingFetchLink = false;
      state.fetchLink = {
        num_token: null,
        progress: 100,
        url: '',
      };
    });
    builder.addCase(importURLTransaction.rejected, (state) => {
      state.loadingFetchLink = false;
      state.fetchLink = {
        num_token: null,
        progress: 0,
        url: '',
      };
    });

    // end importURLTransaction
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
    builder.addCase(getAllURLTransaction.fulfilled, (state, action: any) => {
      state.listIncludesLink = action.payload.data;
      state.loadingFetchLink = false;
    });
    builder.addCase(getAllURLTransaction.rejected, (state) => {
      state.loadingFetchLink = false;
    });

    // end getAllURLTransaction

    // start getBotInfoTransaction

    builder.addCase(getBotInfoTransaction.pending, (state) => {
      state.data=null
      state.loading = true;
      state.num_message_left = null
    });
    builder.addCase(getBotInfoTransaction.fulfilled, (state, action) => {
      state.num_message_left = action.payload.data.num_message_left;
      state.data = action.payload.data;
      state.session_id = uuid();
      state.loading = false;
    });
    builder.addCase(getBotInfoTransaction.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.num_message_left = null
    });

    // end getBotInfoTransaction

    // start uploadFile

    builder.addCase(uploadFileTransaction.pending, (state) => {
      state.loadingFetchFile = true;
    });
    builder.addCase(uploadFileTransaction.fulfilled, (state) => {
      state.loadingFetchFile = false;
    });
    builder.addCase(uploadFileTransaction.rejected, (state) => {
      state.loadingFetchFile = false;
    });

    // end uploadFile

    // start getAllFileTransaction

    builder.addCase(getAllFileTransaction.pending, (state) => {
      state.loadingFetchFile = true;
    });
    builder.addCase(getAllFileTransaction.fulfilled, (state, action: any) => {
      state.listIncludesFile = action.payload.data;
      state.loadingFetchFile = false;
    });
    builder.addCase(getAllFileTransaction.rejected, (state) => {
      state.loadingFetchFile = false;
    });

    // end getAllFileTransaction

    // start getAdvanceSettingTransaction

    builder.addCase(getAdvanceSettingTransaction.pending, (state) => {
      state.advanceSetting = null
    });
    builder.addCase(
      getAdvanceSettingTransaction.fulfilled,
      (state, action: any) => {
        state.advanceSetting = action.payload.data;
      },
    );
    builder.addCase(getAdvanceSettingTransaction.rejected, (state) => state);

    // end getAdvanceSettingTransaction

    // start getIncludesResources

    builder.addCase(getIncludesResources.pending, (state) => {
      state.includesResource = null
    });
    builder.addCase(
      getIncludesResources.fulfilled,
      (state, action: any) => {
        state.includesResource = action.payload.data;
      },
    );
    builder.addCase(getIncludesResources.rejected, (state) => state);

    // end getIncludesResources

    // start addQuestionAndAnswerTransaction

    builder.addCase(addQuestionAndAnswerTransaction.pending, (state) => {
      state.loadingQuestionAndAnswer = true;
    });
    builder.addCase(addQuestionAndAnswerTransaction.fulfilled, (state) => {
      state.loadingQuestionAndAnswer = false;
    });
    builder.addCase(addQuestionAndAnswerTransaction.rejected, (state) => {
      state.loadingQuestionAndAnswer = false;
    });

    // end addQuestionAndAnswerTransaction

    // start deleteQuestionAndAnswerTransaction

    builder.addCase(deleteQuestionAndAnswerTransaction.pending, (state) => {
      // state.loadingQuestionAndAnswer = true;
    });
    builder.addCase(deleteQuestionAndAnswerTransaction.fulfilled, (state) => {
      // state.loadingQuestionAndAnswer = false;
    });
    builder.addCase(deleteQuestionAndAnswerTransaction.rejected, (state) => {
      // state.loadingQuestionAndAnswer = false;
    });

    // end deleteQuestionAndAnswerTransaction

    // start getAllQuestionAndAnswerTransaction

    builder.addCase(getAllQuestionAndAnswerTransaction.pending, (state) => {
      // state.loadingQuestionAndAnswer = true;
    });
    builder.addCase(getAllQuestionAndAnswerTransaction.fulfilled, (state, action: any) => {
      // state.loadingQuestionAndAnswer = false;
      state.listIncludesQandA = action.payload.data;
    });
    builder.addCase(getAllQuestionAndAnswerTransaction.rejected, (state) => {
      // state.loadingQuestionAndAnswer = false;
    });

    // end getAllQuestionAndAnswerTransaction

    // start getTokenTelegramTransaction

    builder.addCase(getTokenTelegramTransaction.pending, (state) => {
    });
    builder.addCase(getTokenTelegramTransaction.fulfilled, (state, action: any) => {
    });
    builder.addCase(getTokenTelegramTransaction.rejected, (state) => {
    });

    // end getTokenTelegramTransaction

    // start getLinkIntegrationMSTeamTransaction

    builder.addCase(getLinkIntegrationMSTeamTransaction.pending, (state) => {
    });
    builder.addCase(getLinkIntegrationMSTeamTransaction.fulfilled, (state, action: any) => {
    });
    builder.addCase(getLinkIntegrationMSTeamTransaction.rejected, (state) => {
    });

    // end getLinkIntegrationMSTeamTransaction
  },
});

export const {
  setActiveTab,
  resetStateBuild,
  loadFetchLink,
  loadFetchFile,
  deletedListIncludes,
  setGenerateChatIntoListHistory,
  setNewChatIntoListHistory,
  setDataWhenUpdate,
  resetHistoryChatTest,
} = buildChatbotSlice.actions;

export default buildChatbotSlice.reducer;
