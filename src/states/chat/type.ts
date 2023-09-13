
export interface ChatState {
  chatConversations: HistoryChat[]
  loading: boolean,
  session_id: string,
  currentBot: any;
}

export interface HistoryChat {
  sender_type: "assistant" | "user";
  content: string;
}
