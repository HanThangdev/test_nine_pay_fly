import classNames from 'classnames';
import React, { useState } from 'react';
import IconCheck from '@/components/IconCheck/IconCheck';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { AiOutlineDollarCircle, AiOutlineQuestionCircle } from 'react-icons/ai';

const PricingPlan = () => {
  const { t } = useTranslation();
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
    `${t('Standard.item9', { ns: 'pricing_plan' })}`,
    `${t('Standard.item10', { ns: 'pricing_plan' })}`,
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
    `${t('Business.item9', { ns: 'pricing_plan' })}`,
    `${t('Business.item10', { ns: 'pricing_plan' })}`,
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
  const [month, setMonth] = useState(true);
  return (
    <>
      <div
        className={classNames(
          'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
        )}
      >
        <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3">
          <AiOutlineDollarCircle size={24} />
          {t('PricingPlans', { ns: 'pricing_plan' })}
        </h2>
        <div className="bg-[#E2F4EC] text-black flex text-[14px] lg:text-[16px] rounded-[50px] w-[353px] p-[4px] h-[54px] m-auto ">
          <p
            onClick={() => setMonth(true)}
            className={classNames(
              'mb-0 w-1/2 rounded-[50px] flex items-center justify-center font-medium cursor-pointer',
              {
                'text-white bg-[#4AC1FF]': month,
              },
            )}
          >
            {t('Monthly', { ns: 'pricing_plan' })}
          </p>
          <p
            onClick={() => setMonth(false)}
            className={classNames(
              'mb-0 w-1/2 rounded-[50px] flex items-center justify-center font-medium cursor-pointer',
              {
                'text-white bg-[#4AC1FF]': !month,
              },
            )}
          >
            {t('Yearly', { ns: 'pricing_plan' })}
          </p>
        </div>
        <div className="block lg:flex justify-center m-auto gap-8 pt-8">
          <div
            className={classNames(
              'w-full lg:w-1/3 border-[1px] border-[#DCDEED] rounded-[10px]',
              'bg-[#F9F9FC] text-black py-5 px-8 relative',
            )}
          >
            <p className="text-[24px] font-black mb-4 flex justify-center">
              {t('Free.title', { ns: 'pricing_plan' })}
            </p>
            {itemFree.map((item, index) => (
              <p
                key={index}
                className="flex gap-x-4 mb-[6px] text-left text-[15px]"
              >
                <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                  <IconCheck />
                </span>
                {item}
              </p>
            ))}
            <div className="bottom-0 lg:absolute m-auto w-[calc(100%-64px)] mb-[20px]">
              <p className="text-[26px] lg:text-[40px] flex justify-center items-end text-[#4AC1FF] mb-4 font-black">
                $0
              </p>
              <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[50px] text-[18px] font-bold justify-cente">
                {t('SignedIn', { ns: 'pricing_plan' })}
              </button>
            </div>
          </div>
          <div
            className={classNames(
              'border-[1px] border-[#DCDEED] rounded-[10px]',
              'bg-[#F9F9FC] text-black py-5 px-8 relative',
            )}
          >
            <p className="text-[24px] font-black mb-4 flex justify-center">
              {t('Basic.title', { ns: 'pricing_plan' })}
            </p>
            {itemBasic.map((item, index) => (
              <p
                key={index}
                className="flex gap-x-4 mb-[6px] text-left text-[15px]"
              >
                <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                  <IconCheck />
                </span>
                {item}
              </p>
            ))}
            <div className="bottom-0 lg:absolute m-auto w-[calc(100%-64px)] mb-[20px]">
              <p className="text-[26px] lg:text-[40px] flex justify-center items-end text-[#4AC1FF] mb-4 font-black">
                $14{!month && '0'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month
                    ? `${t('month', { ns: 'pricing_plan' })}`
                    : `${t('year', { ns: 'pricing_plan' })}`}
                </span>
              </p>
              <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente">
                <Link to="/register-pricing-plan">
                  {t('Subscribe', { ns: 'pricing_plan' })}
                </Link>
              </button>
            </div>
          </div>
          <div
            className={classNames(
              'border-[1px] border-[#DCDEED] rounded-[10px]',
              'bg-[#F9F9FC] text-black py-5 px-8 relative',
            )}
          >
            <p className="text-[24px] font-black mb-4 flex justify-center">
              {t('Starter.title', { ns: 'pricing_plan' })}
            </p>
            {itemStarter.map((item, index) => (
              <p
                key={index}
                className="flex gap-x-4 mb-[6px] text-left text-[15px]"
              >
                <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                  <IconCheck />
                </span>
                {item}
              </p>
            ))}
            <div className="bottom-0 m-auto w-[calc(100%-64px)] pt-4">
              <p className="text-[26px] lg:text-[40px] flex justify-center items-end text-[#4AC1FF] mb-4 font-black">
                $39{!month && '0'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month
                    ? `${t('month', { ns: 'pricing_plan' })}`
                    : `${t('year', { ns: 'pricing_plan' })}`}
                </span>
              </p>
              <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente">
                <Link to="/register-pricing-plan">
                  {t('Subscribe', { ns: 'pricing_plan' })}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="block lg:flex justify-center m-auto gap-8 pt-8">
          <div
            className={classNames(
              'w-full lg:w-1/3 border-[1px] border-[#DCDEED] rounded-[10px]',
              'bg-[#F9F9FC] text-black py-5 px-8 relative',
            )}
          >
            <p className="text-[24px] font-black mb-4 flex justify-center">
              {t('Standard.title', { ns: 'pricing_plan' })}
            </p>
            {itemStandard.map((item, index) => (
              <p
                key={index}
                className="flex gap-x-4 mb-[6px] text-left text-[15px]"
              >
                <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                  <IconCheck />
                </span>
                {item}
              </p>
            ))}
            <div className="bottom-0 lg:absolute m-auto w-[calc(100%-64px)] mb-[20px]">
              <p className="text-[26px] lg:text-[40px] flex justify-center items-end text-[#4AC1FF] mb-4 font-black">
                $79{!month && '0'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month
                    ? `${t('month', { ns: 'pricing_plan' })}`
                    : `${t('year', { ns: 'pricing_plan' })}`}
                </span>
              </p>
              <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente">
                <Link to="/register-pricing-plan">
                  {t('Subscribe', { ns: 'pricing_plan' })}
                </Link>
              </button>
            </div>
          </div>
          <div
            className={classNames(
              'w-full lg:w-1/3 border-[1px] border-[#DCDEED] rounded-[10px]',
              'bg-[#F9F9FC] text-black py-5 px-8 relative mt-8 lg:mt-0',
            )}
          >
            <p className="text-[24px] font-black mb-4 flex justify-center">
              {t('Business.title', { ns: 'pricing_plan' })}
            </p>
            {itemBusiness.map((item, index) => (
              <p
                key={index}
                className="flex gap-x-4 mb-[6px] text-left text-[15px]"
              >
                <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                  <IconCheck />
                </span>
                {item}
              </p>
            ))}
            <div className="bottom-0 m-auto w-[calc(100%-64px)] pt-4">
              <p className="text-[26px] lg:text-[40px] flex justify-center items-end text-[#4AC1FF] mb-4 font-black">
                $279{!month && '0'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month
                    ? `${t('month', { ns: 'pricing_plan' })}`
                    : `${t('year', { ns: 'pricing_plan' })}`}
                </span>
              </p>
              <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente">
                <Link to="/register-pricing-plan">
                  {t('Subscribe', { ns: 'pricing_plan' })}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px]',
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
