import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { buildChatBotState } from './type';
import { createBotTransaction } from '@/repository/buildChatBot';

const initialState: buildChatBotState = {
  data: null,
  loading: false,
};

export const buildChatBotSlice = createSlice({
  name: 'managesBot',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBotTransaction.pending, (state) => state);
    builder.addCase(createBotTransaction.fulfilled, (state, action) => {
      state.data = action.payload.data
      return state;
    }
    );
    builder.addCase(createBotTransaction.rejected, (state) => state);
  },
});

export const {  } = buildChatBotSlice.actions;

export default buildChatBotSlice.reducer;
