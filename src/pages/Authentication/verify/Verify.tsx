import classNames from 'classnames';
import { logoImg } from '@/images/logo';
import { Image } from 'antd';
import { useAuth } from '@/states/auth/auth.selector';
import api from '@/repository/auth/reset-password';
import { notification } from 'antd';

const Verify = () => {
  const { emailVerify, isForgotPass } = useAuth();

  const onResend = async () => {
    try {
      await api.resetPassword(emailVerify);
      notification.success({
        message: 'Check your email for the password reset link',
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  return (
    <>
      <div className="h-full auth-background bg-cover min-h-screen shadow-default flex items-center">
        <div
          className={classNames(
            'w-[90%] lg:w-1/2 m-auto bg-white px-6 pb-6 text-center rounded-[5px]',
          )}
        >
          <div className="w-full flex justify-center mt-[-25px] mb-10">
            <p className="bg-[#f4f4f4] rounded-full p-3 w-[55px] flex justify-center items-center mb-0 h-[55px]">
              <Image
                src={logoImg}
                alt="Chatfly"
                width={30}
                height={30}
                preview={false}
              />
            </p>
          </div>
          <p className="text-[24px] font-bold">Please verify your email</p>
          <p>
            You’re almost there! We sent an email to
            <br />
            <span className="font-bold">{emailVerify}</span>
          </p>
          <p className="my-6">
            Just click on the link in that email to complete your signup.
            <br />
            If you don't see it, you may need to{' '}
            <span className="font-bold">check your spam</span> folder.
          </p>
          {isForgotPass && (
            <>
              <p>Still can’t find the email?</p>
              <button
                onClick={onResend}
                className="py-2 px-4 rounded-[5px] text-white bg-[#152478] cursor-pointer hover:opacity-80"
              >
                Resend Email
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Verify;
