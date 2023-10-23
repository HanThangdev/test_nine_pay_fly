import { LoginResponse } from '@/repository/auth/login/type';

export interface AuthState {
  data: LoginResponse;
  loading: boolean;
  emailVerify: string;
  isForgotPass: boolean;
  email: string;
  is_active: boolean
}

export interface DataFetchLink {
  num_token: number;
  progress: number;
  url: string;
}

export interface IBaseAPIRes {
  status?: string;
}

export interface IErrorAPIRes extends IBaseAPIRes {
  reason: string;
  errors: IError[];
}

export interface IError {
  field: string;
  code: string;
}