import IconReload from '@/components/IconReload/IconReload';
import IconDown from '@/components/IconDown/IconDown';
import { useTranslation } from 'react-i18next';
import { DatePicker, Select } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { downloadPDFFromString, isEmptyObjectOrArray } from '@/utils/utils';
import { useManageChatbot } from '@/states/manageBot/manageBot.selector';
import { ResponseManageChatbot } from '@/states/manageBot/type';
import { IOptionBotSelect } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { getBotTransaction } from '@/repository/manageChatbot';
import dayjs from 'dayjs';
import {
  getAllConversations,
  getConversationPdf,
} from '@/repository/conversations';
import classNames from 'classnames';
import { GetAllConversationsPayload } from '@/repository/conversations/type';
import useScrollToLastElementChild from '@/hooks/useScrollToLastElementChild';
import { convertStringToParagraphs, formatTimeAgo } from '@/utils/format';
import { HistoryChat } from '@/states/chat/type';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/header';
import { IconEditBot, IconChat } from '@/components/IconGroup/IconGroup';
import { imageConversation } from '@/images';

const { RangePicker } = DatePicker;

const Conversations = () => {
  const { t } = useTranslation();
  const { ownerChatbot } = useManageChatbot();
  const dispatch = useDispatch<AppDispatch>();
  const { conversations } = useSelector(
    (state: RootState) => state.conversations,
  );
  const { onGetBot } = useManageChatbot();
  const { id } = useParams();
  const navigate = useNavigate();

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
    if (
      !id &&
      selectedBot &&
      conversations.length &&
      !conversations.some(
        (conversation) => conversation.session_id === selectedConversationId,
      )
    ) {
      const latestConversationId = conversations[0].session_id;
      setSelectedConversationId(latestConversationId);
    }
    if (id && conversations.length) {
      setSelectedConversationId(id);
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
    navigate('/conversations');
    setSelectedBot(option as IOptionBotSelect);
  };

  const handleNewChatBot = () => {
    onGetBot(true);
  };

  const handleDownloadPdf = async (conversationId: string) => {
    const conversation = conversations.find(
      (conversation) => conversation.session_id === conversationId,
    );
    if (conversation) {
      const response: any = await dispatch(
        getConversationPdf({
          // conversation_history_response: [conversation],
          date_from: fromDate.toISOString(),
          date_to: toDate.toISOString(),
          bot_id: conversation.bot_id,
          user_id: conversation.user_id,
          order: 'created_at.desc',
        }),
      );
      const fileName = `${
        conversation.session_id
      }--conversations_${fromDate.format('DD-MM-YYYY')}~${toDate.format(
        'DD-MM-YYYY',
      )}`;

      downloadPDFFromString(response.payload.data, fileName);
    }
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (selectedConversationId) {
      scrollToElement(selectedConversationId);
    }
  }, [selectedConversationId]);

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
    <>
      <Header
        children={
          <>
            <div className="flex justify-between items-center gap-x-3">
              <p className="mb-0 text-[#1F2937] text-[24px] font-medium">
                {t('Converstation', { ns: 'conversation' })}
              </p>
            </div>
          </>
        }
      />
      <div
        className={classNames(
          'bg-[#fcfcfc] rounded-[10px] my-[20px] mx-[25px] p-[12px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Conversations',
        )}
      >
        <div className="h-[43px] flex justify-between items-center">
          <Select
            value={selectedBot}
            showSearch
            placeholder={`${t('SelectBot', { ns: 'conversation' })}`}
            optionFilterProp="children"
            onChange={handleSelectBotChange}
            options={botOptions}
            disabled={isEmptyObjectOrArray(ownerChatbot)}
          />
          <div className="flex gap-x-2 ml-2">
            <button
              disabled={!selectedConversation}
              className="flex items-center gap-x-2 rounded-[4px] py-1 px-2 border-[1px] border-[#D0D5DD] text-[14px] text-[#344054] font-semibold justify-center whitespace-nowrap"
              onClick={() => navigate(`/edit-chatbot/${selectedBot?.bot_id}`)}
            >
              <IconEditBot />
              {t('Editbot', { ns: 'conversation' })}
            </button>
            <button
              disabled={!selectedConversation}
              className="flex items-center gap-x-2 rounded-[4px] py-1 px-2 border-[1px] border-[#D0D5DD] text-[14px] text-[#344054] font-semibold justify-center whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6466 1.66699C11.6825 1.66699 11.7176 1.67002 11.7518 1.67583L11.8644 1.67649C12.0344 1.67649 12.1969 1.74566 12.3153 1.86816L16.5369 6.26566C16.6478 6.38149 16.7103 6.53733 16.7103 6.69816V14.3565C16.7236 16.4473 15.0936 18.1465 12.9994 18.2215H6.2161C4.18257 18.1778 2.55169 16.5345 2.5014 14.5217L2.5011 5.40899C2.55027 3.34149 4.25693 1.67649 6.3086 1.67649L11.5414 1.67583C11.5756 1.67002 11.6107 1.66699 11.6466 1.66699ZM11.0211 2.92616L6.3111 2.92649C4.93027 2.92649 3.7836 4.04483 3.7511 5.42399V14.3565C3.7211 15.774 4.83777 16.9407 6.24193 16.9715H12.9778C14.3686 16.9215 15.4694 15.774 15.4603 14.3607L15.4603 7.48616L13.7866 7.48699C12.2608 7.48283 11.0216 6.23949 11.0216 4.71616L11.0211 2.92616ZM9.2856 7.63274C9.6306 7.63274 9.9106 7.91274 9.9106 8.25774L9.91026 11.7762L10.7956 10.8877C11.0389 10.6427 11.4348 10.6427 11.6798 10.8861C11.9239 11.1294 11.9248 11.5252 11.6814 11.7702L9.74892 13.7113C9.6999 13.7654 9.64155 13.8109 9.5764 13.8452C9.57059 13.847 9.56533 13.8497 9.56003 13.8523C9.53579 13.8654 9.51016 13.876 9.48375 13.8848C9.48116 13.8845 9.47864 13.8853 9.47611 13.8861C9.41612 13.9065 9.35206 13.9169 9.2856 13.9169C9.22099 13.9169 9.15866 13.9071 9.10002 13.8889C9.09081 13.8854 9.08098 13.8821 9.07125 13.8785C9.05306 13.8725 9.03561 13.8652 9.01859 13.8571C9.00842 13.8519 8.9984 13.8468 8.98852 13.8415C8.96877 13.8312 8.94941 13.8193 8.93078 13.8064C8.92442 13.8018 8.91811 13.7973 8.91188 13.7926C8.88505 13.7727 8.85993 13.7506 8.83671 13.7267L6.8881 11.7702C6.64477 11.5252 6.6456 11.1294 6.88977 10.8861C7.13477 10.6427 7.5306 10.6427 7.77393 10.8877L8.66027 11.7778L8.6606 8.25774C8.6606 7.91274 8.9406 7.63274 9.2856 7.63274ZM12.2711 3.62699L12.2716 4.71616C12.2716 5.55283 12.9516 6.23449 13.7883 6.23699L14.7753 6.23616L12.2711 3.62699Z"
                  fill="black"
                />
              </svg>
              {t('Downloadall', { ns: 'conversation' })}
            </button>
          </div>
        </div>
        <div className={classNames('mt-3 grid grid-cols-3 gap-x-4')}>
          <div className="h-[calc(100vh-190px)] ">
            <div className="flex items-center gap-x-3 mb-3">
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
            {selectedConversation ? (
              <div className="h-[calc(100vh-240px)] overflow-y-auto overflow-x-hidden col-span-1">
                {conversations.map((conversation) => (
                  <div
                    onClick={() => {
                      setSelectedConversationId(conversation.session_id);
                      navigate(`/conversations/${conversation.session_id}`);
                    }}
                    id={conversation.session_id}
                    key={conversation.session_id}
                    className={classNames(
                      {
                        'bg-[#F9F9FC]':
                          conversation.session_id === selectedConversationId,
                      },
                      'cursor-pointer border-[1px] border-[#DCDEED] rounded-[5px] p-4 mb-2',
                    )}
                  >
                    <div className="flex justify-between text-[14px] text-[#6B7280]">
                      <p>{t('Customer', { ns: 'conversation' })}:</p>
                      <p className="flex items-end border-[1px] border-[#D0D5DD] p-1 rounded-lg">
                        <button
                          onClick={() =>
                            handleDownloadPdf(conversation.session_id)
                          }
                        >
                          <IconDown />
                        </button>
                      </p>
                    </div>
                    <div className="flex justify-between text-[14px] text-[#6B7280]">
                      <p className="mb-0">
                        {t('Latestmessage', { ns: 'conversation' })}:
                        <br />
                        <span className="text-[#1F2937]">
                          {conversation.chat_history_response[0].content}
                        </span>
                      </p>
                    </div>
                    <div className="text-end text-[13px]">
                      <p className="mb-0">
                        {formatTimeAgo(new Date(conversation.created_at))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              renderEmptyConversation()
            )}
          </div>
          <div
            className={classNames(
              'rounded-[8px] col-span-2 bg-cover h-[calc(100vh-190px)] items-end py-3 px-2 relative justify-end flex flex-col',
            )}
            style={{ backgroundImage: `url(${imageConversation})` }}
          >
            <div className="h-[calc(100%-48px)] w-2/3">
              <div className="h-[90%] bg-[#FCFCFC] rounded-xl flex flex-col overflow-hidden pb-[16px]">
                <div className="flex justify-between h-[45px] items-center px-[18px]">
                  <p className="mb-0 flex items-center gap-x-[10px] text-[16px]">
                    <img className="w-[18px] h-[18px]" src="/logo.png" />
                    Chatfly
                  </p>
                  <button onClick={handleFetchConversation}>
                    <IconReload />
                  </button>
                </div>
                <div
                  className="py-[16px] px-[12px] flex flex-col gap-[10px] flex-1 overflow-auto"
                  ref={chatContentRef}
                >
                  {selectedConversation?.chat_history_response.map(
                    ({ sender_type, content }: HistoryChat, index) => {
                      return sender_type === 'assistant' ? (
                        <div
                          className="bg-[#F1F8FE] max-w-[90%] p-2 rounded-t-lg rounded-br-lg border-[1px] border-[#EAEDFE] w-fit"
                          key={index}
                          style={{ whiteSpace: 'pre-wrap' }}
                        >
                          {convertStringToParagraphs(content)}
                        </div>
                      ) : (
                        <div className="w-full justify-end flex" key={index}>
                          <p className="bg-[#F3F4F6] p-2 max-w-[90%] rounded-t-lg rounded-bl-lg mb-0 border-[1px] border-[#D1D5DB] w-fit">
                            {convertStringToParagraphs(content)}
                          </p>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <p className="mb-0 bg-white p-1 rounded-full w-fit">
                  <IconChat />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversations;
