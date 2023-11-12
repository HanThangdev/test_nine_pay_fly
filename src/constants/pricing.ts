export const PRICINGVALUE= {
    FREE_MONTHLY: {
      billing_type: 1,
      subscription_time_type: 1
    },
    BASIC_MONTHLY: {
      billing_type: 2,
      subscription_time_type: 1
    },
    STARTER_MONTHLY: {
      billing_type: 3,
      subscription_time_type: 1
    },
    BUSINESS_MONTHLY: {
      billing_type: 5,
      subscription_time_type: 1
    },
    STANDARD_MONTHLY: {
      billing_type: 4,
      subscription_time_type: 1
    },
    FREE_YEARLY: {
      billing_type: 1,
      subscription_time_type: 2
    },
    BASIC_YEARLY: {
      billing_type: 2,
      subscription_time_type: 2
    },
    STARTER_YEARLY: {
      billing_type: 3,
      subscription_time_type: 2
    },
    BUSINESS_YEARLY: {
      billing_type: 5,
      subscription_time_type: 2
    },
    STANDARD_YEARLY: {
      billing_type: 4,
      subscription_time_type: 2
    },
  }

  export const PLAN_PRICE: {[key: number]: number} = {
    1: 0,
    2: 14,
    3: 39,
    4: 79,
    5: 279
  }