import IconReload from '@/components/IconReload/IconReload';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconDown from '@/components/IconDown/IconDown';
import { useTranslation } from 'react-i18next';
import { BiSolidFileExport } from 'react-icons/bi';
import { DatePicker, Select } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { useManageChatbot } from '@/states/manageBot/manageBot.selector';
import { ResponseManageChatbot } from '@/states/manageBot/type';
import { IOptionBotSelect } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { getBotTransaction } from '@/repository/manageChatbot';
import dayjs from 'dayjs';
import { getAllConversations } from '@/repository/conversations';
import classNames from 'classnames';
import { GetAllConversationsPayload } from '@/repository/conversations/type';
import useScrollToLastElementChild from '@/hooks/useScrollToLastElementChild';
import relativeTime from 'dayjs/plugin/relativeTime';
import { convertStringToParagraphs } from '@/utils/format';
import { HistoryChat } from '@/states/chat/type';

dayjs.extend(relativeTime);

const { RangePicker } = DatePicker;

const Conversations = () => {
  const { t } = useTranslation();
  const { ownerChatbot } = useManageChatbot();
  const dispatch = useDispatch<AppDispatch>();
  const { conversations } = useSelector(
    (state: RootState) => state.conversations,
  );
  const { onGetBot } = useManageChatbot();

  const DEFAULT_FROM_DATE = dayjs().subtract(1, 'month');
  const DEFAULT_TO_DATE = dayjs();
  const [fromDate, setFromDate] = useState<dayjs.Dayjs>(DEFAULT_FROM_DATE);
  const [toDate, setToDate] = useState<dayjs.Dayjs>(DEFAULT_TO_DATE);
  const [selectedBot, setSelectedBot] = useState<IOptionBotSelect>();
  const [selectedConversationId, setSelectedConversationId] =
    useState<string>();

  const { containerRef: chatContentRef } =
    useScrollToLastElementChild<HTMLDivElement>([
      selectedConversationId,
      conversations,
    ]);

  useEffect(() => {
    if (isEmptyObjectOrArray(ownerChatbot)) {
      dispatch(getBotTransaction());
    }
  }, []);

  const handleFetchConversation = useCallback(() => {
    if (selectedBot) {
      const { bot_id } = selectedBot;
      const paramsGetAllConversations: GetAllConversationsPayload = {
        bot_id,
        date_from: fromDate.toISOString(),
        date_to: toDate.toISOString(),
      };
      dispatch(getAllConversations(paramsGetAllConversations));
    }
  }, [selectedBot, fromDate, toDate]);

  const botOptions = useMemo(() => {
    let convertedArray: IOptionBotSelect[] | undefined = undefined;
    if (ownerChatbot) {
      convertedArray = ownerChatbot.map((item: ResponseManageChatbot) => {
        return {
          value: item.id,
          label: item.bot_name,
          bot_id: item.id,
        };
      });
    }
    return convertedArray;
  }, [ownerChatbot]);

  useEffect(() => {
    handleFetchConversation();
  }, [handleFetchConversation]);

  // Set the latest chatbot as default
  useEffect(() => {
    if (botOptions && !selectedBot) {
      const latestChatBot = botOptions[0];
      setSelectedBot(latestChatBot);
    }
  }, [botOptions]);

  // Set the latest conversation as default
  useEffect(() => {
    if (selectedBot && conversations.length) {
      const latestConversationId = conversations[0].session_id;
      setSelectedConversationId(latestConversationId);
    }
  }, [selectedBot, conversations]);

  const selectedConversation = useMemo(() => {
    return conversations.find(
      (conversation) => conversation.session_id === selectedConversationId,
    );
  }, [selectedConversationId, conversations]);

  const handleSelectBotChange = (
    _: any,
    option: IOptionBotSelect | IOptionBotSelect[],
  ) => {
    setSelectedBot(option as IOptionBotSelect);
  };

  const handleNewChatBot = () => {
    onGetBot(true);
  };

  const renderEmptyConversation = () => {
    return (
      <div className="flex flex-col gap-4 items-center">
        {isEmptyObjectOrArray(ownerChatbot) && (
          <button
            className="w-[150px] mt-[20px] h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[15px] font-bold justify-center"
            onClick={handleNewChatBot}
          >
            {t('NewBot', { ns: 'conversation' })}
          </button>
        )}
        <p>{t('NoConversationFound', { ns: 'conversation' })}</p>
      </div>
    );
  };

  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Conversations',
      )}
    >
      <div className="flex justify-between items-center">
        <Select
          value={selectedBot}
          showSearch
          style={{ width: 150 }}
          placeholder={`${t('SelectBot', { ns: 'conversation' })}`}
          optionFilterProp="children"
          onChange={handleSelectBotChange}
          options={botOptions}
          disabled={isEmptyObjectOrArray(ownerChatbot)}
        />
        <div className="flex items-center gap-x-3">
          <RangePicker
            disabled={isEmptyObjectOrArray(ownerChatbot)}
            allowClear={false}
            value={[fromDate, toDate]}
            onChange={(dates) => {
              if (dates) {
                const [fromDate, toDate] = dates;
                setFromDate(fromDate || DEFAULT_FROM_DATE);
                setToDate(toDate || DEFAULT_TO_DATE);
              }
            }}
          />
        </div>
      </div>
      {selectedConversation ? (
        <>
          <div className={classNames('mt-6 grid grid-cols-2 gap-x-8')}>
            <div className="h-[654px] overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  onClick={() =>
                    setSelectedConversationId(conversation.session_id)
                  }
                  key={conversation.session_id}
                  className={classNames(
                    {
                      'bg-[#F9F9FC]':
                        conversation.session_id === selectedConversationId,
                    },
                    'cursor-pointer border-[1px] border-[#DCDEED] rounded-[5px] p-4 mb-2',
                  )}
                >
                  <div className="flex justify-between text-[15px] text-[#33343D]">
                    <p>{t('Customer', { ns: 'conversation' })}:</p>
                    <p>{dayjs(conversation.created_at).fromNow()}</p>
                  </div>
                  <div className="flex justify-between gap-x-4 text-[20px] text-[#33343D]">
                    <p className="mb-0 w-[85%]">
                      Initial message:{' '}
                      {conversation.chat_history_response[0].content}
                    </p>
                    <p className="flex items-end">
                      <IconDown />
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={classNames(
                'rounded-[8px] border-[10px] border-[rgb(220,222,237)] h-[654px] relative flex flex-col',
              )}
            >
              <div className="flex justify-between h-[45px] bg-[#FAFAFD] items-center px-[18px]">
                <p className="mb-0 flex items-center gap-x-[10px] text-[16px] text-[#01058A]">
                  <IconInterface />
                  Chat fly
                </p>
                <button onClick={handleFetchConversation}>
                  <IconReload />
                </button>
              </div>
              <div
                className="py-[37px] px-[27px] flex flex-col gap-[10px] flex-1 overflow-auto"
                ref={chatContentRef}
              >
                {selectedConversation.chat_history_response.map(
                  ({ sender_type, content }: HistoryChat, index) => {
                    return sender_type === 'assistant' ? (
                      <div
                        className="bg-[#F1F7FF] p-2 rounded-t-lg rounded-br-lg w-fit"
                        key={index}
                      >
                        {convertStringToParagraphs(content)}
                      </div>
                    ) : (
                      <div className="w-full justify-end flex" key={index}>
                        <p className="bg-[#D1EFFF] p-2 rounded-t-lg rounded-bl-lg w-fit">
                          {convertStringToParagraphs(content)}
                        </p>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-[30px]">
            <button className="w-[150px] flex items-center gap-x-2 justify-center h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[15px] font-bold justify-cente">
              <BiSolidFileExport size={24} />
              {t('ExportPDF', { ns: 'conversation' })}
            </button>
          </div>
        </>
      ) : (
        renderEmptyConversation()
      )}
    </div>
  );
};

export default Conversations;
