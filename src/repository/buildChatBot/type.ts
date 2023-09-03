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

export interface ScrapingURLPayload {
  bot_id: string;
  user_id: string;
  scrape_url: string;
  scrape_type: number;
  setValueProcess: (data:DataFetchLink) => void
}

export interface CustomField {
  key: string;
}

export interface BotDataResponse {
  id: string;
  user_id: number;
  bot_name: string;
  case_study: string;
  rules: string[];
  gpt_model_name: string;
  temperature: number;
  custom_prompt: string;
  bot_tone_type: number;
  custom_error_message: string;
  created_at: string;
  updated_at: string;
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
