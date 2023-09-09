import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .required('Password recovery requires an email')
    .email('Email address must be a valid email address.')
    .min(8, 'The email address must not be less than 8 characters.')
    .max(64, 'The email address must not exceed 64 characters.')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Email address must be a valid email address.',
    ),
});

export type FormData = yup.InferType<typeof schema>;
