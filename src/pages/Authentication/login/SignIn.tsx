import { Link, useParams } from 'react-router-dom';
import { FormData, schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { notification, Image, Checkbox } from 'antd';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { loginTransaction } from '@/repository/auth/login';
import { API_STATUS } from '@/constants';
import { useManageChatbot } from '@/states/manageBot/manageBot.selector';
import { userApi } from '@/repository/auth/login';

const SignIn = () => {
  const { code } = useParams();
  const [showPass, setShowPass] = useState(false);
  const { loading } = useSelector((state: RootState) => state.auth);

  const { onGetBot } = useManageChatbot();
  const dispatch = useDispatch<AppDispatch>();
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const verifyEmail = async () => {
    const res = await userApi.verifyEmail(code);
    const cookies = new Cookies();
    cookies.set('access_token', res.data.data.access_token, { path: '/' });
    const isLogin = true;
    await onGetBot(isLogin);
  };

  useEffect(() => {
    if (code) {
      verifyEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const onSubmit = handleSubmit(async (formData) => {
    const dataForm = new URLSearchParams();
    dataForm.append('grant_type', 'password');
    dataForm.append('username', formData.email);
    dataForm.append('password', formData.password);
    try {
      const { meta } = await dispatch(loginTransaction(dataForm));

      if (meta.requestStatus == API_STATUS.REJECTED) {
        return;
      }

      notification.success({
        message: 'You have successfully logged in.',
      });

      const isLogin = true;
      await onGetBot(isLogin);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.message,
      });
    }
  });

  if (Boolean(token)) {
    return;
  }

  return (
    <>
      <div className="h-full auth-background bg-cover min-h-screen shadow-default">
        <div className="h-full flex flex-wrap items-center px-[80px]">
          <div className="w-full border-stroke dark:border-strokedark lg:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <div className="flex justify-center items-center">
                <Image
                  src={'/src/images/logo.png'}
                  alt="Chatfly"
                  className="!h-[60px]"
                  preview={false}
                />
              </div>
              <h2 className="text-center sm:text-[36px] text-2xl mt-[33px] text-white font-bold">
                Welcome back!
              </h2>
              <p className="text-center mt-4 text-white">
                Do you have an account yet?{' '}
                <span className="text-[19px] text-[#4AC1FF]">
                  <Link to="/auth/signup">Create account</Link>
                </span>
              </p>
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
                <div className="mb-[32px] flex justify-between">
                  <p className="mb-0 text-white">
                    <Checkbox className="w-[24px] h-[24px] bg-[#D9D9D9"></Checkbox>
                    Remember me
                  </p>
                  <p className="text-[#4AC1FF] mb-0">
                    <Link to="/auth/forgot-password">Forgot password?</Link>
                  </p>
                </div>
                <div className="mb-5">
                  <input
                    type="submit"
                    disabled={loading}
                    value="Sign in"
                    className="w-full h-[48px] cursor-pointer rounded-[8px] bg-button-login text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-full hidden lg:block lg:w-1/2 m-auto">
            <div className="right-login-background bg-contain m-auto w-[474px] h-[516px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
