import classNames from 'classnames';
import Header from '@/components/header';
import { logoHaveTextImg } from '@/images/logo';
import { Divider, Image, Switch, Tag } from 'antd';
import { useEffect } from 'react';
const Checkout = () => {
  useEffect(() => {
    const paymentNinePayObj = {
      env: 'SANDBOX',
      baseEncode:
        'eyJtZXJjaGFudEtleSI6InRwNk5mdiIsInRpbWUiOjE2OTkzNjY1NjAsImludm9pY2Vfbm8iOiIzT21hNHpydiIsImFtb3VudCI6MTAwMDAsImRlc2NyaXB0aW9uIjoiVGhpcyBpcyBkZXNjcmlwdGlvbiIsInJldHVybl91cmwiOiJodHRwOi8vZmNkY2M0NzY3YWNiLm5ncm9rLmlvLyIsImJhY2tfdXJsIjoiaHR0cDovL2ZjZGNjNDc2N2FjYi5uZ3Jvay5pby8ifQ==',
      signature: 'NqU21T4S24mmsXrPsanjKXdicu9wf6yPwNmOUe5u7eY=',
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://sand-payment.9pay.vn/assets/sdk/js/9pay-sdk-1.0.0.min.js';

    script.addEventListener('load', () => {
      (window as any).NinePaySDK.init(paymentNinePayObj);
    });

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-2 text-black min-h-screen">
        <div className="px-4 py-4 bg-[#111827] text-white">
          <p className="text-xl font-medium">
            {' '}
            <Image
              src={logoHaveTextImg}
              alt="Chatfly"
              className="!h-[35px]"
              preview={false}
            />
          </p>
          <div className="h-full flex justify-center flex-col px-0 sm:px-[4vw]">
            <div>
              <span>Subscribe to Chatfly Starter plan</span>
              <div className="flex py-4">
                <span className="flex items-center text-5xl font-semibold pr-2">
                  $39
                </span>
                <div className="text-[24px]">
                  <span>
                    per <br /> month
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3 rounded-lg border bg-[#f9f9fc] border-[#e5e7eb] text-black px-1 py-4 sm:px-4">
              <div className="flex flex-col rounded-lg sm:flex-row">
                <div className="w-full flex-col py-4">
                  <span className="font-bold text-xl bg-gradient-to-r from-[#B62DE7] to-[#7407A8] bg-clip-text text-transparent">
                    Chatfly Starter
                  </span>
                  <span className="float-right text-gray-400 font-medium text-lg">
                    $39
                  </span>
                  <p className="text-lg pt-3">
                    Starter plan let you use most of our premium features and
                    help user better
                  </p>
                </div>
              </div>
              <Divider />
              <div className="mt-8 text-lg font-medium">
                <Switch />{' '}
                <Tag color="#C3EDD5">
                  <span className="text-[#219653]">Save 26$</span>
                </Tag>{' '}
                <span>with annual billing</span>
                <span className="float-right text-[#9CA3AF] font-medium text-lg">
                  $390/year
                </span>
              </div>
            </div>
            <Divider className="bg-[#9CA3AF] px-2" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal text-gray-900">Subtotal</p>
              <p className="font-normal text-gray-900">$39</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-gray-900">VAT tax (10%)</p>
              <p className="font-normal text-gray-900">$3.9</p>
            </div>
            <Divider className="bg-[#9CA3AF] px-2" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal text-gray-900">Due today</p>
              <p className="font-normal text-gray-900">$41.9</p>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-4 lg:mt-0">
          <p className="text-xl font-medium">Payment Method</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <p>
            <div id="NinePayCheckout"></div>
          </p>
          <button className="mt-4 mb-8 w-full rounded-md bg-[#111827] px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
