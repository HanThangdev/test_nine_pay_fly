import classNames from 'classnames';
import { logoHaveTextImg, logoImg } from '@/images/logo';
import { Button, Image, Input, Row, notification } from 'antd';
import { backgroundRegisterPricing } from '@/images';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { usePricingPlan } from '@/states/pricingPlan/pricingPlan.selector';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email address must be a valid email address.')
    .min(8, 'The email address must not be less than 8 characters.')
    .max(64, 'The email address must not exceed 64 characters.')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Email address must be a valid email address.',
    ),
});
type FormData = yup.InferType<typeof schema>;

const RegisterPricingPlan = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });
  const { onRegisterUpgradeBilling } = usePricingPlan();
  const onSubmit = handleSubmit(async (values) => {
    setLoading(true);
    const { email } = values;
    onRegisterUpgradeBilling(email)
      .then((value) => {
        reset({
          email: '',
        });
        notification.success({
          message: 'Request Uprade Billing Success.',
        });
        navigate('/');
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  });

  return (
    <>
      <div
        className="h-full register-pricing-background bg-cover shadow-default items-center flex flex-col justify-center"
        style={{ backgroundImage: `url(${backgroundRegisterPricing})` }}
      >
        <div className="mb-5">
          <Image src={logoHaveTextImg} width={300} preview={false} />
        </div>
        <div
          className={classNames(
            'w-[80%] h-[65%] p-6 text-center rounded-[5px] register-pricing-frame flex flex-col justify-center items-center relative',
          )}
        >
          <p className="my-6 max-w-4xl text-white text-2xl">
            ChatFly seems useful to you, doesn't it?
            <br />
            Leave your email here so we can connect with you as soon as possible
            and send you a complimentary package for experiencing advanced
            features from chatFly!
          </p>{' '}
          <form onSubmit={onSubmit}>
            <div className="text-zinc-800 flex pt-5">
              <div className="relative">
                <input
                  {...register('email')}
                  placeholder="Enter Your Email"
                  type="email"
                  className="border-rose-500 text-[#91929f] rounded-lg block w-[400px] h-[55px] p-2.5 focus:border-sky-200 input-email-register"
                />
                <div className="text-[#ff0505] mt-1 min-h-[17px] text-[14px]">
                  {errors.email?.message}
                </div>
              </div>
              <Button
                className="w-[129px] h-[55px] button-pricing text-white rounded-2xl ml-10"
                htmlType="submit"
                loading={loading}
                disabled={loading}
              >
                Send
              </Button>
            </div>
          </form>
          <div className="absolute bottom-5 text-[#91929f]">
            We'll promptly provide updates to assist you with the payment...
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPricingPlan;
