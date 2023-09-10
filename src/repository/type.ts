export interface SuccessResponse<T> {
  data: T
  message: string
  status_code: number
}
export interface ErrorResponse<T> {
  data: T
  message: string
  status_code: number
}

export interface PaginationResponse<T> {
  total: number
  per_page: number
  current_page: number
  last_page: number
  next_page: number | null
  previous_page: number | null
  result: T[]
}

export interface ErrorMessageResponse {
  message: string
  message_code: number
}
