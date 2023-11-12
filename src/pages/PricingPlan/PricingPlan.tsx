import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/header';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Switch } from 'antd';
import {
  IconsFree,
  IconsBasic,
  IconsStarter,
  IconsBusiness,
  IconsStandard,
} from '@/components/IconPrice/IconPrice';
import { PRICINGVALUE } from '@/constants/pricing';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { objectToQueryString } from '@/utils/utils';

interface IPricingValue {
  billing_type: number;
  subscription_time_type: number;
}
const PricingPlan = () => {
  const { t } = useTranslation();
  const { currentPricingPlan } = useSelector(
    (state: RootState) => state.pricing,
  );
  const navigate = useNavigate();
  const itemFree = [
    `${t('Free.item1', { ns: 'pricing_plan' })}`,
    `${t('Free.item2', { ns: 'pricing_plan' })}`,
    `${t('Free.item3', { ns: 'pricing_plan' })}`,
    `${t('Free.item4', { ns: 'pricing_plan' })}`,
    `${t('Free.item5', { ns: 'pricing_plan' })}`,
    `${t('Free.item6', { ns: 'pricing_plan' })}`,
    `${t('Free.item7', { ns: 'pricing_plan' })}`,
  ];

  const itemBasic = [
    `${t('Basic.item1', { ns: 'pricing_plan' })}`,
    `${t('Basic.item2', { ns: 'pricing_plan' })}`,
    `${t('Basic.item3', { ns: 'pricing_plan' })}`,
    `${t('Basic.item4', { ns: 'pricing_plan' })}`,
    `${t('Basic.item5', { ns: 'pricing_plan' })}`,
    `${t('Basic.item6', { ns: 'pricing_plan' })}`,
    `${t('Basic.item7', { ns: 'pricing_plan' })}`,
    `${t('Basic.item8', { ns: 'pricing_plan' })}`,
    `${t('Basic.item9', { ns: 'pricing_plan' })}`,
  ];

  const itemStarter = [
    `${t('Starter.item1', { ns: 'pricing_plan' })}`,
    `${t('Starter.item2', { ns: 'pricing_plan' })}`,
    `${t('Starter.item3', { ns: 'pricing_plan' })}`,
    `${t('Starter.item4', { ns: 'pricing_plan' })}`,
    `${t('Starter.item5', { ns: 'pricing_plan' })}`,
    `${t('Starter.item6', { ns: 'pricing_plan' })}`,
    `${t('Starter.item7', { ns: 'pricing_plan' })}`,
    `${t('Starter.item8', { ns: 'pricing_plan' })}`,
    `${t('Starter.item9', { ns: 'pricing_plan' })}`,
    `${t('Starter.item10', { ns: 'pricing_plan' })}`,
    `${t('Starter.item11', { ns: 'pricing_plan' })}`,
  ];

  const itemStandard = [
    `${t('Standard.item1', { ns: 'pricing_plan' })}`,
    `${t('Standard.item2', { ns: 'pricing_plan' })}`,
    `${t('Standard.item3', { ns: 'pricing_plan' })}`,
    `${t('Standard.item4', { ns: 'pricing_plan' })}`,
    `${t('Standard.item5', { ns: 'pricing_plan' })}`,
    `${t('Standard.item6', { ns: 'pricing_plan' })}`,
    `${t('Standard.item7', { ns: 'pricing_plan' })}`,
    `${t('Standard.item8', { ns: 'pricing_plan' })}`,
    `${t('Standard.item10', { ns: 'pricing_plan' })}`,
    `${t('Standard.item9', { ns: 'pricing_plan' })}`,
    `${t('Standard.item11', { ns: 'pricing_plan' })}`,
    `${t('Standard.item12', { ns: 'pricing_plan' })}`,
    `${t('Standard.item13', { ns: 'pricing_plan' })}`,
  ];

  const itemBusiness = [
    `${t('Business.item1', { ns: 'pricing_plan' })}`,
    `${t('Business.item2', { ns: 'pricing_plan' })}`,
    `${t('Business.item3', { ns: 'pricing_plan' })}`,
    `${t('Business.item4', { ns: 'pricing_plan' })}`,
    `${t('Business.item5', { ns: 'pricing_plan' })}`,
    `${t('Business.item6', { ns: 'pricing_plan' })}`,
    `${t('Business.item7', { ns: 'pricing_plan' })}`,
    `${t('Business.item8', { ns: 'pricing_plan' })}`,
    `${t('Business.item10', { ns: 'pricing_plan' })}`,
    `${t('Business.item9', { ns: 'pricing_plan' })}`,
    `${t('Business.item11', { ns: 'pricing_plan' })}`,
    `${t('Business.item12', { ns: 'pricing_plan' })}`,
    `${t('Business.item13', { ns: 'pricing_plan' })}`,
    `${t('Business.item14', { ns: 'pricing_plan' })}`,
    `${t('Business.item15', { ns: 'pricing_plan' })}`,
  ];

  const FAQs = [
    {
      question: `${t('question.question1', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer1', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question2', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer2', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question3', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer3', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question4', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer4', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question5', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer5', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question6', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer6', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question7', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer7', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question8', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer8', { ns: 'pricing_plan' })}`,
    },
    {
      question: `${t('question.question9', { ns: 'pricing_plan' })}`,
      answer: `${t('answer.answer9', { ns: 'pricing_plan' })}`,
    },
  ];
  const [month, setMonth] = useState(PRICINGVALUE.FREE_MONTHLY);
  enum PRICINGENUM {
    Free,
    Basic,
    Starter,
    Standard,
    Business,
  }
  
  const pricingValuesType: Record<string, PRICINGENUM> = {
    Free: PRICINGENUM.Free,
    Basic: PRICINGENUM.Basic,
    Starter: PRICINGENUM.Starter,
    Standard: PRICINGENUM.Standard,
    Business: PRICINGENUM.Business,
  };

  const navigateCheckoutPricing = (type: IPricingValue) => {
    navigate(`/checkout?`+ objectToQueryString(type))
  }
  return (
    <>
      <Header
        children={
          <>
            <h1 className="text-[24px] text-[#1F2937] mb-0">
              Your subcription
            </h1>
          </>
        }
      />
      <div className={classNames('p-6 mt-[6px] py-[22px] px-[20px]')}>
        <div className="block lg:flex justify-center m-auto gap-8">
          <div
            className={classNames(
              'w-full lg:w-1/3 border-[2px] border-[#DCDEED] rounded-[16px]',
              'bg-[#FCFCFC] text-black py-5 px-4 relative',
            )}
          >
            <div className="flex justify-between ">
              <p className="text-[24px] font-black mb-4 text-[#1C2434]">
                {t('Free.title', { ns: 'pricing_plan' })}
              </p>
              <p className="text-[#9CA3AF] text-[14px] Pricing gap-x-3 flex">
                <Switch
                  checked={month == PRICINGVALUE.FREE_YEARLY}
                  size="small"
                  onClick={(e) => setMonth(e ? PRICINGVALUE.FREE_YEARLY : PRICINGVALUE.FREE_MONTHLY)}
                />
                YEARLY
              </p>
            </div>
            <div className="mt-[16px] h-[80px]">
              <p className="text-[57px] text-[#4B5563] font-semibold mb-0">
                FREE
              </p>
            </div>
            {itemFree.map((item, index) => (
              <p
                key={index}
                className="flex gap-x-2 mb-[6px] text-left text-[15px]"
              >
                <span className="h-[15px] mt-[4px]">{IconsFree[index]}</span>
                {item}
              </p>
            ))}
            <div className="bottom-0 lg:absolute m-auto w-[calc(100%-32px)] mb-[20px]">
              <button className="flex justify-center w-full items-center m-auto py-3 px-5 bg-button-upgrade text-[#FFF] rounded-[12px] text-[18px] justify-cente" disabled={pricingValuesType[currentPricingPlan || 'Free'] >= PRICINGENUM.Basic}>
                {pricingValuesType[currentPricingPlan || 'Free'] == PRICINGENUM.Basic ? 'You are currently on free plan' : 'Registered for this plan.'}
              </button>
            </div>
          </div>
          <div
            className={classNames(
              'w-full lg:w-1/3 border-[2px] border-[#DCDEED] rounded-[16px]',
              'bg-[#FCFCFC] text-black py-5 px-4 relative',
            )}
          >
            <div className="flex justify-between ">
              <p className="text-[24px] font-black mb-4 text-[#1C2434]">
                {t('Basic.title', { ns: 'pricing_plan' })}
              </p>
              <p className="text-[#9CA3AF] text-[14px] Pricing gap-x-3 flex">
                <Switch
                  checked={month == PRICINGVALUE.BASIC_YEARLY}
                  size="small"
                  onClick={(e) => setMonth(e ? PRICINGVALUE.BASIC_YEARLY : PRICINGVALUE.BASIC_MONTHLY)}
                />
                YEARLY
              </p>
            </div>
            <div className="mt-[16px] h-[80px]">
              <p className="text-[57px] text-[#2D3FE7] font-semibold mb-0">
                $14{month == PRICINGVALUE.BASIC_YEARLY && '0'}
                <br />
                <span className="text-[#9CA3AF] text-[16px] font-semibold uppercase">
                  PER{' '}
                  {month == PRICINGVALUE.BASIC_YEARLY
                    ? `${t('year', { ns: 'pricing_plan' })}`
                    : `${t('month', { ns: 'pricing_plan' })}`}
                </span>
              </p>
            </div>
            {itemBasic.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <p className="flex gap-x-2 mb-[6px] text-left text-[15px]">
                  <span className="h-[15px] mt-[4px]">{IconsBasic[index]}</span>
                  {item}
                </p>
                {(index === 8 || index === 7) && (
                  <p className="flex items-center mb-0 uppercase text-[#D70] h-[24px] text-[10px] py-[2px] px-1 rounded-lg bg-[#F6F1E2]">
                    {t('coming', { ns: 'pricing_plan' })}
                  </p>
                )}
              </div>
            ))}
            <div className="bottom-0 m-auto w-full pt-4">
              <button className="flex justify-center items-center w-full m-auto py-3 px-5 bg-button-upgrade text-[#FFF] rounded-[12px] text-[18px] justify-cente" onClick={() => navigateCheckoutPricing(month == PRICINGVALUE.BASIC_YEARLY ? PRICINGVALUE.BASIC_YEARLY : PRICINGVALUE.BASIC_MONTHLY)} disabled={pricingValuesType[currentPricingPlan || 'Free'] >= PRICINGENUM.Basic}  >
                {pricingValuesType[currentPricingPlan || 'Free'] <= PRICINGENUM.Basic ? pricingValuesType[currentPricingPlan || 'Free'] == PRICINGENUM.Basic ? 'You are currently on basic plan': 'Upgrade to Basic' : 'Registered for this plan.'}
              </button>
            </div>
          </div>
        </div>
        <div className="block lg:grid grid-cols-3 justify-center m-auto gap-8 pt-8">
          <div
            className={classNames(
              ' border-[2px] border-[#DCDEED] rounded-[16px]',
              'bg-[#FCFCFC] text-black py-5 px-4 relative',
            )}
          >
            <div className="flex justify-between ">
              <p className="text-[24px] font-black mb-4 text-[#1C2434]">
                {t('Starter.title', { ns: 'pricing_plan' })}
              </p>
              <p className="text-[#9CA3AF] text-[14px] Pricing gap-x-3 flex">
                <Switch
                  checked={month == PRICINGVALUE.STARTER_YEARLY}
                  size="small"
                  onClick={(e) => setMonth(e ? PRICINGVALUE.STARTER_YEARLY : PRICINGVALUE.STARTER_MONTHLY)}
                />
                YEARLY
              </p>
            </div>
            <div className="mt-[16px] h-[80px]">
              <p className="text-[57px] text-[#AE28DF] font-semibold mb-0">
                $39{month == PRICINGVALUE.STARTER_YEARLY && '0'}
                <br />
                <span className="text-[#9CA3AF] text-[16px] font-semibold uppercase">
                  PER{' '}
                  {month == PRICINGVALUE.STARTER_YEARLY
                    ? `${t('year', { ns: 'pricing_plan' })}`
                    : `${t('month', { ns: 'pricing_plan' })}`}
                </span>
              </p>
            </div>
            {itemStarter.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <p className="flex gap-x-4 mb-[6px] text-left text-[15px]">
                  <span className="h-[15px] mt-[4px]">
                    {IconsStarter[index]}
                  </span>
                  {item}
                </p>
                {(index === 7 ||
                  index === 8 ||
                  index === 9 ||
                  index === 10) && (
                  <p className="flex items-center mb-0 uppercase text-[#D70] h-[24px] text-[10px] py-[2px] px-1 rounded-lg bg-[#F6F1E2]">
                    {t('coming', { ns: 'pricing_plan' })}
                  </p>
                )}
              </div>
            ))}
            <div className="bottom-0 lg:absolute m-auto w-[calc(100%-32px)] mb-[20px]">
              <button className="flex justify-center items-center w-full m-auto py-3 px-5 bg-starter text-[#FFF] rounded-[12px] text-[18px]" onClick={() => navigateCheckoutPricing(month == PRICINGVALUE.STARTER_YEARLY ? PRICINGVALUE.STARTER_YEARLY : PRICINGVALUE.STARTER_MONTHLY)} disabled={pricingValuesType[currentPricingPlan || 'Free'] >= PRICINGENUM.Starter}>
              {pricingValuesType[currentPricingPlan || 'Free'] <= PRICINGENUM.Starter ? pricingValuesType[currentPricingPlan || 'Free'] == PRICINGENUM.Starter ? 'You are currently on starter plan': 'Upgrade to Starter' : 'Registered for this plan.'}
              </button>
            </div>
          </div>
          <div
            className={classNames(
              'border-[2px] border-[#DCDEED] rounded-[16px]',
              'bg-[#FCFCFC] text-black py-5 px-4 relative mt-8 lg:mt-0',
            )}
          >
            <div className="flex justify-between ">
              <p className="text-[24px] font-black mb-4 text-[#1C2434]">
                {t('Business.title', { ns: 'pricing_plan' })}
              </p>
              <p className="text-[#9CA3AF] text-[14px] Pricing gap-x-3 flex">
                <Switch
                  checked={month == PRICINGVALUE.BUSINESS_YEARLY}
                  size="small"
                  onClick={(e) => setMonth(e ? PRICINGVALUE.BUSINESS_YEARLY : PRICINGVALUE.BUSINESS_MONTHLY)}
                />
                YEARLY
              </p>
            </div>
            <div className="mt-[16px] h-[80px]">
              <p className="text-[57px] text-[#0F0F0F] font-semibold mb-0">
                $279{month == PRICINGVALUE.BUSINESS_YEARLY && '0'}
                <br />
                <span className="text-[#9CA3AF] text-[16px] font-semibold uppercase">
                  PER{' '}
                  {month == PRICINGVALUE.BUSINESS_YEARLY
                    ? `${t('year', { ns: 'pricing_plan' })}`
                    : `${t('month', { ns: 'pricing_plan' })}`}
                </span>
              </p>
            </div>
            {itemBusiness.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <p className="flex gap-x-2 mb-[6px] text-left text-[15px]">
                  <span className="h-[15px] mt-[4px]">
                    {IconsBusiness[index]}
                  </span>
                  {item}
                </p>
                {(index === 9 ||
                  index === 10 ||
                  index === 11 ||
                  index === 12) && (
                  <p className="flex items-center mb-0 uppercase text-[#D70] h-[24px] text-[10px] py-[2px] px-1 rounded-lg bg-[#F6F1E2]">
                    {t('coming', { ns: 'pricing_plan' })}
                  </p>
                )}
              </div>
            ))}
            <div className="bottom-0 m-auto w-full pt-4">
              <button className="flex justify-center items-center w-full m-auto py-3 px-5 bg-business text-[#FFF] rounded-[12px] text-[18px] justify-cente" onClick={() => navigateCheckoutPricing(month == PRICINGVALUE.BUSINESS_YEARLY ? PRICINGVALUE.BUSINESS_YEARLY : PRICINGVALUE.BUSINESS_MONTHLY)} disabled={pricingValuesType[currentPricingPlan || 'Free'] >= PRICINGENUM.Business}>
                {pricingValuesType[currentPricingPlan || 'Free'] == PRICINGENUM.Business ? 'You are currently on Business plan': 'Upgrade to Business'}
              </button>
            </div>
          </div>
          <div
            className={classNames(
              'border-[2px] border-[#DCDEED] rounded-[16px]',
              'bg-[#FCFCFC] text-black py-5 px-4 relative',
            )}
          >
            <div className="flex justify-between ">
              <p className="text-[24px] font-black mb-4 text-[#1C2434]">
                {t('Standard.title', { ns: 'pricing_plan' })}
              </p>
              <p className="text-[#9CA3AF] text-[14px] Pricing gap-x-3 flex">
                <Switch
                  checked={month == PRICINGVALUE.STANDARD_YEARLY}
                  size="small"
                  onClick={(e) => setMonth(e ? PRICINGVALUE.STANDARD_YEARLY : PRICINGVALUE.STANDARD_MONTHLY)}
                />
                YEARLY
              </p>
            </div>
            <div className="mt-[16px] h-[80px]">
              <p className="text-[57px] text-[#D92525] font-semibold mb-0">
                $79{month == PRICINGVALUE.STANDARD_YEARLY && '0'}
                <br />
                <span className="text-[#9CA3AF] text-[16px] font-semibold uppercase">
                  PER{' '}
                  {month == PRICINGVALUE.STANDARD_YEARLY
                    ? `${t('year', { ns: 'pricing_plan' })}`
                    : `${t('month', { ns: 'pricing_plan' })}`}
                </span>
              </p>
            </div>
            {itemStandard.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <p className="flex gap-x-2 mb-[6px] text-left text-[15px]">
                  <span className="h-[15px] mt-[4px]">
                    {IconsStandard[index]}
                  </span>
                  {item}
                </p>
                {(index === 9 ||
                  index === 10 ||
                  index === 11 ||
                  index === 12) && (
                  <p className="flex items-center mb-0 uppercase text-[#D70] h-[24px] text-[10px] py-[2px] px-1 rounded-lg bg-[#F6F1E2]">
                    {t('coming', { ns: 'pricing_plan' })}
                  </p>
                )}
              </div>
            ))}
            <div className="bottom-0 lg:absolute m-auto w-[calc(100%-32px)] mb-[20px]">
              <button className="flex justify-center items-center w-full m-auto py-3 px-5 bg-standard text-[#FFF] rounded-[12px] text-[18px]" onClick={() => navigateCheckoutPricing(month == PRICINGVALUE.STANDARD_YEARLY ? PRICINGVALUE.STANDARD_YEARLY : PRICINGVALUE.STANDARD_MONTHLY)} disabled={pricingValuesType[currentPricingPlan || 'Free'] >= PRICINGENUM.Standard}>
                {pricingValuesType[currentPricingPlan || 'Free'] <= PRICINGENUM.Standard ? pricingValuesType[currentPricingPlan || 'Free'] == PRICINGENUM.Standard ? 'You are currently on Standard plan': 'Upgrade to Standard' : 'Registered for this plan.'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px] mx-[20px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
        )}
      >
        <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3">
          <AiOutlineQuestionCircle size={24} />
          Pricing FAQs
        </h2>
        {FAQs.map((item, index) => (
          <div className="mb-[25px]" key={index}>
            <p className="text-[15px] mb-0 text-black font-bold">
              {item.question}
            </p>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingPlan;
