import { FormData, schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Image, notification } from 'antd';
import userApi from '../../../repository/auth/register';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  const [loading, setLoading] = useState<boolean>();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    setLoading(true);

    try {
      await userApi.register(formData);
      notification.success({
        message: 'You have successfully registered.',
        duration: 2,
      });
      reset();
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.message ?? error?.message,
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
          <div className="w-full border-stroke dark:border-strokedark lg:w-1/2 m-auto">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <div className="flex justify-center items-center">
                <Image
                  src={'/logo.png'}
                  alt="Chatfly"
                  width={50}
                  height={50}
                  preview={false}
                />
                <h1 className="ml-2 text-center sm:text-[36px] text-2xl font-bold text-[#4AC1FF] ">
                  Chatfly
                </h1>
              </div>

              <p className="text-center mt-2 text-white">
                You'll be up & running in 2 minutes
              </p>
              <h2 className="text-center sm:text-[36px] text-2xl mt-[33px] text-white font-bold">
                Create your account
              </h2>

              <form onSubmit={onSubmit} className="w-[396px] m-auto">
                <div className="mt-6">
                  <label className="mb-2.5 h-[21px] block font-medium text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-[48px] w-full rounded-lg border border-stroke bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('email')}
                    />
                    <div className="text-[#CC0000] mt-1 min-h-[17px] text-[14px]">
                      {errors.email?.message}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 h-[21px] block font-medium text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="h-[48px] w-full rounded-lg border border-stroke bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('password')}
                    />
                    <div className="text-[#CC0000] mt-1 min-h-[17px] text-[14px]">
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
                <p className="text-white text-[15px] mb-[40px]">
                  Must include at least eight letter, number and special
                  character
                </p>
                <div className="mb-5">
                  <input
                    type="submit"
                    disabled={isSubmitting || loading}
                    value="Create account"
                    className="w-full h-[48px] cursor-pointer rounded-[8px] bg-button-login text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="dark:text-white">
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-primary">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full hidden lg:block lg:w-1/2 m-auto">
            <div className="right-register-background bg-contain m-auto w-[474px] h-[516px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
