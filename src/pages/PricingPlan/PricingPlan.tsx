import classNames from 'classnames';

import IconCheck from '@/components/IconCheck/IconCheck';

import { AiOutlineDollarCircle } from 'react-icons/ai';

const PricingPlan = () => {
  return (
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
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div
          className={classNames(
            'border-[1px] border-[#DCDEED] rounded-[10px]',
            'bg-[#F9F9FC] py-5 px-8 h-[558px] relative',
          )}
        >
          <p className="text-[24px] font-black text-[#33343D] flex justify-center">
            Free
          </p>
          {itemFree.map((item, index) => (
            <p key={index} className="flex gap-x-4 mb-[6px] text-[15px]">
              <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                <IconCheck />
              </span>
              {item}
            </p>
          ))}
          <div className="absolute bottom-0 items-center w-[calc(100%-64px)] mb-[20px]">
            <p className="text-[40px] flex justify-center text-[#01058A] mb-4 font-black">
              $0
            </p>
            <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[50px] text-[15px] font-bold justify-cente">
              Signed In
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'border-[1px] border-[#DCDEED] rounded-[10px]',
            'bg-[#F9F9FC] py-5 px-8 h-[558px] relative',
          )}
        >
          <p className="text-[24px] font-black text-[#33343D] flex justify-center">
            Basic
          </p>
          {itemBasic.map((item, index) => (
            <p key={index} className="flex gap-x-4 mb-[6px] text-[15px]">
              <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                <IconCheck />
              </span>
              {item}
            </p>
          ))}
          <div className="absolute bottom-0 items-center w-[calc(100%-64px)] mb-[20px]">
            <p className="text-[40px] flex justify-center text-[#01058A] mb-4 font-black">
              $19/<span className="font-thin text-[30px]">month</span>
            </p>
            <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[15px] font-bold justify-cente">
              Subscribe
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'border-[1px] border-[#DCDEED] rounded-[10px]',
            'bg-[#F9F9FC] py-5 px-8 h-[558px] relative',
          )}
        >
          <p className="text-[24px] font-black text-[#33343D] flex justify-center">
            Starter
          </p>
          {itemStarter.map((item, index) => (
            <p key={index} className="flex gap-x-4 mb-[6px] text-[15px]">
              <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                <IconCheck />
              </span>
              {item}
            </p>
          ))}
          <div className="absolute bottom-0 items-center w-[calc(100%-64px)] mb-[20px]">
            <p className="text-[40px] flex justify-center text-[#01058A] mb-4 font-black">
              $39/<span className="font-thin text-[30px]">month</span>
            </p>
            <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[15px] font-bold justify-cente">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <div
          className={classNames(
            'w-1/3 border-[1px] border-[#DCDEED] rounded-[10px]',
            'bg-[#F9F9FC] py-5 px-8 h-[711px] relative',
          )}
        >
          <p className="text-[24px] font-black text-[#33343D] flex justify-center">
            Standard
          </p>
          {itemStandard.map((item, index) => (
            <p key={index} className="flex gap-x-4 mb-[6px] text-[15px]">
              <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                <IconCheck />
              </span>
              {item}
            </p>
          ))}
          <div className="absolute bottom-0 items-center w-[calc(100%-64px)] mb-[20px]">
            <p className="text-[40px] flex justify-center text-[#01058A] mb-4 font-black">
              $79
            </p>
            <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[15px] font-bold justify-cente">
              Subscribe
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'w-1/3 border-[1px] border-[#DCDEED] rounded-[10px]',
            'bg-[#F9F9FC] py-5 px-8 h-[711px] relative',
          )}
        >
          <p className="text-[24px] font-black text-[#33343D] flex justify-center">
            Business
          </p>
          {itemBusiness.map((item, index) => (
            <p key={index} className="flex gap-x-4 mb-[6px] text-[15px]">
              <span className="bg-[#E2F4EC] h-[15px] mt-[4px] rounded-full">
                <IconCheck />
              </span>
              {item}
            </p>
          ))}
          <div className="absolute bottom-0 items-center w-[calc(100%-64px)] mb-[20px]">
            <p className="text-[40px] flex justify-center text-[#01058A] mb-4 font-black">
              $389/<span className="font-thin text-[30px]">month</span>
            </p>
            <button className="flex justify-center items-center m-auto w-[150px] h-[43px] bg-[#4AC1FF] text-white rounded-[50px] text-[15px] font-bold justify-cente">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;

const itemFree = [
  '30 message credits/month',
  '1 chatbot',
  '400,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'Chatbots get deleted after 7 days of inactivity',
];

const itemBasic = [
  '2,000 message credits/month2',
  'chatbots11,000,000 characters/',
  'chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'API access',
  'Zapier integration',
  'Slack integrationWordpress integration',
  'Messenger integration (coming soon)',
  'WhatsApp integration (coming soon)',
];

const itemStarter = [
  '10,000 message credits/month5',
  'chatbots11,000,000 characters/chatbot',
  'Embed on unlimited websites',
  'Upload multiple files',
  'View conversation history',
  'Capture leads',
  'API accessSlack integration',
  'Microsoft Team integration',
  'Messenger integration (coming soon)',
  'Option to Choose GPT-4',
];

const itemStandard = [
  '20,000 message credits/month 8 chatbots',
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

const itemBusiness = [
  '40,000 message credits/month included Messages over the limit will use your OpenAI API Key',
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
