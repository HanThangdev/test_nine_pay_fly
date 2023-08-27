import * as yup from 'yup';

export const schema = yup.object({
  bot_name: yup.string().required('Name is required'),
  case_study: yup.string().required(),
  rules: yup.array().required(),
  gpt_model_name: yup.string().required(),
  temperature: yup.number().required(),
  custom_prompt: yup.string().required(),
  bot_tone_type: yup.number().required(),
  custom_error_message: yup.string().required(),
});

export type FormData = yup.InferType<typeof schema>;
