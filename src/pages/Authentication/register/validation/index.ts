import * as yup from 'yup';

const handleConfirmPassword = (refString: string) => {
  return yup
    .string()
    .required('Password confirm is required.')
    .oneOf([yup.ref(refString)], 'Password confirm is incorrect');
};

export const schema = yup.object({
  first_name: yup
    .string()
    .required('First Name is required')
    .min(1, 'First Name must not be less than 8 characters.')
    .max(255, 'First Name must not exceed 255 characters.')
    .matches(/^\s*\S[\s\S]*$/, 'First Name is in an invalid format.'),
  last_name: yup
    .string()
    .required('Last Name is required')
    .min(1, 'Last Name must not be less than 8 characters.')
    .max(255, 'Last Name must not exceed 255 characters.')
    .matches(/^\s*\S[\s\S]*$/, 'Last Name is in an invalid format.'),
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
  password_confirmation: handleConfirmPassword('password'),
});

export type FormData = yup.InferType<typeof schema>;
