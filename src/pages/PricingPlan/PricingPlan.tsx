import classNames from 'classnames';
import React, { useState } from 'react';
import IconCheck from '@/components/IconCheck/IconCheck';

import { AiOutlineDollarCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
interface Props {
  onClick: () => void;
}

const PricingPlan = ({ onClick }: Props) => {
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
          Pricing Plans
        </h2>
        <div className="bg-[#E2F4EC] text-black flex text-[16px] lg:text-[20px] rounded-[50px] w-[353px] p-[4px] h-[54px] m-auto ">
          <p
            onClick={() => setMonth(true)}
            className={classNames(
              'mb-0 w-1/2 rounded-[50px] flex items-center justify-center font-medium cursor-pointer',
              {
                'text-white bg-[#4AC1FF]': month,
              },
            )}
          >
            Monthly billing
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
            Yearly billing
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 m-auto">
          <div
            className={classNames(
              'border-[1px] border-[#DCDEED] rounded-[10px]',
              'bg-[#F9F9FC] text-black py-5 px-8 relative',
            )}
          >
            <p className="text-[24px] font-black mb-4 flex justify-center">
              Free
            </p>
            {(month ? itemFreeMonth : itemFreeYear).map((item, index) => (
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
              <button
                onClick={onClick}
                className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[50px] text-[18px] font-bold justify-cente"
              >
                Signed In
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
              Basic
            </p>
            {(month ? itemBasicMonth : itemBasicYear).map((item, index) => (
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
                ${month ? '14' : '190'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month ? 'month' : 'year'}
                </span>
              </p>
              <button
                onClick={onClick}
                className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente"
              >
                Subscribe
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
              Starter
            </p>
            {(month ? itemStarterMonth : itemStarterYear).map((item, index) => (
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
                $39{!month && '0'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month ? 'month' : 'year'}
                </span>
              </p>
              <button
                onClick={onClick}
                className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente"
              >
                Subscribe
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
              Standard
            </p>
            {(month ? itemStandardMonth : itemStandardYear).map(
              (item, index) => (
                <p
                  key={index}
                  className="flex gap-x-4 mb-[6px] text-left text-[15px]"
                >
                  <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                    <IconCheck />
                  </span>
                  {item}
                </p>
              ),
            )}
            <div className="bottom-0 lg:absolute m-auto w-[calc(100%-64px)] mb-[20px]">
              <p className="text-[26px] lg:text-[40px] flex justify-center items-end text-[#4AC1FF] mb-4 font-black">
                $79{!month && '0'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month ? 'month' : 'year'}
                </span>
              </p>
              <button
                onClick={onClick}
                className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente"
              >
                Subscribe
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
              Business
            </p>
            {(month ? itemBusinessMonth : itemBusinessYear).map(
              (item, index) => (
                <p
                  key={index}
                  className="flex gap-x-4 mb-[6px] text-left text-[15px]"
                >
                  <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                    <IconCheck />
                  </span>
                  {item}
                </p>
              ),
            )}
            <div className="bottom-0 m-auto w-[calc(100%-64px)] pt-4">
              <p className="text-[26px] lg:text-[40px] flex justify-center items-end text-[#4AC1FF] mb-4 font-black">
                ${month ? '279' : '3890'}/
                <span className="font-thin text-[20px] lg:text-[30px]">
                  {month ? 'month' : 'year'}
                </span>
              </p>
              <button
                onClick={onClick}
                className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[18px] font-bold justify-cente"
              >
                Subscribe
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

const itemFreeMonth = [
  '100 message credits/month',
  '1 chatbot',
  '10,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Chatbots get deleted after 14 days of inactivity',
];

const itemFreeYear = [
  '30 message credits/month',
  '1 chatbot',
  '400,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'Chatbots get deleted after 7 days of inactivity',
];

const itemBasicMonth = [
  '2,000 message credits/month',
  '2 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Slack integration',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
];

const itemBasicYear = [
  '2,000 message credits/month',
  '2 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'API access',
  'Zapier integration',
  'Slack integration',
  'Wordpress integration',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
];

const itemStarterMonth = [
  '12,000 message credits/month',
  '4 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'API access',
  'Slack integration (coming soon)',
  'Microsoft Team integration (coming soon)',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
];

const itemStarterYear = [
  '10,000 message credits/month',
  '5 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'API access',
  'Slack integration',
  'Microsoft Team integration',
  'Messenger integration (coming soon)',
  'Option to Choose GPT-4',
];

const itemStandardMonth = [
  '20,000 message credits/month',
  '8 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'API access',
  'Zapier integration',
  'Slack integration (coming soon)',
  'Wordpress integration (coming soon)',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
];

const itemStandardYear = [
  '20,000 message credits/month',
  '8 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'API access',
  'Zapier integration',
  'Slack integration',
  'Wordpress integration',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
];

const itemBusinessMonth = [
  '50,000 message credits/month included (Messages over the limit will use your OpenAI API Key)',
  '10 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'API access',
  'Zapier integration',
  'Slack integration',
  'Wordpress integration',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
  'Option to Choose GPT-4',
  'Remove Powered by Chatbase',
];

const itemBusinessYear = [
  '40,000 message credits/month included (Messages over the limit will use your OpenAI API Key)',
  '10 chatbots',
  '11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'API access',
  'Zapier integration',
  'Slack integration',
  'Wordpress integration',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
  'Option to Choose GPT-4',
  'Remove Powered by Chatbase',
];

const FAQs = [
  {
    question: 'Is there a free plan?',
    answer:
      'Yes, just by signing up you get 30 message credits and 1 chatbot (400k characters). You can use these to test out chatbase and see if it works for you.',
  },
  {
    question: 'How do message credits work?',
    answer:
      'One AI response with gpt-3.5-turbo (the default) costs 1 message credit. One AI response with gpt-4 costs 20 message credits. You can change which model your chatbot uses in the chatbot settings. The difference is because gpt-4 costs 15x (prompt tokens) and 30x (completion tokens) what gpt-3.5-turbo costs on OpenAI.',
  },
  {
    question: 'What counts as one chatbot?',
    answer:
      'One chatbot means a chatbot that contains specific data and can answer any question about this data. Even if it was created using multiple documents.',
  },
  {
    question: 'How many users can use my chatbot?',
    answer:
      'If your chatbot is private, only you have access to it. If you decide to make it public, anyone with the link will be able to interact with it',
  },
  {
    question: 'When are my message credits renewed?',
    answer:
      'Your message credits are renewed at the start of every calendar month regardless of when you subscribed. So if you subscribe on the 15th of March, your credits will be renewed on the 1st of April.',
  },
  {
    question: 'How do I know how many characters are in my document?',
    answer:
      'Once you attach your document(s) for upload, chatbase will show you the character count of all the attached documents.',
  },
  {
    question: 'Can I upload multiple files to one chatbot?',
    answer:
      'Yes, if you have a paid plan you can upload multiple files to one chatbot. Just click ctrl (windows) or cmd (mac) and select as many files as you want.',
  },
  {
    question: 'How much data can I give one chatbot?',
    answer:
      'Free plan: 400K Characters (~5MB) | Hobby/Standard/Unlimited: 11M Characters (~140MB)',
  },
  {
    question: 'How does the unlimited plan work?',
    answer:
      'You get 40,000 message credits included in the plan when you subscribe. Every message after that will use your OpenAI API key that you can add in your account page. So you get the cheapest possible price per message after you hit the limit.',
  },
];
