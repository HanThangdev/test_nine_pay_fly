'use client';
import { Modal, Input, Select, Form, notification } from 'antd';
import { IconCreateBot } from '@/components/IconGroup/IconGroup';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import {
  setNameBotStore,
  setCaseStudyStore,
  setPromptExamplesStore,
  resetStateBuild,
} from '@/states/buildChatBot/buildChatBot.slice';
import { useNavigate } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

type FieldType = {
  botName?: string;
  caseStudy?: string;
};

export default function CreateBotModal({ open, onClose }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [form] = Form.useForm();
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
  const initValues = {
    botName: '',
    caseStudy: options[0].value,
  };
  const { ownerChatbot } = useSelector((state: RootState) => state.manageBot);
  const { currentPricingPlan } = useSelector(
    (state: RootState) => state.pricing,
  );

  const onFinish = async () => {
    if (currentPricingPlan === 'Free' && ownerChatbot.length > 0) {
      notification.error({
        message: `${t('limitBot', { ns: 'manage_bot' })}`,
      });
      onClose();
    } else {
      dispatch(resetStateBuild());
      dispatch(setNameBotStore(botName));
      dispatch(setCaseStudyStore(caseStudy));
      dispatch(setPromptExamplesStore(promptExample));
      setBotName('');
      setCaseStudy(options[0].value);
      navigate(`/create-bot`);
      form.resetFields(['botName']);
      onClose();
    }
  };

  useEffect(() => {
    setBotName('');
    form.resetFields();
  }, [open]);

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
        <Form
          autoComplete="off"
          form={form}
          name="create-bot"
          onFinish={onFinish}
          initialValues={initValues}
        >
          <p className="bg-[#E2EAFF] rounded-full p-1 w-fit">
            <IconCreateBot />
          </p>
          <p className="text-[18px] text-[#101828] font-semibold mb-1">
            {t('New', { ns: 'manage_bot' })}
          </p>
          <p className="text-[14px] text-[#667085]">
            {t('enterName', { ns: 'config_bot' })}
          </p>
          <p className="font-medium text-[#344054]">
            {t('NameBot', { ns: 'config_bot' })}
          </p>
          <Form.Item<FieldType>
            label=""
            name="botName"
            rules={[{ required: true, message: 'Please input your bot name!' }]}
          >
            <Input
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              type="text"
              placeholder=""
              className="h-[44px] text-[16px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
          </Form.Item>
          <p className="font-medium text-[#344054] mt-4">
            {t('SelectCase', { ns: 'config_bot' })}
          </p>
          <Form.Item<FieldType> label="" name="caseStudy">
            <Select
              value={caseStudy}
              defaultValue={caseStudy}
              onChange={(value) => {
                setCaseStudy(value);
                const itemPromptFromCaseStudy = options.find(
                  (option) => option.value === value,
                );
                setPromptExample(`${t(itemPromptFromCaseStudy?.prompt || '')}`);
              }}
              className="h-[44px] w-full rounded-[8px] border-[#DCDEED] bg-[#ffffffeb] outline-none focus:border-primary focus-visible:shadow-none"
              options={options}
            />
          </Form.Item>
          <div className="grid grid-cols-2 justify-end gap-4.5 mt-[32px]">
            <button
              type="button"
              className="flex justify-center rounded-lg border border-stroke py-2 px-6 font-semibold text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => {
                onClose();
              }}
            >
              {t('Cancel', { ns: 'manage_bot' })}
            </button>
            <button
              className="flex justify-center rounded-lg bg-[#2D3FE7] py-2 px-6 font-semibold text-white hover:shadow-1"
              type="submit"
            >
              {t('creatbot', { ns: 'config_bot' })}
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
