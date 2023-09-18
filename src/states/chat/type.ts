
export interface ChatState {
  chatConversations: HistoryChat[]
  loading: boolean,
  session_id: string,
  currentBot: any;
  isCollectedCustomer: boolean;
  theme: boolean;
}

export interface HistoryChat {
  sender_type: "assistant" | "user";
  content: string;
}
