
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
  listIncludesFile: any,
  fetchFile: DataFetchFile;
}

export interface DataFetchLink {
  num_token: number | null;
  progress: number;
  url: string;
}

export interface DataFetchFile {
  num_token: number | null;
  progress: number;
  url: string;
}

