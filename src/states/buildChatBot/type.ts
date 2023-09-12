
export interface BuildChatBotState {
  data:  any | null;
  history: string[];
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

