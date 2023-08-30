import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { buildChatBotState } from './type';
import { createBotTransaction } from '@/repository/buildChatBot';

const initialState: buildChatBotState = {
  data: null,
  loading: false,
  activeTab: "",
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
      console.log(state, action);
      state.data = action.payload.data
      return state;
    }
    );
    builder.addCase(createBotTransaction.rejected, (state) => state);
  },
});

export const { setActiveTab, resetStateBuild } = buildChatbotSlice.actions;

export default buildChatbotSlice.reducer;
