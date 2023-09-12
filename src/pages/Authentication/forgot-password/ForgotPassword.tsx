import { Link, useNavigate } from 'react-router-dom';
import { FormData, schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { notification } from 'antd';
import Cookies from 'universal-cookie';
import { setIsForgotPass, setEmailVerify } from '@/states/auth/auth.slice';

import api from '@/repository/auth/reset-password';
import { AppDispatch } from '@/states/store';
import { useDispatch } from 'react-redux';

const ForgotPassword = () => {
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    setLoading(true);

    try {
      await api.resetPassword(formData.email);
      dispatch(setIsForgotPass(true));
      dispatch(setEmailVerify(formData.email));
      navigate('/auth/verify');
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });

      setLoading(false);
    }
  });

  if (Boolean(token)) {
    return;
  }

  return (
    <>
      <div className="h-full auth-background bg-cover min-h-screen shadow-default">
        <div className="h-full flex flex-wrap items-center px-[80px]">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5 border-stroke dark:border-strokedark">
            <form onSubmit={onSubmit} className="w-[396px] m-auto">
              <div className="mt-[31px]">
                <label className="mb-2.5 h-[21px] block font-medium text-white">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[48px] w-full rounded-lg border border-stroke bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                    {...register('email')}
                  />
                  <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-4">
                <input
                  type="submit"
                  disabled={isSubmitting || loading}
                  value="Send reset password instructions"
                  className="w-full h-[48px] cursor-pointer rounded-[8px] bg-button-login text-white transition hover:bg-opacity-90"
                />
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-white">
                Already have an account?{' '}
                <Link to="/auth/signin" className="text-[#4AC1FF] text-[18px]">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
