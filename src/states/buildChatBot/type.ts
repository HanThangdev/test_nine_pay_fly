
export interface BuildChatBotState {
  data:  any | null;
  history: string[];
  loading: boolean;
  session: string;
  activeTab: string;
  listIncludesLink: DataFetchLink[];
  fetchLink: DataFetchLink;
  loadingFetchLink: boolean;
  loadingChat: boolean;
}

export interface DataFetchLink {
  num_token: number;
  progress: number;
  url: string;
}
