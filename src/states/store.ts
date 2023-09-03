import { configureStore } from '@reduxjs/toolkit'
import buildChatBotReducer from '@/states/buildChatBot/buildChatBot.slice'
import manageChatBotReducer  from '@/states/manageBot/manageBot.slice'


const store = configureStore({
  reducer: {
    buildChatBot: buildChatBotReducer,
    manageBot: manageChatBotReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
