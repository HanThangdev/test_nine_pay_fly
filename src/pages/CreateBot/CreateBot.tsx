import classNames from 'classnames';
import Header from '@/components/header';
import { useTranslation } from 'react-i18next';
import { Steps, notification } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import {
  IconConfig,
  IconConfigDone,
  IconImportData,
  IconImportDataDo,
  IconImportDataDone,
  IconAdvance,
  IconTest,
  IconStyle,
  IconAdvanceDo,
  IconAdvanceDone,
  IconStyleDo,
  IconStyleDone,
  IconTestDo,
} from '@/components/IconGroup/IconGroup';
import Config from './Config';
import ImportData from './ImportData';
import ChatWidget from './AdvanceSetting/ChatWidget';
import Styling from './AdvanceSetting/Styling';
import TestConverstation from './TestConverstation';
import { useNavigate, useParams } from 'react-router-dom';
import { BotPayload, CustomField } from '@/repository/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBotTransaction,
  updateBotTransaction,
  updateRateLimitTransaction,
  getRateLimitTransaction,
} from '@/repository/buildChatBot';
import { API_STATUS } from '@/constants';
import { getBotTransaction } from '@/repository/manageChatbot';
import { FinishModalWrapper } from './FinishModal';

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
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [custom, setCustom] = useState<CustomField[]>([]);
  const { nameBot, caseStudy, promptExample } = useBuildChatbot();
  const [steps, setSteps] = useState<STEP>(STEP.config);
  const [indexStep, setIndexStep] = useState(0);
  const [rules, setRules] = useState<Array<string>>(['']);
  const [save, setSave] = useState(false);
  const [payloadCreateBot, setPayloadCreateBot] = useState<BotPayload>({
    bot_name: nameBot,
    case_study: caseStudy,
    custom_prompt: promptExample,
    collect_customer_info: {},
    gpt_model_name: 'GPT - 3.5 - 16k',
    rules: [],
    temperature: 0,
  });
  const [messageCount, setMessageCount] = useState(0);
  const [count, setCount] = useState(0);

  const { includesResource } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );

  useEffect(() => {
    if (!nameBot) {
      navigate('/');
    }
  }, [nameBot]);

  useEffect(() => {
    if (steps === STEP.config) {
      setIndexStep(1);
    }
    if (steps === STEP.import_data) {
      setIndexStep(2);
    }
    if (steps === STEP.advance) {
      setIndexStep(3);
    }
    if (steps === STEP.styling) {
      setIndexStep(4);
    }
    if (steps === STEP.test_converstation) {
      setIndexStep(5);
    }
  }, [steps]);

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
        rules: rules,
        temperature: payloadCreateBot.temperature,
        custom_prompt: payloadCreateBot.custom_prompt,
      };
      const response = await dispatch(createBotTransaction(payloadFinal));

      const { meta, payload }: any = response;
      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }
      if (payload) {
        await dispatch(
          updateRateLimitTransaction({
            bot_id: payload.data.id,
            rate_limit_per_day: messageCount,
          }),
        );
      }
      setSave(false);
      navigate(`/create-bot/${payload?.data?.id}`);
      notification.success({
        message: `${t('createSuccess', { ns: 'config_bot' })}`,
      });
      dispatch(getBotTransaction());
      getRateLimit(payload.data.id);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  const onUpdateBot = async () => {
    if (!id) {
      return;
    }

    try {
      const resultCustom: Record<string, boolean> = custom.reduce(
        (acc: any, item) => {
          acc[item.key] = true;
          return acc;
        },
        {},
      );
      const updateBotPayload = {
        ...payloadCreateBot,
        collect_customer_info: {
          ...payloadCreateBot.collect_customer_info,
          ...resultCustom,
        },
        rules: rules,
        temperature: payloadCreateBot.temperature,
        custom_prompt: payloadCreateBot.custom_prompt,
        user_id: botInfos.user_id,
        id: id,
      };
      const response = await dispatch(updateBotTransaction(updateBotPayload));

      if (messageCount !== count) {
        await dispatch(
          updateRateLimitTransaction({
            bot_id: botInfos.id,
            rate_limit_per_day: messageCount,
          }),
        );
      }
      const { meta }: any = response;
      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }
      setSave(false);
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
    if (steps === STEP.config && id) {
      onUpdateBot();
    }
    setSave(true);
    setTimeout(() => {
      setSteps(steps + 1);
    }, 1000);
  };

  const getRateLimit = async (id: string) => {
    const res: any = await dispatch(getRateLimitTransaction(id));
    setMessageCount(res.payload.data.data);
    setCount(res.payload.data.data);
  };

  useEffect(() => {
    if (botInfos) {
      getRateLimit(botInfos.id);
    }
  }, [botInfos]);
  return (
    <>
      <Header
        children={
          <>
            <div className="flex justify-between items-center gap-x-3 w-[calc(100%-380px)]">
              <p className="mb-0 text-[#1F2937] font-medium">{nameBot}</p>
              <div className="flex text-[12px] items-center">
                <div
                  className={classNames(
                    'bg-[#F3F4F6] flex items-center gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]',
                    {
                      'bg-[#DFEAFB] border-[1px] border-[#A4C7FB] text-[#2D3FE7]':
                        steps === STEP.config,
                      'bg-[#DEF5E8] border-[1px] border-[#6FCF97] text-[#219653]':
                        indexStep > 1,
                    },
                  )}
                >
                  {indexStep === 1 ? <IconConfig /> : <IconConfigDone />}
                  {t('ChatbotConfig')}
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  className={classNames(
                    'bg-[#F3F4F6] flex items-center gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]',
                    {
                      'bg-[#DFEAFB] border-[1px] border-[#A4C7FB] text-[#2D3FE7]':
                        steps === STEP.import_data,
                      'bg-[#DEF5E8] border-[1px] border-[#6FCF97] text-[#219653]':
                        indexStep > 2,
                    },
                  )}
                >
                  {indexStep === 2 ? (
                    <IconImportDataDo />
                  ) : indexStep > 2 ? (
                    <IconImportDataDone />
                  ) : (
                    <IconImportData />
                  )}
                  {t('import')}
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  className={classNames(
                    'bg-[#F3F4F6] flex items-center gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]',
                    {
                      'bg-[#DFEAFB] border-[1px] border-[#A4C7FB] text-[#2D3FE7]':
                        steps === STEP.advance,
                      'bg-[#DEF5E8] border-[1px] border-[#6FCF97] text-[#219653]':
                        indexStep > 3,
                    },
                  )}
                >
                  {indexStep === 3 ? (
                    <IconAdvanceDo />
                  ) : indexStep > 3 ? (
                    <IconAdvanceDone />
                  ) : (
                    <IconAdvance />
                  )}
                  {t('Advance')}
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  className={classNames(
                    'bg-[#F3F4F6] flex items-center gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]',
                    {
                      'bg-[#DFEAFB] border-[1px] border-[#A4C7FB] text-[#2D3FE7]':
                        steps === STEP.styling,
                      'bg-[#DEF5E8] border-[1px] border-[#6FCF97] text-[#219653]':
                        indexStep > 4,
                    },
                  )}
                >
                  {indexStep === 4 ? (
                    <IconStyleDo />
                  ) : indexStep > 4 ? (
                    <IconStyleDone />
                  ) : (
                    <IconStyle />
                  )}
                  {t('Styling')}
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  className={classNames(
                    'bg-[#F3F4F6] flex items-center gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]',
                    {
                      'bg-[#DFEAFB] border-[1px] border-[#A4C7FB] text-[#2D3FE7]':
                        steps === STEP.test_converstation,
                    },
                  )}
                >
                  {indexStep === 5 ? <IconTestDo /> : <IconTest />}
                  {t('test')}
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
              rules={rules}
              setRules={setRules}
              messageCount={messageCount}
              setMessageCount={setMessageCount}
            />
          )}
          {steps === STEP.import_data && <ImportData />}
          {steps === STEP.advance && (
            <ChatWidget
              save={save}
              saveSuccess={() => setSave(false)}
              step={steps}
            />
          )}
          {steps === STEP.styling && (
            <Styling
              save={save}
              saveSuccess={() => setSave(false)}
              step={steps}
            />
          )}
          {steps === STEP.test_converstation && <TestConverstation />}
        </div>
      </div>
      <div className="fixed bottom-0 w-[calc(100%-240px)] z-999 py-[9px] px-[20px] bg-[#FCFCFC] border-t-[1px] border-[#D1D5DB] flex justify-between">
        <p
          className="mb-0 border-[1px] text-[#344054] py-[10px] px-4 rounded-lg font-semibold cursor-pointer"
          onClick={() => navigate('/')}
        >
          {t('Exit')}
        </p>
        <div className="flex gap-x-2">
          {steps !== STEP.config && (
            <button
              onClick={() => setSteps(steps - 1)}
              className="bg-[#F5F8FF] py-[10px] px-4 rounded-lg text-[#415EC6]"
            >
              {t('PreStep')}
            </button>
          )}
          {steps !== STEP.test_converstation && (
            <button
              onClick={onSubmit}
              disabled={steps === STEP.styling && !includesResourceData}
              className={classNames(
                'bg-[#2D3FE7] py-[10px] px-4 rounded-lg text-white',
                {
                  'opacity-50': steps === STEP.styling && !includesResourceData,
                },
              )}
            >
              {steps === STEP.config && !id
                ? `${t('creatbot', { ns: 'config_bot' })}`
                : `${t('NextStep')}`}
            </button>
          )}
          {steps === STEP.test_converstation && (
            <FinishModalWrapper>
              {({ onOpen }) => (
                <button
                  className={classNames(
                    'bg-[#2D3FE7] py-[10px] px-4 rounded-lg text-white',
                  )}
                  onClick={onOpen}
                >
                  {t('Finish')}
                </button>
              )}
            </FinishModalWrapper>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateBot;
