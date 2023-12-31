import { useTranslation } from 'react-i18next';
import { Input, Select, notification } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { updateBotTransaction } from '@/repository/buildChatBot';
import { API_STATUS } from '@/constants';
import { OPTION_TONE } from '@/constants/configs_bot';

interface Props {
  save: boolean;
  step: string;
  saveSuccess: () => void;
}

const BasicInfor = ({ save, step, saveSuccess }: Props) => {
  const { t } = useTranslation();
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
  const dispatch = useDispatch<AppDispatch>();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const [caseStudy, setCaseStudy] = useState(options[0].value);
  const [conversationTone, setConversationTone] = useState(
    OPTION_TONE[0].value,
  );
  const [promptExample, setPromptExample] = useState(
    `${t('PromptExample', { ns: 'config_bot' })}`,
  );
  useEffect(() => {
    if (!isEmptyObjectOrArray(botInfos)) {
      setCaseStudy(botInfos.case_study);
    }
  }, [botInfos]);

  const onSubmit = async () => {
    try {
      const updateBotPayload = {
        bot_name: botInfos.bot_name,
        case_study: caseStudy ? caseStudy : botInfos.case_study,
        collect_customer_info: botInfos?.collect_customer_info,
        rules: botInfos.rules,
        gpt_model_name: botInfos.model,
        temperature: botInfos.creativity,
        custom_prompt: promptExample,
        user_id: botInfos.user_id,
        id: botInfos.id,
      };
      let response = await dispatch(updateBotTransaction(updateBotPayload));
      const { meta } = response;
      saveSuccess();
      notification.success({
        message: `${t('upadetSuccess', { ns: 'config_bot' })}`,
      });

      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  useEffect(() => {
    if (save && step === 'basicInfor') {
      onSubmit();
    }
  }, [save, step]);

  return (
    <div>
      <p className="font-medium text-[#344054]">
        {t('NameBot', { ns: 'config_bot' })}
      </p>
      <Input
        disabled
        value={botInfos?.bot_name}
        type="text"
        placeholder=""
        className="h-[44px] text-[16px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
      />
      <p className="font-medium text-[#344054] mt-4">
        {t('SelectCase', { ns: 'config_bot' })}
      </p>
      <Select
        value={caseStudy}
        onChange={(value) => {
          setCaseStudy(value);
          const itemPromptFromCaseStudy = options.find(
            (option) => option.value === value,
          );
          setPromptExample(`${t(itemPromptFromCaseStudy?.prompt || '')}`);
        }}
        className="h-[44px] w-full rounded-[8px] border-[#DCDEED] bg-[#ffffffeb] outline-none focus:border-primary focus-visible:shadow-none"
        options={options}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <p className="font-medium text-[#344054] mt-4">
        {t('ConversationalTone', { ns: 'config_bot' })}
      </p>
      <Select
        value={conversationTone}
        onChange={(e) => {
          setConversationTone(e);
        }}
        className="h-[44px] w-full rounded-[8px] border-[#DCDEED] bg-[#ffffffeb] outline-none focus:border-primary focus-visible:shadow-none"
        options={OPTION_TONE}
      >
      </Select>
    </div>
  );
};

export default BasicInfor;
