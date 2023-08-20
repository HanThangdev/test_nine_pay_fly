import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email address must be a valid email address.')
    .min(8, 'The email address must not be less than 8 characters.')
    .max(64, 'The email address must not exceed 64 characters.')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Email address must be a valid email address.',
    ),
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password must not be less than 8 characters.')
    .max(64, 'Password must not exceed 64 characters.')
    .matches(/^\S*$/, 'The password is in an invalid format.'),
});

export type FormData = yup.InferType<typeof schema>;
