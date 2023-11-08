import {
  IconConfigDone,
  IconImportDataDone,
  IconAdvanceDone,
  IconStyleDone,
} from '@/components/IconGroup/IconGroup';
import ChatBot from './ChatBot';
import { AppDispatch, RootState } from '@/states/store';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import {
  getAdvanceSettingTransaction,
  getRateLimitTransaction,
} from '@/repository/buildChatBot';
import { useParams } from 'react-router-dom';

const TestConverstation = () => {
  const { t } = useTranslation();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const { includesResource } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const [messageCount, setMessageCount] = useState(0);
  const getRateLimit = async () => {
    const res: any = await dispatch(getRateLimitTransaction(botInfos?.id));
    setMessageCount(res.payload.data.data);
  };

  useEffect(() => {
    getRateLimit();
  }, []);
  const [dataSet, setDataSet] = useState<any>();
  const getAdvance = async () => {
    const res: any = await dispatch(
      getAdvanceSettingTransaction({ bot_id: botInfos?.id || id }),
    );

    setDataSet({
      ...dataSet,
      display_name: res.payload.data.display_name,
      initial_message: res.payload.data.initial_message,
      theme: res.payload.data.theme,
      suggest_messages: res.payload.data.suggest_messages,
      bot_avatar_url: res.payload.data.bot_avatar_url,
      chat_message_color: res.payload.data.chat_message_color,
      chat_icon_url: res.payload.data.chat_icon_url,
      chat_bubble_button_color: res.payload.data.chat_bubble_button_color,
      align_chat_bubble_button: res.payload.data.align_chat_bubble_button,
      auto_show_initial_message_after:
        res.payload.data.auto_show_initial_message_after,
    });
  };

  useEffect(() => {
    getAdvance();
  }, []);

  return (
    <>
      <div className="flex gap-x-4">
        <div className="p-4 w-[60%] bg-[#FCFCFC] rounded-xl">
          <div className="text-[15px]">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconConfigDone />
              {t('listConfig')}
            </p>
            <div className="ml-2">
              <li className="flex items-center gap-x-2">
                <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                {messageCount} {t('messagesDay', { ns: 'config_bot' })}
              </li>
              <li className="flex items-center gap-x-2">
                <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                {botInfos.gpt_model_name}
              </li>
              <li className="flex items-center gap-x-2">
                <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                Collect{' '}
                {Object.keys(botInfos.collect_customer_info).map((key, i) => {
                  return <span key={key}>{key}, </span>;
                })}
              </li>
            </div>
          </div>
          <div className="text-[15px] mt-3">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconImportDataDone />
              {t('Datanes')}
            </p>
            <div className="ml-2">
              <li className="flex items-center gap-x-2">
                <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                {includesResourceData?.resource[0]?.number_of_resources || 0}{' '}
                {(includesResourceData?.resource[0]?.number_of_resources || 0) >
                1
                  ? `${t('Links', { ns: 'config_bot' })}`
                  : `${t('Link', { ns: 'config_bot' })}`}
              </li>
              <li className="flex items-center gap-x-2">
                <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                {includesResourceData?.resource[1]?.number_of_resources || 0}{' '}
                {(includesResourceData?.resource[1]?.number_of_resources || 0) >
                1
                  ? `${t('Files', { ns: 'config_bot' })}`
                  : `${t('File', { ns: 'config_bot' })}`}
              </li>
              <li className="flex items-center gap-x-2">
                <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                {includesResourceData?.resource[2]?.number_of_resources || 0}{' '}
                Q&A
              </li>
            </div>
          </div>
          <div className="text-[15px] mt-3">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconAdvanceDone />
              {t('Advance')}
            </p>
            <div className="ml-2">
              {dataSet?.initial_message && (
                <li className="flex items-center gap-x-2">
                  <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                  {t('behavior')}
                </li>
              )}
              {dataSet?.suggest_messages && (
                <li className="flex items-center gap-x-2">
                  <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                  {t('suggested')}
                </li>
              )}
            </div>
          </div>
          <div className="text-[15px] mt-3">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconStyleDone />
              {t('Styling')}
            </p>
            <div className="ml-2">
              {dataSet?.chat_message_color && (
                <li className="flex items-center gap-x-2">
                  <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                  {t('userColor')}
                </li>
              )}
              {dataSet?.initial_message && (
                <li className="flex items-center gap-x-2">
                  <p className="mb-0 bg-[#667085] w-[5px] h-[5px] rounded-full"></p>
                  {t('bubbleColor')}
                </li>
              )}
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <ChatBot />
        </div>
      </div>
    </>
  );
};

export default TestConverstation;
