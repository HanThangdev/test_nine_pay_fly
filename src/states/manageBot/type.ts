export interface manageChatBotState {
  data: any | null;
  loading: boolean;
  ownerChatbot: ResponseManageChatbot[];
}

export interface ResponseManageChatbot{
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