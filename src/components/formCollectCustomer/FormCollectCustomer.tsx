import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import IconClose from '../IconClose/IconClose';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';

interface FormCollectCustomerProps {
  field: CustomerInfo;
  toggleForm: () => void;
}

interface CustomerInfo {
  [key: string]: boolean;
}

type FormValues = Record<string, string>;

export default function FormCollectCustomer({
  field,
  toggleForm
}: FormCollectCustomerProps) {
  const {numberShowing, ...collectInfo} = field
  return (
    <div className="px-10 w-[60%] border-solid rounded-2xl border border-indigo-500 p-4">
      <CollectForm field={collectInfo} toggleForm={toggleForm} />
    </div>
  );
}



function CollectForm({ field, toggleForm }: FormCollectCustomerProps) {

  const schema = yup.object().shape(
    Object.keys(field).reduce((acc: any, key) => {
      if (field[key]) {
        acc[key] = yup.string().required('Trường này là bắt buộc');
      }
      return acc;
    }, {})
  );

  const { register, handleSubmit, formState: { errors }, getFieldState  } = useForm<FormValues>({
    resolver: async (data) => {
      try {
        await schema.validate(data, { abortEarly: false });
        return {
          values: data,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors?.inner?.reduce((acc: any, error: any) => {
            acc[error.path] = error.message;
            return acc;
          }, {}),
        };
      }
    },
  });
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = handleSubmit((data) => toggleForm());

  return (
    <div>
      <form onSubmit={onSubmit} className="relative">
        <div className="flex justify-end cursor-pointer" onClick={toggleForm}>
          <IconClose />
        </div>
        {!isEmptyObjectOrArray(field) &&
          Object.keys(field).map((key: any) => {
            if (field[key]) {
              return (
                <div className="mb-8" key={key}>
                  <label
                    className={`block font-bold text-sm mb-2 ${
                      errors[key] ? 'text-red-400' : 'text-black'
                    }`}
                  >
                    {key}
                  </label>
                  <input
                    type="text"
                    // name={`${key}`}
                    placeholder={key}
                    className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${
                      errors[key]
                        ? 'text-red-300 border-red-400'
                        : 'text-black border-purple-400'
                    }`}
                    {...register(key.toString(), { required: true })}
                  />
                  {getFieldState(`${key}`).invalid && (
                    <p className="text-[#C9352B] text-sm mt-2">
                      {`${key} is required`}
                    </p>
                  )}
                </div>
              );
            } else {
              return null;
            }
          })}

        <button className="inline-block bg-[#4ac1ff] text-white rounded shadow py-2 px-5 text-sm">
          Submit
        </button>
      </form>
    </div>
  );
}
