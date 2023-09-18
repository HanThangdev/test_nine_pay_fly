import { AdvancePayload } from "@/repository/buildChatBot/type";

export interface BuildChatBotState {
  data:  any | null;
  history: HistoryChat[];
  loading: boolean;
  session_id: string;
  activeTab: string;
  listIncludesLink: DataFetchLink[];
  fetchLink: DataFetchLink;
  loadingFetchLink: boolean;
  loadingChat: boolean;
  loadingFetchFile: boolean;
  listIncludesFile: DataFetchFile[],
  fetchFile: DataFetchFile;
  advanceSetting: AdvancePayload | null;
}

export interface DataFetchLink {
  num_token: number | null;
  progress: number;
  url: string;
}

export interface DataFetchFile {
  filename: string ;
  num_token: number;
  knowledge_base_id: string;
}

export interface HistoryChat {
  sender_type: "assistant" | "user";
  content: string;
}

export interface GetAdvanceSettingPayload {
  bot_id: string
}

