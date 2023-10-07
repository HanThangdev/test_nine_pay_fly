import { TokenResponse, useGoogleLogin,  } from "@react-oauth/google";
import { Button } from "antd";
import googleIcon from '@/images/icon/googleIcon.jpeg';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/states/store";
import { API_STATUS } from "@/constants";
import { loginViaGoogleTransaction } from "@/repository/auth/login";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const LoginGoogleBtn = ({loading} : any) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => onLoginInByGoogle(tokenResponse),
    onError: (errorResponse) => console.log(errorResponse),
    flow: 'implicit',
  });

  const onLoginInByGoogle = async (tokenResponse: Omit<TokenResponse, "error" | "error_description" | "error_uri">) => {
    const {access_token} = tokenResponse
    const { meta, payload }: any = await dispatch(loginViaGoogleTransaction({access_token}));
      if (meta.requestStatus == API_STATUS.REJECTED) {
        return;
      }
      if(payload?.data?.data?.flag){
        const cookies = new Cookies();
        cookies.set('access_token', payload?.data?.data?.access_token, { path: '/' });
        navigate('/');
      }else{
        navigate(`/auth/forgot-password/verify?thirdPartyLoginVerify=${payload?.data?.data?.access_token}`)
      }
  } 
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
      className="w-full h-[48px] cursor-pointer rounded-[8px] bg-white text-black transition hover:bg-opacity-90 google-sign-in-btn flex justify-center items-center"
    >
      {' '}
      Sign in with Google
    </Button>
  );
};

export default LoginGoogleBtn