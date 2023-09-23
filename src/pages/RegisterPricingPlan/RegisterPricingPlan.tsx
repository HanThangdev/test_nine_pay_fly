import classNames from 'classnames';
import { logoHaveTextImg, logoImg } from '@/images/logo';
import { Image, Row } from 'antd';
import { backgroundRegisterPricing } from '@/images';

const RegisterPricingPlan = () => {
  return (
    <>
      <div className="h-full register-pricing-background bg-cover min-h-screen shadow-default items-center flex flex-col justify-center">
        <div className='mb-5'>
          <Image src={logoHaveTextImg} width={300} preview={false} />
        </div>
        <div
          className={classNames(
            'w-[80%] h-[65%] p-6 text-center rounded-[5px] register-pricing-frame flex flex-col justify-center items-center relative' ,
          )}
        >
          <p className="my-6 max-w-4xl text-white text-2xl">
            ChatFly seems useful to you, doesn't it?
            <br />
            Leave your email here so we can connect with you as soon as possible
            and send you a complimentary package for experiencing advanced
            features from chatFly!
          </p>{' '}
          <div className="text-zinc-800 flex pt-5">
            <input
              placeholder="Enter Your Email"
              type="email"
              className="border-rose-500 text-[#91929f] rounded-lg block w-[400px] h-[55px] p-2.5 focus:border-sky-200 input-email-register"
            />
            <button className='w-[129px] h-[55px] button-pricing text-white rounded-2xl ml-10'>Send</button>
          </div>

          <div className='absolute bottom-5 text-[#91929f]'>
            We'll promptly provide updates to assist you with the payment...
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPricingPlan;
