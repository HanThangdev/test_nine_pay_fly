import { FormData, schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Image, notification } from 'antd';
import userApi from '@/repository/auth/register';
import { logoHaveTextImg } from '@/images/logo';
import { setEmailVerify } from '@/states/auth/auth.slice';
import { AppDispatch } from '@/states/store';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>();
  const dispatch = useDispatch<AppDispatch>();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    setLoading(true);
    const body = {
      full_name: formData.last_name + ' ' + formData.first_name,
      email: formData.email,
      password: formData.password,
    };

    try {
      await userApi.register(body);
      notification.success({
        message: 'You have successfully registered.',
        duration: 2,
      });
      dispatch(setEmailVerify(true));
      navigate('/auth/verify');
    } catch (error: any) {
      if(error?.response?.data.message == 'Email already registered.'){
        navigate('/auth/verify')
      }
      // notification.error({
      //   message: error?.response?.data.message ?? error?.message,
      // });

      setLoading(false);
    }
  });

  if (Boolean(token)) {
    return;
  }

  return (
    <>
      <div className="h-auto auth-background bg-cover min-h-screen shadow-default">
        <div className="h-full flex flex-wrap items-center px-[80px]">
          <div className="w-full border-stroke dark:border-strokedark lg:w-1/2 m-auto">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <div className="flex justify-center items-center">
                <Image
                  src={logoHaveTextImg}
                  alt="Chatfly"
                  className="!h-[60px]"
                  preview={false}
                />
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
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="h-[48px] w-full rounded-lg border border-stroke bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('first_name')}
                    />
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                      {errors.first_name?.message}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2.5 h-[21px] block font-medium text-white">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="h-[48px] w-full rounded-lg border border-stroke bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('last_name')}
                    />
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                      {errors.last_name?.message}
                    </div>
                  </div>
                </div>
                <div>
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
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                      {errors.email?.message}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 h-[21px] block font-medium text-white">
                    Password
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
                <div className="mb-5">
                  <input
                    type="submit"
                    disabled={isSubmitting || loading}
                    value="Create account"
                    className="w-full h-[48px] cursor-pointer rounded-[8px] bg-button-login text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-white">
                    Already have an account?{' '}
                    <Link
                      to="/auth/signin"
                      className="text-[#4AC1FF] text-[19px]"
                    >
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
