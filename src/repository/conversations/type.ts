export interface GetAllConversationsResponse {
  chat_history_response: ChatHistoriesResponse[];
}

export interface GetAllConversationsPayload {
  bot_id: string;
  date_from: string;
  date_to: string;
  order?: string
}

export interface ChatHistoriesResponse {
  sender_type: string;
  message: string;
  timestamp: string;
}
