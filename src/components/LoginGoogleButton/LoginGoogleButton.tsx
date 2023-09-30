import { useGoogleLogin,  } from "@react-oauth/google";
import { Button } from "antd";
import googleIcon from '@/images/icon/googleIcon.jpeg';

const LoginGoogleBtn = ({loading} : any) => {
  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (errorResponse) => console.log(errorResponse),
    flow: 'implicit',
  });
  return (
    <Button
      onClick={() => loginGoogle()}
      disabled={loading}
      icon={
        <img
          src={googleIcon}
          alt="sign_in_google"
          width={20}
          height={20}
        ></img>
      }
      className="w-full h-[48px] cursor-pointer rounded-[8px] bg-white text-black transition hover:bg-opacity-90 google-sign-in-btn"
    >
      {' '}
      Sign in with Google
    </Button>
  );
};

export default LoginGoogleBtn