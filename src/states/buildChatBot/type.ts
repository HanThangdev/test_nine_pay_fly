export interface BuildChatBotState {
  data: any | null;
  loading: boolean;
  activeTab: string;
  listIncludesLink: DataFetchLink[];
  fetchLink: DataFetchLink;
}

export interface DataFetchLink {
  num_token: number;
  progress: number;
  url: string;
}
