export interface GetStreamingResponseRequest {
  bot_id: string;
  message: string;
  session_id: string;
  user_id: string;
}

export interface CreateSessionResponse {
  session_id: string;
}

export interface GetNormalResponseRequest {
  message: string;
}
