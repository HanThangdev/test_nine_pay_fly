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
}

export interface CustomField {
  key: string,
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