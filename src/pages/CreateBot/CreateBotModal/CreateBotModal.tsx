'use client';
import { Modal, Input } from 'antd';
import { IconCreateBot } from '@/components/IconGroup/IconGroup';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import {
  setNameBot,
  setcaseStudy,
  setPromptExamples,
} from '@/states/buildChatBot/buildChatBot.slice';
import { useNavigate } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateBotModal({ open, onClose }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const options = [
    {
      value: '2',
      label: `${t('Customer', { ns: 'config_bot' })}`,
      prompt: 'customer_support_prompt',
    },
    {
      value: '3',
      label: `${t('Knowledge', { ns: 'config_bot' })}`,
      prompt: 'knowledge_management_prompt',
    },
    {
      value: '4',
      label: `${t('Teaching', { ns: 'config_bot' })}`,
      prompt: 'teaching_assistant_prompt',
    },
    {
      value: '5',
      label: `${t('Lecture', { ns: 'config_bot' })}`,
      prompt: 'lecture_assistant_prompt',
    },
    {
      value: '6',
      label: `${t('Toeic', { ns: 'config_bot' })}`,
      prompt: 'toeic_learner_assistant',
    },
    {
      value: '1',
      label: `${t('Other', { ns: 'config_bot' })}`,
      prompt: 'default_prompt',
    },
  ];
  const [botName, setBotName] = useState('');
  const [caseStudy, setCaseStudy] = useState(options[0].value);
  const [promptExample, setPromptExample] = useState(
    `${t('PromptExample', { ns: 'config_bot' })}`,
  );

  const onCreate = async () => {
    console.log(botName, caseStudy);
    dispatch(setNameBot(botName));
    dispatch(setcaseStudy(caseStudy));
    dispatch(setPromptExamples(promptExample));
    onClose();
    setBotName('');
    navigate(`/create-bot`);
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered={true}
      width={400}
      closeIcon={false}
      className="rounded-xl"
    >
      <div>
        <p className="bg-[#E2EAFF] rounded-full p-1 w-fit">
          <IconCreateBot />
        </p>
        <p className="text-[18px] text-[#101828] font-semibold mb-1">
          Create chatbot
        </p>
        <p className="text-[14px] text-[#667085]">
          Please enter a name for this chatbot
        </p>
        <p className="font-medium text-[#344054]">
          {t('NameBot', { ns: 'config_bot' })}
        </p>
        <Input
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          type="text"
          placeholder=""
          className="h-[44px] text-[16px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <p className="font-medium text-[#344054] mt-4">
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
          className="h-[44px] w-full rounded-[8px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-2 justify-end gap-4.5 mt-[32px]">
          <button
            className="flex justify-center rounded-lg border border-stroke py-2 px-6 font-semibold text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            onClick={() => onClose()}
          >
            {t('Cancel', { ns: 'manage_bot' })}
          </button>
          <button
            className="flex justify-center rounded-lg bg-[#2D3FE7] py-2 px-6 font-semibold text-white hover:shadow-1"
            onClick={() => onCreate()}
          >
            Create Bot
          </button>
        </div>
      </div>
    </Modal>
  );
}
