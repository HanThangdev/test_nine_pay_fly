import { configureStore } from '@reduxjs/toolkit';
import buildChatBotReducer from '@/states/buildChatBot/buildChatBot.slice';
import manageChatBotReducer from '@/states/manageBot/manageBot.slice';
import authReducer from '@/states/auth/auth.slice';
import conversationReducer from "@/states/conversations/conversations.slice"
import pricingPlanReducer from '@/states/pricingPlan/pricingPlan.slice';

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    buildChatBot: buildChatBotReducer,
    manageBot: manageChatBotReducer,
    auth: authReducer,
    pricing: pricingPlanReducer,
    conversations: conversationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
