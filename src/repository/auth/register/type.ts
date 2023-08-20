export type RequestRegisterData = {
  user: {
    confirm_code: string
    created_at: string
    email: string
    id: number
    name: string
    password: string
    updated_at: string
    user_name: string
  }
  token: string
  token_type: string
}
