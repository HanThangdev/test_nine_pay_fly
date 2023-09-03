export interface ManageDataResponse{
  case_study: number,
  id: string,
  is_activate: boolean,
  updated_by: string,
  updated_at: string,
  user_id: string,
  bot_name: string ,
  collect_customer_info: any,
  created_by: string,
  created_at: string
}

export interface DeleteChatbotPayload {
  bot_id: string;
}