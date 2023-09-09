import * as yup from 'yup';

const handleConfirmPassword = (refString: string) => {
  return yup
    .string()
    .required('Password confirm is required.')
    .oneOf([yup.ref(refString)], 'Password confirm is incorrect');
};

export const schema = yup.object({
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password must not be less than 8 characters.')
    .max(64, 'Password must not exceed 64 characters.')
    .matches(/^\S*$/, 'The password is in an invalid format.'),
  password_confirmation: handleConfirmPassword('password'),
});

export type FormData = yup.InferType<typeof schema>;
