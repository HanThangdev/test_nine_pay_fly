import { useNavigate, useParams } from 'react-router-dom';
import { FormData, schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
import Cookies from 'universal-cookie';

import api from '@/repository/auth/reset-password';

const ForgotPasswordVerify = () => {
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate();
  const { code } = useParams();
  const cookies = new Cookies();
  const tokenAuth = cookies.get('access_token');
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const verifyEmail = async () => {
    try {
      await api.verifyEmail(code);
      setIsSuccess(true);
    } catch (error: any) {
      navigate('/auth/signin');
    }
  };

  useEffect(() => {
    verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const onSubmit = handleSubmit(async (formData) => {
    setLoading(true);

    try {
      await api.updatePassword(code, formData.password);
      notification.success({
        message: 'You have update password successfully.',
      });
      setTimeout(() => {
        navigate('/auth/signin');
      }, 1000);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });

      setLoading(false);
    }
  });

  if (Boolean(tokenAuth)) {
    return;
  }

  return (
    <>
      <div className="h-full auth-background bg-cover min-h-screen shadow-default">
        <div className="h-full flex flex-wrap items-center px-[80px]">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5 border-stroke dark:border-strokedark">
            {isSuccess && (
              <form onSubmit={onSubmit} className="w-[396px] m-auto">
                <div>
                  <label className="mb-1 h-[21px] block font-medium text-white">
                    New Password
                  </label>
                  <p className="text-white text-[14px] mb-2">
                    Must include at least eight letter, number and special
                    character
                  </p>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="h-[48px] w-full rounded-lg border border-stroke bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('password')}
                    />
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                      {errors.password?.message}
                    </div>

                    <span className="absolute right-4 top-3 cursor-pointer">
                      {showPass ? (
                        <>
                          <div onClick={() => setShowPass(false)}>
                            <PiEyeSlashLight size={24} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div onClick={() => setShowPass(true)}>
                            <PiEyeLight size={24} />
                          </div>
                        </>
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="mb-2.5 h-[21px] block font-medium text-white">
                    Confirm your Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassConfirm ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="h-[48px] w-full rounded-lg border border-stroke bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('password_confirmation')}
                    />
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px] mb-3">
                      {errors.password_confirmation?.message}
                    </div>

                    <span className="absolute right-4 top-3 cursor-pointer">
                      {showPassConfirm ? (
                        <>
                          <div onClick={() => setShowPassConfirm(false)}>
                            <PiEyeSlashLight size={24} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div onClick={() => setShowPassConfirm(true)}>
                            <PiEyeLight size={24} />
                          </div>
                        </>
                      )}
                    </span>
                  </div>
                </div>
                <div className="mb-5 mt-4">
                  <input
                    type="submit"
                    disabled={isSubmitting || loading}
                    value="Update password"
                    className="w-full h-[48px] cursor-pointer rounded-[8px] bg-button-login text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordVerify;
