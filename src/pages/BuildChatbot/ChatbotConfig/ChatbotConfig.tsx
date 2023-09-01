import profileState, { useProfileState } from '@/states/profile';
import { BotPayload, CustomField } from '@/repository/buildChatBot/type';
import React, { useState } from 'react';
import BotConfig from "./BotConfig";
import Prompt from "./Prompt";
import CollectCustomer from "./CollectCustomer";
import {notification} from "antd";
import { createBotTransaction } from '@/repository/buildChatBot';
import { useDispatch } from "react-redux";
import { AppDispatch } from '@/states/store';
import { API_STATUS, KEY_TAB_BUILD_CHAT_BOT } from '@/\bconstants';
import { setActiveTab } from '@/states/buildChatBot/buildChatBot.slice';


const ChatbotConfig = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { data: profile } = useProfileState(profileState);

  const options = [
    {
      value: '1',
      label: 'Custom For Business',
    },
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
  const [rules, setRules] = useState<any>([]);
  const [promptExample, setPromptExample] = useState(
    'I want you to roleplay as "AI Assistant". You will provide me with answers from the given context. If the answer is not included, say exactly "Sorry, I am not familiar with that topic." and stop after that. Refuse to answer any question not answered by the context. Never break character.',
  );

  // CollectCustomer variables
  const [email, setEmail] = useState(true);
  const [name, setName] = useState(true);
  const [phone, setPhone] = useState(false);
  const [custom, setCustom] = useState<CustomField[]>([]);
  const [value, setValue] = useState('Let us know how to contact you');
  // const [field, setField] = useState('Custom field');

  const onSubmit = async () => {
    if (loading) {
      return
    }

    const resultObject: Record<string, boolean> = custom.reduce(
      (acc: any, item) => {
        acc[item.key] = true;
        return acc;
      },
      {}
    );

    const createBotPayload: BotPayload = {
      bot_name: botName,
      case_study: caseStudy,
      collect_customer_info: {
        email: email,
        name: name,
        phone: phone,
        ...resultObject
      },
      rules: rules,
      gpt_model_name: model,
      temperature: creativity,
      custom_prompt: promptExample,
    }

    setLoading(true);

    try {
      if(!botName){
        throw {message: "Name chat bot is required"}
      }
      // await botRepository.createBot(createBotPayload);
      const { meta } = await dispatch(createBotTransaction(createBotPayload)) 

      if(meta.requestStatus === API_STATUS.REJECTED){
        return;
      }
      dispatch(setActiveTab(KEY_TAB_BUILD_CHAT_BOT.IMPORT_DATA));
      notification.success({
        message: 'Create bot successfully.',
      });
      setTimeout(() => {}, 500);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });

      setLoading(false);
    }
  };

  return (
    <>
      <BotConfig botName={botName} setBotName={setBotName} caseStudy={caseStudy} setCaseStudy={setCaseStudy} model={model} setModel={setModel} visibility={visibility} setVisibility={setVisibility} options={options}/>
      <Prompt creativity={creativity} setCreativity={setCreativity} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} rules={rules} setRules={setRules} value={promptExample} setValue={setPromptExample}/>
      <CollectCustomer email={email} setEmail={setEmail} name={name} setName={setName} phone={phone} setPhone={setPhone} custom={custom} setCustom={setCustom} value={value} setValue={setValue}/>
      <div className="flex justify-end">
          <button onClick={onSubmit} className="w-[150px] mt-[20px] h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[13px] font-bold justify-cente">
            Create
          </button>
      </div>
    </>
  );
};

export default ChatbotConfig;
