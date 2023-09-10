export interface GetAllConversationsResponse {
  chat_history_response: ChatHistoriesResponse[];
}

export interface GetAllConversationsPayload {
  bot_id: string;
  user_id: string;
  date_from: string;
  date_to: string;
}

export interface ChatHistoriesResponse {
  sender_type: string;
  message: string;
  timestamp: string;
}
