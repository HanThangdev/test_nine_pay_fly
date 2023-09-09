import { DataFetchLink } from "@/states/buildChatBot/type";

export interface BotPayload {
  bot_name: string;
  case_study: string;
  gpt_model_name: string;
  custom_prompt: string;
  temperature: number;
  rules: string[];
  collect_customer_info: any;
}
export interface UpdateBotPayload {
  user_id: string;
  bot_name: string;
  case_study: string;
  gpt_model_name: string;
  custom_prompt: string;
  temperature: number;
  rules: string[];
  collect_customer_info: any;
  bot_tone_type?: number;
  custom_error_message?: string;
  id: string;
}
export interface ScrapingURLPayload {
  bot_id: string;
  user_id: string;
  scrape_url: string;
  scrape_type: number;
}

export interface GetStreamingPayload<T, D>{
  payload: T
  callBack: (data: D) => void
}

export interface CustomField {
  key: string;
}

export interface BotDataResponse {
  id: string;
  user_id: string;
  bot_name: string;
  case_study: string;
  rules: string[];
  gpt_model_name: string;
  temperature: number;
  custom_prompt: string;
  bot_tone_type: number;
  custom_error_message: string;
  created_at?: string;
  updated_at?: string;
}

export interface UpdateBotDataResponse {
  id: string;
  user_id: string;
  bot_name: string;
  case_study: string;
  rules: string[];
  gpt_model_name: string;
  temperature: number;
  custom_prompt: string;
  bot_tone_type: number;
  custom_error_message: string;
  created_at?: string;
  updated_at?: string;
}

export interface AdvancePayload {
  bot_id: string;
  initial_message: string;
  suggest_messages: [];
  theme: string;
  display_name: string;
  bot_avatar_url: string;
  chat_icon_url: string;
  chat_bubble_button_color: string;
  chat_message_color: string;
  align_chat_bubble_button: string;
  auto_show_initial_message_after: number;
}

export interface GetChatStreamingRequest {
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

export interface DeleteURLPayload {
  bot_id: string
  url: string
}

export interface GetAllURLPayload {
  bot_id: string
}

export interface GetAllURLResponse {
  url: Array<string>
}

export interface GetBotInfoPayload {
  bot_id: string
}

export interface UploadFilePayload {
  bot_id: string;
  file: File;
}