import { Link, useNavigate, useParams } from 'react-router-dom';
import { FormData, schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { notification, Image, Checkbox, Button } from 'antd';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { loginTransaction } from '@/repository/auth/login';
import { API_STATUS } from '@/constants';
import { useManageChatbot } from '@/states/manageBot/manageBot.selector';
import { userApi } from '@/repository/auth/login';
import { logoHaveTextImg } from '@/images/logo';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginGoogleBtn from '@/components/LoginGoogleButton';

const SignIn = () => {
  const { code } = useParams();
  const [showPass, setShowPass] = useState(false);
  const { loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, []);

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
        <div className="h-full flex flex-wrap items-center w-full xl:w-[80%] m-auto">
          <div className="w-[full] flex justify-center border-stroke dark:border-strokedark lg:w-1/2">
            <div className="w-fit bg-[#37415194] p-[24px] rounded-[24px]">
              <div className="flex justify-center items-center">
                <Image
                  src={logoHaveTextImg}
                  alt="Chatfly"
                  className="!h-[33px]"
                  preview={false}
                />
              </div>
              <h2 className="text-center text-[30px] mt-[24px] text-white font-bold">
                Log in to your account
              </h2>
              <p className="text-center text-[#667085]">
                Welcome back! Please enter your details.
              </p>
              <form onSubmit={onSubmit} className="w-[442px] m-auto">
                <div className="mt-[31px]">
                  <label className="mb-2.5 h-[21px] text-[14px] text-[#F9FAFB] block font-medium ">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-[44px] w-full rounded-lg border border-stroke bg-white px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('email')}
                    />
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                      {errors.email?.message}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 h-[21px] text-[14px] text-[#F9FAFB] block font-medium ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="h-[44px] w-full rounded-lg border border-stroke bg-white px-4 outline-none focus:border-primary focus-visible:shadow-none"
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
                  <p className="mb-0 text-white text-[14px]">
                    <Checkbox className="w-[24px] h-[24px] bg-[#D9D9D9"></Checkbox>
                    Remember for 30 days
                  </p>
                  <p className="text-white text-[14px] mb-0">
                    <Link to="/auth/forgot-password">Forgot password?</Link>
                  </p>
                </div>
                <div className="mb-5">
                  <Button
                    htmlType="submit"
                    disabled={loading}
                    loading={loading}
                    className="w-full h-[44px] cursor-pointer rounded-[8px] bg-[#2D3FE7] font-semibold text-white transition hover:bg-opacity-90 button-antd"
                  >
                    Sign in
                  </Button>
                </div>
                <div className="w-full">
                  <GoogleOAuthProvider clientId="664422196919-e2dkku6sj5ums77phncm4ascinss55fe.apps.googleusercontent.com">
                    <LoginGoogleBtn />
                  </GoogleOAuthProvider>
                </div>
                <p className="text-center text-[14px] mt-4 text-white">
                  Don’t have an account?
                  <span className="text-[16px] ">
                    <Link to="/auth/signup"> Sign up</Link>
                  </span>
                </p>
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
