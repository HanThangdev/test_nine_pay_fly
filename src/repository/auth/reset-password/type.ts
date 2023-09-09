export interface ResetPasswordPayload {
  email: string
}

export interface UpdatePasswordPayload {
  password: string
  password_confirmation: string
}
