import { logoHaveTextImg } from '@/images/logo';
import { Divider, Image, Switch, Tag } from 'antd';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePricingPlan } from '@/states/pricingPlan/pricingPlan.selector';
import { useSearchParamsObject } from '@/utils/useSearchParamsObject';
import { GetPaymentUrlNinePayPayload } from '@/repository/pricingPlan/type';
import { STORAGE, getLocalStorage } from '@/utils/storage';
import { API_STATUS } from '@/constants';
import { FaArrowLeft } from 'react-icons/fa';
import { PLAN_PRICE } from '@/constants/pricing';
import { objectToQueryString } from '@/utils/utils';

const Checkout = () => {
  const navigate = useNavigate();
  const searchParamsObject = useSearchParamsObject();
  const { onGetPaymentUrlNinePay } = usePricingPlan();

  const isMonthlyBilling = useMemo(() => {
    const subscriptionTimeType = Number(
      searchParamsObject.subscription_time_type,
    );
    if (subscriptionTimeType == 1) {
      return true;
    }
    return false;
  }, [searchParamsObject]);

  useEffect(() => {
    if (
      searchParamsObject.hasOwnProperty('billing_type') &&
      searchParamsObject.hasOwnProperty('subscription_time_type')
    ) {
      const payloadGetPaymentUrlNinePay: GetPaymentUrlNinePayPayload = {
        lang: getLocalStorage(STORAGE.LANGUAGE) || 'en',
        currency: 'USD',
        billing_type: Number(searchParamsObject.billing_type),
        subscription_time_type: Number(
          searchParamsObject.subscription_time_type,
        ),
      };
      onGetPaymentUrlNinePay(payloadGetPaymentUrlNinePay)
        .then((response) => {
          const { meta, payload }: any = response;
          console.log(payload);
          if (meta.requestStatus === API_STATUS.FULFILLED) {
            const { data } = payload.data;
            const paymentNinePayObj = {
              env: 'SANDBOX',
              baseEncode: data.baseEncode,
              signature: data.signature,
            };
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src =
              'https://sand-payment.9pay.vn/assets/sdk/js/9pay-sdk-1.0.0.min.js';

            script.addEventListener('load', () => {
              (window as any).NinePaySDK.init(paymentNinePayObj);
            });

            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode?.insertBefore(script, firstScript);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate('/price');
    }
  }, []);

  const Subtotal = useMemo(() => {
    if (
      searchParamsObject.hasOwnProperty('billing_type') &&
      searchParamsObject.hasOwnProperty('subscription_time_type')
    ) {
      const billingType = Number(searchParamsObject.billing_type);
      const subscriptionTimeType = Number(
        searchParamsObject.subscription_time_type,
      );

      if (subscriptionTimeType === 1) {
        return PLAN_PRICE[billingType];
      } else {
        return PLAN_PRICE[billingType] * 10;
      }
    }
    return 0;
  }, [searchParamsObject]);

  return (
    <>
      <div className="grid lg:grid-cols-2 text-black min-h-screen">
        <div className="px-4 py-4 bg-[#111827] text-white">
          <div className="flex items-center">
            <FaArrowLeft
              size={24}
              className="cursor-pointer"
              onClick={() => navigate('/price')}
            />
            <Image
              src={logoHaveTextImg}
              alt="Chatfly"
              className="!h-[35px] pl-0 sm:pl-[2vw]"
              preview={false}
            />
          </div>
          <div className="h-full flex justify-center flex-col px-0 sm:px-[4vw]">
            <div>
              <span>Subscribe to Chatfly Starter plan</span>
              <div className="flex py-4">
                <span className="flex items-center text-5xl font-semibold pr-2">
                  ${Subtotal}
                </span>
                <div className="text-[24px]">
                  <span>
                    per <br /> {isMonthlyBilling ? 'month' : 'year'}
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
                    ${isMonthlyBilling ? Subtotal : Subtotal / 10}
                  </span>
                  <p className="text-lg pt-3">
                    Starter plan let you use most of our premium features and
                    help user better
                  </p>
                </div>
              </div>
              <Divider />
              <div className="mt-8 text-lg font-medium">
                <Switch
                  checked={!isMonthlyBilling}
                  onClick={(e) => {
                    if (!e) {
                      navigate(
                        `/checkout?${objectToQueryString({
                          ...searchParamsObject,
                          subscription_time_type: 1,
                        })}`,
                      );
                      setTimeout(() => window.location.reload(), 200);
                    } else {
                      navigate(
                        `/checkout?${objectToQueryString({
                          ...searchParamsObject,
                          subscription_time_type: 2,
                        })}`,
                      );
                      setTimeout(() => window.location.reload(), 200);
                    }
                  }}
                />{' '}
                <Tag color="#C3EDD5">
                  <span className="text-[#219653]">
                    Save {isMonthlyBilling ? Subtotal * 2 : (Subtotal / 10) * 2}
                    $
                  </span>
                </Tag>{' '}
                <span>with annual billing</span>
                <span className="float-right text-[#9CA3AF] font-medium text-lg">
                  ${Subtotal}/{isMonthlyBilling ? 'month' : 'year'}
                </span>
              </div>
            </div>
            <Divider className="bg-[#9CA3AF] px-2" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal text-gray-900">Subtotal</p>
              <p className="font-normal text-gray-900">${Subtotal}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-gray-900">VAT tax (10%)</p>
              <p className="font-normal text-gray-900">
                ${(Subtotal * 10) / 100}
              </p>
            </div>
            <Divider className="bg-[#9CA3AF] px-2" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal text-gray-900">Due today</p>
              <p className="font-normal text-gray-900">
                ${(Subtotal * 110) / 100}
              </p>
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
          {/* <button className="mt-4 mb-8 w-full rounded-md bg-[#111827] px-6 py-3 font-medium text-white">
            Place Order
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
