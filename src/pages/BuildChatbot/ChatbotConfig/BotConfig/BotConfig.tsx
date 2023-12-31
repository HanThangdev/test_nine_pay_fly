import classNames from 'classnames';
import IconRobot from '@/components/IconRobot/IconRobot';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Input, Tooltip } from 'antd';
import React from 'react';
import { BiLockOpenAlt, BiLockAlt } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { OPTION_TONE } from '@/constants/configs_bot';

interface Option {
  value: string;
  label: string;
  prompt: string;
}

interface BotConfigProps {
  botName: string;
  setBotName: (value: string) => void;
  caseStudy: string;
  setCaseStudy: (value: string) => void;
  
  visibility: string;
  setVisibility: (value: string) => void;
  setPromptExample: (value: string) => void;
  options: Option[];
  conversationTone: string;
  setConversationTone: (value: string) => void;
  isUpdate: boolean;
}

const BotConfig: React.FC<BotConfigProps> = ({
  botName,
  setBotName,
  caseStudy,
  setCaseStudy,
  
  visibility,
  setVisibility,
  options,
  conversationTone,
  setConversationTone,
  isUpdate,
  setPromptExample,
}) => {
  const { t } = useTranslation(['config_bot']);

  const OPTION_TONE = [
    {
      value: '1',
      label: `${t('Professional', { ns: 'config_bot' })}`,
    },
    {
      value: '2',
      label: `${t('Humorous', { ns: 'config_bot' })}`,
    },
    {
      value: '3',
      label: `${t('Empathetic', { ns: 'config_bot' })}`,
    },
    {
      value: '4',
      label: `${t('NormalConversation', { ns: 'config_bot' })}`,
    },
    {
      value: '5',
      label: `${t('Academic', { ns: 'config_bot' })}`,
    },
  ];

  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3">
        <IconRobot />
        {t('BotConfig', { ns: 'config_bot' })}
      </h2>
      <div className="flex text-[15px] mt-[16px] items-center">
        <p className="w-[170px] font-bold">
          {t('NameBot', { ns: 'config_bot' })}
        </p>
        <Input
          disabled={isUpdate}
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          type="text"
          placeholder=""
          className="h-[41px] w-[calc(100%-150px)] rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="flex text-[15px] mt-[16px] items-center">
        <p className="w-[170px] flex gap-x-[10px] font-bold items-center">
          {t('SelectCase', { ns: 'config_bot' })}
        </p>
        <select
          value={caseStudy}
          onChange={(e) => {
            setCaseStudy(e.target.value);
            const itemPromptFromCaseStudy = options.find(
              (option) => option.value === e.target.value,
            );
            setPromptExample(`${t(itemPromptFromCaseStudy?.prompt || '')}`);
          }}
          className="h-[41px] w-[calc(100%-150px)] rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex text-[15px] mt-[16px] items-center">
        <p className="w-[170px] flex gap-x-[10px] font-bold items-center">
          {t('ConversationalTone', { ns: 'config_bot' })}
        </p>
        <select
          value={conversationTone}
          onChange={(e) => {
            setConversationTone(e.target.value);
          }}
          className="h-[41px] w-[calc(100%-150px)] rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        >
          {OPTION_TONE.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
          {t('Visibility', { ns: 'config_bot' })}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={t('tooltipPrivate', { ns: 'config_bot' })}
          >
            <AiOutlineQuestionCircle size={18} color="#E77964" />
          </Tooltip>
        </p>
        <div className="mt-[13px] flex gap-x-[30px]">
          <button
            onClick={() => setVisibility('Public')}
            className={classNames(
              'text-[15px] gap-x-[11px] h-[41px] w-[145px] rounded-[10px] flex items-center justify-center bg-[#E8E9F4] text-[#01058A]',
              {
                '!bg-[#4AC1FF] font-bold border-none text-white':
                  visibility === 'Public',
              },
            )}
          >
            <BiLockOpenAlt size={20} />
            {t('Public', { ns: 'config_bot' })}
          </button>
          <button
            onClick={() => setVisibility('Private')}
            className={classNames(
              'text-[15px] gap-x-[11px] h-[41px] w-[145px] rounded-[10px] flex items-center justify-center bg-[#E8E9F4] text-[#01058A]',
              {
                '!bg-[#4AC1FF] font-bold border-none text-white':
                  visibility === 'Private',
              },
            )}
          >
            <BiLockAlt size={20} />
            {t('Private', { ns: 'config_bot' })}
          </button>
        </div>
      </div>
      {/* <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
          {t('Rate', { ns: 'config_bot' })}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={
              'Limit the number of messages sent from one device on the iframe and chat bubble (this limit will not be applied to you on ChatFly, only on websites for your users to prevent abuse).'
            }
          >
            <AiOutlineQuestionCircle size={18} color="#E77964" />
          </Tooltip>
        </p>
        <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
          {t('Limit', { ns: 'config_bot' })}
        </p>
        <p className="text-[15px] text-[#A7A7B0]">
          {t('Message', { ns: 'config_bot' })}
        </p>
        <input
          type="text"
          placeholder={`${t('ManyMessage', { ns: 'config_bot' })}`}
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div> */}
    </div>
  );
};

export default BotConfig;
