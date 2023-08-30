import { configureStore } from '@reduxjs/toolkit'
import buildChatBotReducer from '@/states/buildChatBot/buildChatBot.slice'


const store = configureStore({
  reducer: {
    buildChatBot: buildChatBotReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
