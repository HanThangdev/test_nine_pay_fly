import classNames from 'classnames';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconReload from '@/components/IconReload/IconReload';
import { AiFillRightCircle } from 'react-icons/ai';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { GetChatStreamingRequest } from '@/repository/buildChatBot/type';
import { LOADING_TEXT } from '@/constants';
import { TypeAnimation } from 'react-type-animation';
import { resetHistoryChatTest } from '@/states/buildChatBot/buildChatBot.slice';
import { convertStringToParagraphs } from '@/utils/format';
import { HistoryChat } from '@/states/buildChatBot/type';
import { useTranslation } from 'react-i18next';
import FormCollectCustomer from '@/components/formCollectCustomer';
import { isEmptyObjectOrArray } from '@/utils/utils';

const Testing = () => {
  const { botInfos, history, session_id, num_message_left } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
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
    localStorage.setItem('isSubmitOrCloseForm', "true");
    setShowFormCollect(false);
  };

  useEffect(() => {
    if (!isEmptyObjectOrArray(botInfos)) {
      const isSubmitOrCloseForm = localStorage.getItem('isSubmitOrCloseForm')
      const checkLengthMsg =
        history?.filter((message) => message.sender_type === 'user')?.length >=
        botInfos?.collect_customer_info?.numberShowing;
      const { numberShowing, ...collectInfo } = botInfos?.collect_customer_info;
      if (checkLengthMsg && !isEmptyObjectOrArray(collectInfo) && !isSubmitOrCloseForm) {
        setShowFormCollect(true);
      } else {
        setShowFormCollect(false);
      }
    }
  }, [history, botInfos]);
  return (
    <>
      <div
        className={classNames(
          'rounded-[8px] bg-white h-[80vh] relative text-[18px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
        )}
      >
        <div className="flex justify-between h-[45px] items-center px-[18px] border-b-[1px] border-[#E7E8F2]">
          <p className="mb-0 flex items-center gap-x-[10px] font-bold text-[#01058A]">
            <IconInterface />
            {botInfos?.bot_name}
          </p>
          <div className="cursor-pointer" onClick={reloadHistoryMessage}>
            <IconReload />
          </div>
        </div>
        <div
          className="py-[37px] px-[27px] gap-y-[10px] grid overflow-y-auto overflow-hidden"
          style={{ maxHeight: 'calc(100% - 110px)' }}
          ref={messagesEndRef}
        >
          {!!history?.length &&
            history.map((message, index) => getDivForResponse(index, message))}
          {showFormCollect && (
            <FormCollectCustomer
              field={botInfos?.collect_customer_info}
              toggleForm={toggleForm}
            />
          )}
        </div>
        <div className="absolute bottom-0 w-full bg-white">
          {/* <div className="flex gap-x-3 ml-[10px]">
            <button
              className="bg-[#F1F7FF] p-2 rounded-lg w-fit"
              onClick={() => onSendMessage("What's ChatFly?")}
            >
              {' '}
              What's ChatFly?
            </button>
            <button
              className="bg-[#F1F7FF] p-2 rounded-lg w-fit"
              onClick={() => onSendMessage('Policy')}
            >
              {' '}
              Policy
            </button>
          </div> */}

          <div className="h-[62px] items-center border-t-[1px] border-[#E7E8F2] p-2 flex gap-x-[12px]">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={(e) => handleKeyUp(e)}
              className="h-[47px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
            <button className="mb-0 w-[40px]" onClick={() => onSendMessage()}>
              <AiFillRightCircle size={40} color="#4AC1FF" />
            </button>
          </div>
          <div className="text-[#878787] ml-[10px] text-sm bg-white">
            {t('num_message_left', { ns: 'config_bot' })}: {num_message_left}
          </div>
        </div>
      </div>
      {/* <div className='text-end mt-2'>{t('num_message_left', { ns: 'config_bot' })}: {num_message_left}</div> */}
    </>
  );
};

export default Testing;
