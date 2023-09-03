import * as yup from 'yup';

export const schema = yup.object({
  initial_message: yup.string().required(),
  display_name: yup.string(),
  chat_bubble_button_color: yup.string(),
  align_chat_bubble_button: yup.string(),
  auto_show_initial_message_after: yup.number(),
});

export type FormData = yup.InferType<typeof schema>;
