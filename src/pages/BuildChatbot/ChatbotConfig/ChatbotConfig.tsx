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

const ChatbotConfig = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const navigate = useNavigate();
  const options = [
    {
      value: '2',
      label: 'Customer Support',
    },
    {
      value: '3',
      label: 'Knowledge Management',
    },
    {
      value: '4',
      label: 'Teaching Education',
    },
    {
      value: '1',
      label: 'Other',
    },
  ];

  const [loading, setLoading] = useState<boolean>();

  // BotConfig variables
  const [botName, setBotName] = useState('');
  const [caseStudy, setCaseStudy] = useState(options[0].value);
  const [model, setModel] = useState('GPT - 3.5');
  const [visibility, setVisibility] = useState('Public');

  // Prompt variables
  const [creativity, setCreativity] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rules, setRules] = useState<Array<string>>(['']);
  const [promptExample, setPromptExample] = useState(
    'I want you to roleplay as "AI Assistant". You will provide me with answers from the given context. If the answer is not included, say exactly "Sorry, I am not familiar with that topic." and stop after that. Refuse to answer any question not answered by the context. Never break character.',
  );

  // CollectCustomer variables
  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const [phone, setPhone] = useState(false);
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
        user_id,
        bot_name,
        case_study,
        gpt_model_name,
        rules,
        temperature,
        custom_prompt,
        collect_customer_info,
      } = data;
      const queryString = objectToQueryString({ id, user_id });
      navigate(`/build-chatbots?${queryString}`);

      setBotName(bot_name);
      setCaseStudy(case_study);
      setModel(gpt_model_name);

      setCreativity(temperature);
      setPromptExample(custom_prompt);
      setRules(rules);
      setEmail(collect_customer_info?.email);
      setName(collect_customer_info?.name);
      setPhone(collect_customer_info?.phone);
      setCustom(convertCustomValue(collect_customer_info));
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
        model={model}
        setModel={setModel}
        visibility={visibility}
        setVisibility={setVisibility}
        options={options}
        isUpdate={isUpdate}
      />
      <Prompt
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
