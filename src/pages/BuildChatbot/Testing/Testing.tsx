import classNames from 'classnames';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconReload from '@/components/IconReload/IconReload';
import { AiFillRightCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import  {
  getStreamingResponse,
} from '@/repository/testingbot';
import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetStreamingResponseRequest } from '@/repository/testingbot/type';
import { AppDispatch } from '@/states/store';
import { RootState } from '@/states/store';
import { API_STATUS } from '@/constants';
import { TypeAnimation } from 'react-type-animation';

const Testing = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const [history, setHistory] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>();
  const [message, setMessage] = useState<string>('');
  const LOADING_TEXT = "Generating..."
  const onSendMessage = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    setHistory((history) => [...history, message, LOADING_TEXT]);
    setMessage('');

    const { id, user_id  } = data
    const streamingPayload : GetStreamingResponseRequest = {
      bot_id: id,
      message,
      user_id,
      session_id: 'e1babe89-3910-48e1-9790-0debfb0f6928',
    }
    try {
      const { meta, payload  } = await dispatch<any>(
        getStreamingResponse(streamingPayload),
      );

      if(meta.requestStatus == API_STATUS.REJECTED){
        return
      }
      setTimeout(() => {}, 500);
      setHistory((history) => {
        const newHistory = Array.from(history).splice(0, history.length - 1)
        return [...newHistory, payload]
      });
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
        <div className="w-full justify-end flex">
          <p className="bg-[#D1EFFF] p-2 rounded-t-lg rounded-bl-lg w-fit">
            {message}
          </p>
        </div>
      );
    } else {
      return (
        <div className="bg-[#F1F7FF] p-2 rounded-t-lg rounded-br-lg w-fit">
          {message}
        </div>
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSendMessage();
    }
  };

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
      >
        {history.map((message, index) => getDivForResponse(index, message))}
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex gap-x-3 ml-[26px]">
          <p className="bg-[#F1F7FF] p-2 rounded-lg w-fit"> What's ChatFly?</p>
          <p className="bg-[#F1F7FF] p-2 rounded-lg w-fit"> Policy</p>
        </div>
        <p className="text-[#878787] ml-[26px]">48 massage credits left</p>
        <div className="h-[62px] items-center border-t-[1px] border-[#E7E8F2] p-2 flex gap-x-[12px]">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-[47px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button className="mb-0 w-[40px]" onClick={onSendMessage} type="submit">
            <AiFillRightCircle size={40} color="#4AC1FF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testing;
