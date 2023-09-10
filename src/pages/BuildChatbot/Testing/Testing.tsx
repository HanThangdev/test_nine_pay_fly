import classNames from 'classnames';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconReload from '@/components/IconReload/IconReload';
import { AiFillRightCircle } from 'react-icons/ai';
import React, { useEffect, useRef, useState } from 'react';
import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { GetChatStreamingRequest } from '@/repository/buildChatBot/type';
import { LOADING_TEXT } from '@/constants';
import { TypeAnimation } from 'react-type-animation';

const Testing = () => {
  const { data, history, session_id } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const [loading, setLoading] = useState<boolean>();
  const [message, setMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLInputElement | null>(null);
  const { onStreamingDataTesting } = useBuildChatbot();

  const onSendMessage = async (msg: string | undefined = '') => {
    if (loading || (!message && !msg) || !data) {
      return;
    }
    setLoading(true);
    setMessage('');
    const { id, user_id } = data;
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

  const getDivForResponse = (index: number, message: string) => {
    if (index % 2 === 0) {
      return (
        <div className="w-full justify-end flex" key={index}>
          <p className="bg-[#D1EFFF] p-2 rounded-t-lg rounded-bl-lg w-fit">
            {message === LOADING_TEXT ? (
              <TypeAnimation
                sequence={['.', 200, '..', 200, '...', 200]}
                repeat={Infinity}
                cursor={false}
              />
            ) : (
              message
            )}
          </p>
        </div>
      );
    } else {
      return (
        <div
          className="bg-[#F1F7FF] p-2 rounded-t-lg rounded-br-lg w-fit"
          key={index}
        >
          {message === LOADING_TEXT ? (
            <TypeAnimation
              sequence={['.', 200, '..', 200, '...', 200]}
              repeat={Infinity}
              cursor={false}
            />
          ) : (
            message
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

  useEffect(() => {
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

  return (
    <div
      className={classNames(
        'rounded-[8px] bg-white h-[654px] relative text-[18px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <div className="flex justify-between h-[45px] items-center px-[18px] border-b-[1px] border-[#E7E8F2]">
        <p className="mb-0 flex items-center gap-x-[10px] font-bold text-[#01058A]">
          <IconInterface />
          Chat fly
        </p>
        <IconReload />
      </div>
      <div
        className="py-[37px] px-[27px] gap-y-[10px] grid overflow-y-auto"
        style={{ maxHeight: 'calc(100% - 230px)' }}
        ref={messagesEndRef}
      >
        {!!history.length &&
          history.map((message, index) => getDivForResponse(index, message))}
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex gap-x-3 ml-[26px]">
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
        </div>
        <p className="text-[#878787] ml-[26px]">48 massage credits left</p>
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
      </div>
    </div>
  );
};

export default Testing;
