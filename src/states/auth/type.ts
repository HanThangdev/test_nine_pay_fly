import { LoginResponse } from '@/repository/auth/login/type';

export interface AuthState {
  data: LoginResponse;
  loading: boolean;
  emailVerify: string;
  isForgotPass: boolean;
}

export interface DataFetchLink {
  num_token: number;
  progress: number;
  url: string;
}
