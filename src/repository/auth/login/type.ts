export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse{
  access_token: string
  token_type: string
}

export interface LoginViaGooglePayload {
  access_token: string
}