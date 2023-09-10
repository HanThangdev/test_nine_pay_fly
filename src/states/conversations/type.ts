import { ChatHistoriesResponse } from "@/repository/conversations/type";

export interface ConversationsState {
  loading: boolean;
  conversations: ChatHistoriesResponse[];
}

