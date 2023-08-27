export interface BotPayload {
  user_id: number;
  bot_name: string;
  case_study: string;
  rules: string[];
  gpt_model_name: string;
  temperature: number;
  custom_prompt: string;
  bot_tone_type: number;
  custom_error_message: string;
}

export interface BotDataResponse {
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
