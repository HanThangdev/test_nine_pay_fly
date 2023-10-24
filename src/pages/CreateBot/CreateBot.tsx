import classNames from 'classnames';
import Header from '@/components/header';
import { useTranslation } from 'react-i18next';
import { Steps, notification } from 'antd';
import { useEffect, useState } from 'react';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import {
  IconConfig,
  IconImportData,
  IconAdvance,
  IconTest,
  IconStyle,
} from '@/components/IconGroup/IconGroup';
import Config from './Config';
import ImportData from './ImportData';
import ChatWidget from './AdvanceSetting/ChatWidget';
import Styling from './AdvanceSetting/Styling';
import TestConverstation from './TestConverstation';
import { useNavigate, useParams } from 'react-router-dom';
import { BotPayload, CustomField } from '@/repository/buildChatBot/type';
import { AppDispatch } from '@/states/store';
import { useDispatch } from 'react-redux';
import { createBotTransaction } from '@/repository/buildChatBot';
import { API_STATUS } from '@/constants';
import { getBotTransaction } from '@/repository/manageChatbot';

enum STEP {
  config,
  import_data,
  advance,
  styling,
  test_converstation,
}

const CreateBot = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [custom, setCustom] = useState<CustomField[]>([]);
  const { nameBot, caseStudy, promptExample } = useBuildChatbot();
  const [steps, setSteps] = useState<STEP>(STEP.config);
  const [payloadCreateBot, setPayloadCreateBot] = useState<BotPayload>({
    bot_name: nameBot,
    case_study: caseStudy,
    custom_prompt: promptExample,
    collect_customer_info: {},
    gpt_model_name: 'GPT - 3.5 - 16k',
    rules: [],
    temperature: 0,
  });

  useEffect(() => {
    if (!nameBot) {
      navigate('/');
    }
  }, [nameBot]);

  const onCreateBot = async () => {
    try {
      const resultCustom: Record<string, boolean> = custom.reduce(
        (acc: any, item) => {
          acc[item.key] = true;
          return acc;
        },
        {},
      );
      const payloadFinal: BotPayload = {
        ...payloadCreateBot,
        collect_customer_info: {
          ...payloadCreateBot.collect_customer_info,
          ...resultCustom,
        },
      };
      const response = await dispatch(createBotTransaction(payloadFinal));
      const { meta, payload}: any  = response;
      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }
      navigate(`/create-bot/${payload?.data?.id}`);
      notification.success({
        message: `${t('createSuccess', { ns: 'config_bot' })}`,
      });
      dispatch(getBotTransaction());
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  const onSubmit = () => {
    if (steps === STEP.config && !id) {
      onCreateBot();
    }
    setSteps(steps + 1);
  };

  return (
    <>
      <Header
        children={
          <>
            <div className="flex justify-between items-center gap-x-3 w-[calc(100%-360px)]">
              <p className="mb-0 text-[#1F2937] font-medium">{nameBot}</p>
              <div className="flex text-[12px] items-center">
                <div
                  onClick={() => setSteps(STEP.config)}
                  className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]"
                >
                  <IconConfig /> Config
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  onClick={() => setSteps(STEP.import_data)}
                  className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]"
                >
                  <IconImportData /> Import Data
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  onClick={() => setSteps(STEP.advance)}
                  className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]"
                >
                  <IconAdvance /> Advance
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  onClick={() => setSteps(STEP.styling)}
                  className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]"
                >
                  <IconStyle /> Styling
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  onClick={() => setSteps(STEP.test_converstation)}
                  className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]"
                >
                  <IconTest />
                  Test converstation
                </div>
              </div>
            </div>
          </>
        }
      />
      <div className="p-[20px] create-bot ">
        <div
          className={classNames(
            'w-full h-full bg-[#FCFCFC] rounded-[12px] py-[12px] px-[16px] min-h-[calc(100vh-180px)] mb-[65px]',
            {
              '!bg-transparent !p-0':
                steps === STEP.advance ||
                steps === STEP.styling ||
                steps === STEP.test_converstation,
            },
          )}
        >
          {steps === STEP.config && (
            <Config
              setPayloadCreateBot={setPayloadCreateBot}
              payloadCreateBot={payloadCreateBot}
              setCustom={setCustom}
              custom={custom}
            />
          )}
          {steps === STEP.import_data && <ImportData />}
          {steps === STEP.advance && <ChatWidget />}
          {steps === STEP.styling && <Styling />}
          {steps === STEP.test_converstation && <TestConverstation />}
        </div>
      </div>
      <div className="fixed bottom-0 w-[calc(100%-240px)] z-999 py-[9px] px-[20px] bg-[#FCFCFC] border-t-[1px] border-[#D1D5DB] flex justify-between">
        <p
          className="mb-0 border-[1px] text-[#344054] py-[10px] px-4 rounded-lg font-semibold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Exit
        </p>
        <div className="flex gap-x-2">
          {steps !== STEP.config && (
            <button
              onClick={() => setSteps(steps - 1)}
              className="bg-[#F5F8FF] py-[10px] px-4 rounded-lg text-[#415EC6]"
            >
              Previous step
            </button>
          )}
          <button
            onClick={onSubmit}
            className="bg-[#2D3FE7] py-[10px] px-4 rounded-lg text-white"
          >
            {(steps === STEP.config && !id) ? 'Create bot' : 'Next step'}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBot;
