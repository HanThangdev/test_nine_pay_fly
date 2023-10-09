import { DataFetchLink } from '@/states/auth/type';
import { DataFetchFile } from '@/states/buildChatBot/type';

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
export interface ImportURLPayload {
  bot_id: string;
  user_id: string;
  scrape_url: string;
  scrape_type: number;
}

export interface GetStreamingPayload<T, D> {
  payload: T;
  callBack: (data: D) => void;
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
  num_message_left: number;
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
  bot_id: string;
  url: string;
}

export interface GetAllURLPayload {
  bot_id: string;
}

export interface GetAllURLResponse {
  url: DataFetchLink[];
}

export interface GetBotInfoPayload {
  bot_id: string;
}

export interface UploadFilePayload {
  bot_id: string;
  file: File;
}

export interface DeleteFileImportedPayload {
  bot_id: string;
  knowledge_base_id: string;
}

export interface DeleteFileImportedResponse {
  bot_id: string;
  file: File;
}

export interface GetAllFilePayload {
  bot_id: string;
}

export interface GetAllFileResponse {
  file: DataFetchFile[];
}

export interface DeleteFilePayload {
  knowledge_base_id: string;
  bot_id: string;
}

export interface GetIncludesResourcesPayload {
  bot_id: string;
}

export interface GetIncludesResourcesResponse {
  resource: GetIncludesResourcesItem[];
  total_token: number;
}

export interface GetIncludesResourcesItem {
  type: string;
  token: number;
  number_of_resources: number;
}

export interface AddQuestionAndAnswerPayload {
  bot_id: string;
  user_id: string;
  question_answers: AddQuestionAndAnswerItem[];
}
export interface AddQuestionAndAnswerItem {
  question: string;
  answers: string;
}
export interface AddQuestionAndAnswerResponse {
  bot_id: string;
  id: string;
  question: string;
  answer: string;
  created_at: string;
}

export interface GetAllQuestionAndAnswerPayload {
  bot_id: string;
}

export interface GetAllQuestionAndAnswerResponse {
  file: DataQuestionAndAnswerItem[];
}

export interface DataQuestionAndAnswerItem {
  bot_id: string;
  id: string;
  question: string;
  answer: string;
  created_at: string;
  num_token: number;
}

export interface DeleteQuestionAndAnswerPayload {
  question_answer_id: string;
  bot_id: string;
}

export interface GetTokenTelegramPayload {
  bot_id: string;
}

export interface GetTokenTelegramResponse {
  message_code: number;
  message: string;
  data: string;
}

export interface GetBotEvaluationStrongPayload {
  bot_id: string;
}

export interface GetBotEvaluationStrongResponse {
  is_strong_question_answer: boolean;
  is_strong_rules: boolean;
  is_strong_token: boolean;
}

export interface GetLinkIntegrationMSTeamPayload {
  bot_id: string;
}

export interface GetLinkIntegrationMSTeamResponse {
  message_code: number;
  message: string;
  data: string;
}

export interface UpdateListDomainPayload {
  bot_id: string;
  domain: string[];
}
