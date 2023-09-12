import { GetAllConversationsResponse } from '@/repository/conversations/type';

export interface ConversationsState {
  loading: boolean;
  conversations: GetAllConversationsResponse[];
}
