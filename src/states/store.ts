import { configureStore } from '@reduxjs/toolkit';
import buildChatBotReducer from '@/states/buildChatBot/buildChatBot.slice';
import manageChatBotReducer from '@/states/manageBot/manageBot.slice';
import authReducer from '@/states/auth/auth.slice';

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    buildChatBot: buildChatBotReducer,
    manageBot: manageChatBotReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
