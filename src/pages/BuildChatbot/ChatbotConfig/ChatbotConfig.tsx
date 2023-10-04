import { BotPayload, CustomField } from '@/repository/buildChatBot/type';
import { useEffect, useMemo, useState } from 'react';
import BotConfig from './BotConfig';
import Prompt from './Prompt';
import CollectCustomer from './CollectCustomer';
import { Button, notification } from 'antd';
import {
  createBotTransaction,
  updateBotTransaction,
} from '@/repository/buildChatBot';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { API_STATUS, KEY_TAB_BUILD_CHAT_BOT } from '@/constants';
import { setActiveTab } from '@/states/buildChatBot/buildChatBot.slice';
import {
  convertCustomValue,
  isEmptyObjectOrArray,
  objectToQueryString,
} from '@/utils/utils';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBotTransaction } from '@/repository/manageChatbot';
import { OPTION_TONE } from '@/constants/configs_bot';

const ChatbotConfig = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.buildChatBot);
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

  const [loading, setLoading] = useState<boolean>();

  // BotConfig variables
  const [botName, setBotName] = useState('');
  const [caseStudy, setCaseStudy] = useState(options[0].value);
  const [conversationTone, setConversationTone] = useState(
    OPTION_TONE[0].value,
  );
  const [model, setModel] = useState('GPT - 3.5');
  const [visibility, setVisibility] = useState('Public');

  // Prompt variables
  const [creativity, setCreativity] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rules, setRules] = useState<Array<string>>(['']);
  const [promptExample, setPromptExample] = useState(
    `${t('PromptExample', { ns: 'config_bot' })}`,
  );

  // CollectCustomer variables
  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const [phone, setPhone] = useState(false);
  const [numberShowing, setNumberShowing] = useState(0);
  const [custom, setCustom] = useState<CustomField[]>([]);
  // const [field, setField] = useState('Custom field');

  const onSubmit = async () => {
    if (loading) {
      return;
    }

    const resultObject: Record<string, boolean> = custom.reduce(
      (acc: any, item) => {
        acc[item.key] = true;
        return acc;
      },
      {},
    );

    const createBotPayload: BotPayload = {
      bot_name: botName,
      case_study: caseStudy,
      collect_customer_info: {
        email: email,
        name: name,
        phone: phone,
        numberShowing: numberShowing,
        ...resultObject,
      },
      rules: rules,
      gpt_model_name: model,
      temperature: creativity,
      custom_prompt: promptExample,
    };

    setLoading(true);

    try {
      if (!botName) {
        throw { message: `${t('requiredName', { ns: 'config_bot' })}` };
      }

      let response;
      //Check have bot if not have status is update else status is create
      if (!isUpdate) {
        response = await dispatch(createBotTransaction(createBotPayload));
      } else {
        const updateBotPayload = {
          ...createBotPayload,
          user_id: data.user_id,
          id: data.id,
        };
        response = await dispatch(updateBotTransaction(updateBotPayload));
      }

      const { meta } = response;

      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }

      dispatch(setActiveTab(KEY_TAB_BUILD_CHAT_BOT.IMPORT_DATA));
      dispatch(getBotTransaction());
      notification.success({
        message: !isUpdate
          ? `${t('createSuccess', { ns: 'config_bot' })}`
          : `${t('upadetSuccess', { ns: 'config_bot' })}`,
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isEmptyObjectOrArray(data)) {
      const {
        id,
        bot_name,
        case_study,
        gpt_model_name,
        rules,
        temperature,
        custom_prompt,
        collect_customer_info,
      } = data;
      navigate(`/build-chatbots/${id}`);

      bot_name && setBotName(bot_name);
      case_study && setCaseStudy(case_study);
      gpt_model_name && setModel(gpt_model_name);

      temperature && setCreativity(temperature);
      custom_prompt && setPromptExample(custom_prompt);
      rules && setRules(rules);
      setEmail(collect_customer_info?.email);
      setName(collect_customer_info?.name);
      setPhone(collect_customer_info?.phone);
      setCustom(convertCustomValue(collect_customer_info));
      setNumberShowing(collect_customer_info.numberShowing);
    }
  }, [data]);

  //Check have bot if not have status is update else status is create
  const isUpdate = useMemo(() => !isEmptyObjectOrArray(data), [data]);

  return (
    <>
      <BotConfig
        botName={botName}
        setBotName={setBotName}
        caseStudy={caseStudy}
        setCaseStudy={setCaseStudy}
        visibility={visibility}
        setVisibility={setVisibility}
        options={options}
        isUpdate={isUpdate}
        setPromptExample={setPromptExample}
        setConversationTone={setConversationTone}
        conversationTone={conversationTone}
      />
      <Prompt
        model={model}
        setModel={setModel}
        creativity={creativity}
        setCreativity={setCreativity}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        rules={rules}
        setRules={setRules}
        value={promptExample}
        setValue={setPromptExample}
      />
      <CollectCustomer
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        custom={custom}
        setCustom={setCustom}
        numberShowing={numberShowing}
        setNumberShowing={setNumberShowing}
      />
      <div className="flex justify-end">
        <Button
          loading={loading}
          disabled={loading}
          onClick={onSubmit}
          className="w-[150px] mt-[20px] h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[15px] font-bold justify-cente"
        >
          {isUpdate
            ? `${t('Update', { ns: 'config_bot' })}`
            : `${t('Create', { ns: 'config_bot' })}`}
        </Button>
      </div>
    </>
  );
};

export default ChatbotConfig;
