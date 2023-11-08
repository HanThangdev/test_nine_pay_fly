import { RootState, AppDispatch } from '@/states/store';
import { Tooltip, notification } from 'antd';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { IconSticker, IconAttach } from '@/components/IconGroup/IconGroup';
import { useSelector, useDispatch } from 'react-redux';
import { getAdvanceSettingTransaction } from '@/repository/buildChatBot';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { resetHistoryChatTest } from '@/states/buildChatBot/buildChatBot.slice';
import { convertStringToParagraphs } from '@/utils/format';
import { HistoryChat } from '@/states/buildChatBot/type';
import { GetChatStreamingRequest } from '@/repository/buildChatBot/type';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { TypeAnimation } from 'react-type-animation';
import { LOADING_TEXT } from '@/constants';
import FormCollectCustomer from '@/components/formCollectCustomer';

const ChatBot = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const [dataSet, setDataSet] = useState<any>({
    bot_id: '',
    initial_message: 'Hello! How can I assist you today?',
    display_name: '',
    align_chat_bubble_button: 'right',
    auto_show_initial_message_after: 0,
    chat_message_color: '#4AC1FF',
    chat_bubble_button_color: '#4AC1FF',
    chat_icon_url:
      'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
  });
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

  const { history, session_id, num_message_left } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showFormCollect, setShowFormCollect] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLInputElement | null>(null);
  const { onStreamingDataTesting } = useBuildChatbot();

  const onSendMessage = async (msg: string | undefined = '') => {
    if (loading || (!message && !msg) || !botInfos) {
      return;
    }
    setLoading(true);
    setMessage('');
    const { id, user_id } = botInfos;
    const streamingPayload: GetChatStreamingRequest = {
      bot_id: id,
      message: msg || message,
      user_id,
      session_id: session_id,
    };
    try {
      await onStreamingDataTesting(streamingPayload);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
    setLoading(false);
  };

  const getDivForResponse = (index: number, message: HistoryChat) => {
    if (message.sender_type === 'user') {
      return (
        <div className="w-full justify-end flex" key={index}>
          <p className="bg-[#D1EFFF] p-2 rounded-t-lg rounded-bl-lg w-fit">
            {convertStringToParagraphs(message.content)}
          </p>
        </div>
      );
    } else {
      return (
        <div
          className="bg-[#F1F7FF] p-2 rounded-t-lg rounded-br-lg w-fit"
          key={index}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {message.content === LOADING_TEXT ? (
            <TypeAnimation
              sequence={['.', 200, '..', 200, '...', 200]}
              repeat={Infinity}
              cursor={false}
            />
          ) : (
            convertStringToParagraphs(message?.content || '')
          )}
        </div>
      );
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      onSendMessage();
    }
  };

  const reloadHistoryMessage = () => {
    if (loading) {
      notification.warning({
        message: 'You do not perform this action!',
      });
      return;
    }
    dispatch(resetHistoryChatTest());
  };

  useEffect(() => {
    localStorage.removeItem('isSubmitOrCloseForm');
    if (messagesEndRef.current) {
      messagesEndRef.current.addEventListener(
        'DOMNodeInserted',
        (event: any) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        },
      );
    }
  }, []);

  const toggleForm = () => {
    localStorage.setItem('isSubmitOrCloseForm', 'true');
    setShowFormCollect(false);
  };

  useEffect(() => {
    if (!isEmptyObjectOrArray(botInfos)) {
      const isSubmitOrCloseForm = localStorage.getItem('isSubmitOrCloseForm');
      const checkLengthMsg =
        history?.filter((message) => message.sender_type === 'user')?.length >=
        botInfos?.collect_customer_info?.numberShowing;
      const { numberShowing, ...collectInfo } = botInfos?.collect_customer_info;
      if (
        checkLengthMsg &&
        !isEmptyObjectOrArray(collectInfo) &&
        !isSubmitOrCloseForm
      ) {
        setShowFormCollect(true);
      } else {
        setShowFormCollect(false);
      }
    }
  }, [history, botInfos]);

  return (
    <>
      <div className="bg-[#E5E7EB] rounded-xl p-5">
        <div
          className={classNames(
            'rounded-[16px] bg-[#F9FAFB] h-[600px] relative',
            {
              'bg-different': dataSet.theme === 'dark',
            },
          )}
        >
          <div
            className={classNames(
              'flex justify-between h-[45px] items-center px-[18px] border-b-2 border-[rgb(220,222,237)]',
            )}
          >
            <p
              className={classNames(
                'mb-0 flex items-center gap-x-[10px] text-[16px] font-bold',
                {
                  'text-white': dataSet.theme === 'dark',
                },
              )}
            >
              {dataSet.display_name}
            </p>
            <p className="mb-0 cursor-pointer bg-[#F3F4F6] rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.22824 0.612822C9.25407 0.628655 9.2799 0.645322 9.30324 0.664489C10.4297 1.54934 10.5124 3.19427 10.5164 6.4792L10.5166 6.79199C10.5166 10.287 10.4649 12.0078 9.30324 12.9212C9.2799 12.9395 9.25407 12.957 9.2274 12.972C8.88241 13.1687 8.53157 13.252 8.18157 13.252C7.0224 13.252 5.87324 12.3395 4.97824 11.6295C4.57407 11.3087 3.96324 10.8237 3.7524 10.802C3.51324 10.7837 3.30657 10.7762 3.12407 10.7712C2.45907 10.747 1.93324 10.7295 1.3149 10.2195C0.570905 9.60674 0.50258 8.39256 0.5 7.32237L0.500738 6.97199L0.501572 6.79199L0.500738 6.61199L0.5 6.26164C0.50258 5.19157 0.570905 3.97807 1.3149 3.36532C1.93407 2.85532 2.46074 2.83699 3.1274 2.81449C3.30907 2.80782 3.5149 2.80116 3.75407 2.78366C3.96324 2.76116 4.57407 2.27616 4.97824 1.95532C6.14324 1.02949 7.74074 -0.234678 9.22824 0.612822ZM8.17324 1.58866C7.4499 1.58866 6.5249 2.32282 5.7549 2.93449C5.01407 3.52199 4.42907 3.98699 3.84574 4.03032C3.5874 4.04866 3.36574 4.05699 3.17074 4.06366C2.54824 4.08449 2.39074 4.09866 2.1099 4.33032C1.78761 4.59501 1.75179 5.57428 1.75011 6.30903L1.75074 6.60616L1.75157 6.79032V6.79366L1.75074 6.97782L1.75011 7.27522C1.75179 8.01053 1.78761 8.9898 2.1099 9.25449C2.3899 9.48616 2.54741 9.49949 3.16824 9.52199C3.36407 9.52782 3.58657 9.53616 3.84574 9.55532C4.42907 9.59782 5.01407 10.0628 5.7549 10.6503C6.67407 11.3795 7.81324 12.2837 8.5674 11.9078C9.1787 11.378 9.26163 10.0014 9.26634 7.08843L9.26657 6.79199C9.26657 3.67532 9.19907 2.22449 8.5674 1.67616C8.4449 1.61532 8.3124 1.58866 8.17324 1.58866ZM13.8178 3.41007C15.0137 5.50007 15.0137 8.09174 13.8178 10.1751C13.702 10.3767 13.492 10.4892 13.2753 10.4892C13.1695 10.4892 13.0628 10.4626 12.9645 10.4059C12.6653 10.2342 12.562 9.85174 12.7337 9.55341C13.7095 7.85257 13.7095 5.73757 12.7337 4.03174C12.562 3.73174 12.6662 3.35007 12.9653 3.17841C13.2653 3.01007 13.6462 3.11091 13.8178 3.41007Z"
                  fill="#111827"
                />
              </svg>
            </p>
          </div>
          <div
            className="py-[37px] px-[27px] gap-y-[10px] grid overflow-y-auto overflow-hidden"
            style={{ maxHeight: 'calc(100% - 155px)' }}
            ref={messagesEndRef}
          >
            {!!history?.length &&
              history.map((message, index) =>
                getDivForResponse(index, message),
              )}
            {showFormCollect && (
              <FormCollectCustomer
                field={botInfos?.collect_customer_info}
                toggleForm={toggleForm}
              />
            )}
          </div>
          {/* <div className="py-5 px-[16px] gap-y-[10px] grid">
            <div className="flex gap-x-2">
              {dataSet.bot_avatar_url && (
                <img
                  className="w-[20px] h-[20px]"
                  src={dataSet.bot_avatar_url}
                />
              )}
              <div className="bg-[#eeeef1] px-3 py-2 rounded-t-lg rounded-br-lg w-fit">
                {dataSet.initial_message
                  ? dataSet.initial_message
                  : 'Hello! How can I assist you today?'}
              </div>
            </div>
            <div className="w-full justify-end flex">
              <p
                className="px-3 py-2 text-white rounded-t-lg rounded-bl-lg w-fit"
                style={{
                  background: dataSet.chat_message_color
                    ? dataSet.chat_message_color
                    : '#D7E4FD',
                }}
              >
                Hi
              </p>
            </div>
          </div> */}
          <div className="absolute bottom-[62px] flex gap-x-3 py-2 px-4 overflow-x-auto w-full">
            {dataSet.suggest_messages?.map((item: any, index: any) => (
              <Tooltip title={item} key={index}>
                <p
                  onClick={() => onSendMessage(item)}
                  className="cursor-pointer border-[1px] border-[#2D3FE7] text-[#2D3FE7] mb-0 px-2 py-1 rounded-lg whitespace-nowrap"
                >
                  {' '}
                  {item}
                </p>
              </Tooltip>
            ))}
          </div>
          <div className="absolute h-[62px] flex gap-x-[12px] bottom-0 w-[calc(100%-32px)] items-center border-t-[1px] border-[#E7E8F2] mx-4">
            <div className="w-full items-center px-2 gap-x-2 rounded-[8px] bg-[#FCFCFC] border border-[#D1D5DB] flex ">
              <IconSticker />
              <IconAttach />
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e)}
                className={classNames(
                  'h-[36px] w-full bg-[#FCFCFC] outline-none focus:border-primary focus-visible:shadow-none',
                  {
                    'bg-[#111827] text-white': dataSet.theme === 'dark',
                  },
                )}
              />
              <p
                onClick={() => onSendMessage()}
                className="mb-0 cursor-pointer text-[#9CA3AF] py-0 px-1 border-[1px] border-[#F3F4F6] shadow rounded text-[14px]"
              >
                {t('Enter', { ns: 'config_bot' })}
              </p>
            </div>
          </div>
        </div>
        <div
          className={classNames('mt-4 flex justify-end', {
            '!justify-end': dataSet.align_chat_bubble_button === 'right',
            '!justify-start': dataSet.align_chat_bubble_button === 'left',
          })}
        >
          <div
            className={classNames(
              'rounded-full bg-black flex items-center justify-center p-2 gap-x-2',
            )}
            style={{
              background: dataSet.chat_bubble_button_color
                ? dataSet.chat_bubble_button_color
                : '#4AC1FF',
            }}
          >
            <img
              className="w-[30px] h-[30px] invert"
              src={
                dataSet.chat_icon_url
                  ? dataSet.chat_icon_url
                  : 'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg'
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
