export interface GetAllConversationsResponse {
  chat_history_response: ChatHistoriesResponse[];
  created_at: string;
  bot_id: string;
  user_id: string;
  session_id: string;
}

export interface GetAllConversationsPayload {
  bot_id: string;
  date_from?: string;
  date_to?: string;
}

export interface ChatHistoriesResponse {
  sender_type: 'assistant' | 'user';
  content: string;
}

export interface GetConversationPdfPayload {
  conversation_history_response: GetAllConversationsResponse[];
  date_from: string;
  date_to: string;
}
