import { string } from "yup"

export interface UpgradeBillingPayload{
  user_id: string,
  billing_type: string
}

export interface UpgradeBillingResponse {
    id: string,
    user_id: string,
    is_active: boolean,
    billing_type: number,
    expires_at: Date,
}
