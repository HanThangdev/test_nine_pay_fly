
export interface DeleteFilePayload {
  knowledge_base_id: string
  bot_id: string
}

export interface GetStreamingPayload<T, D>{
  payload: T
  callBack: (data: D) => void
}

export interface GetConversationStreamingRequest {
  bot_id: string;
  message: string;
  session_id: string;
}

export interface CreateSessionResponse {
  session_id: string;
}