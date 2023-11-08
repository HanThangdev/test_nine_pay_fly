import { FormData, schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Button, Image, Input, notification } from 'antd';
import { logoHaveTextImg } from '@/images/logo';
import { setEmailVerify } from '@/states/auth/auth.slice';
import { AppDispatch } from '@/states/store';
import { useDispatch } from 'react-redux';
import { registerTransaction } from '@/repository/auth/register';
import { API_STATUS } from '@/constants';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
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
      const { meta } = await dispatch(registerTransaction(body));
      if (meta.requestStatus == API_STATUS.REJECTED) {
        throw meta;
      }
      notification.success({
        message: 'You have successfully registered.',
        duration: 2,
      });
      setLoading(false);
      dispatch(setEmailVerify(body.email));
      navigate('/auth/verify');
    } catch (error: any) {
      setLoading(false);
    }
  });

  if (Boolean(token)) {
    return;
  }

  return (
    <>
      <div className="h-auto signup-background bg-cover min-h-screen shadow-default">
        <div className="h-auto flex flex-wrap items-center w-full xl:w-[80%] m-auto">
          <div className="w-full flex justify-center border-stroke dark:border-strokedark lg:w-1/2 m-auto">
            <div className="w-fit bg-[#37415194] p-[24px] rounded-[24px]">
              <div className="flex justify-center items-center">
                <Image
                  src={logoHaveTextImg}
                  alt="Chatfly"
                  className="!h-[33px]"
                  preview={false}
                />
              </div>
              <p className="text-center mt-2 text-[#667085]">
                You'll be up & running in 2 minutes
              </p>
              <h2 className="text-center text-[30px] mt-[24px] text-white font-bold">
                Create your account
              </h2>
              <form onSubmit={onSubmit} className="w-[442px] m-auto">
                <div className="mt-6">
                  <label className="mb-2.5 h-[21px] text-[14px] text-[#F9FAFB] block font-medium ">
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="h-[44px] w-full rounded-lg border border-stroke bg-white px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('first_name')}
                    />
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                      {errors.first_name?.message}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2.5 h-[21px] text-[14px] text-[#F9FAFB] block font-medium ">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="h-[44px] w-full rounded-lg border border-stroke bg-white px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      {...register('last_name')}
                    />
                    <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                      {errors.last_name?.message}
                    </div>
                  </div>
                </div>
                <div>
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
                  <p className="text-white text-[14px] mb-2">
                    Must include at least eight letter, number and special
                    character
                  </p>
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
                <div>
                  <label className="mb-2.5 h-[21px] text-[14px] text-[#F9FAFB] block font-medium ">
                    Confirm your Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassConfirm ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="h-[44px] w-full rounded-lg border border-stroke bg-white px-4 outline-none focus:border-primary focus-visible:shadow-none"
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
                  <Button
                    htmlType="submit"
                    loading={loading}
                    disabled={isSubmitting || loading}
                    value="Create account"
                    className="w-full h-[44px] cursor-pointer rounded-[8px] bg-[#2D3FE7] font-semibold text-white transition hover:bg-opacity-90 button-antd"
                  >
                    Create account
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <p className=" text-[14px] text-white">
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-[16px]">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full hidden lg:block lg:w-1/2 m-auto">
            {/* <div className="right-register-background bg-contain m-auto w-[474px] h-[516px]"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
