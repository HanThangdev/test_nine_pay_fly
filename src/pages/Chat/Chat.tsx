import { useTranslation } from 'react-i18next';
import { notification } from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AiFillRightCircle } from 'react-icons/ai';
import { convertStringToParagraphs } from '@/utils/format';
import { HistoryChat } from '@/states/chat/type';
import { TypeAnimation } from 'react-type-animation';
import { LOADING_TEXT } from '@/constants';
import { GetConversationStreamingRequest } from '@/repository/chat/type';
import { useParams } from 'react-router-dom';
import { useConversationsChatbot } from '@/states/chat/chat.selector';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { isEmptyObjectOrArray } from '@/utils/utils';
import IconRobot from '@/components/IconRobot/IconRobot';

dayjs.extend(relativeTime);

const Chat = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const { id } = useParams();
  const {
    onStreamingConversation,
    chatConversations,
    onCreateSessionChat,
    session_id
  } = useConversationsChatbot();
  const { onGetInfoCurrentBot, data,  } = useBuildChatbot();
  const onSendMessage = async (msg: string | undefined = '') => {
    console.log('hello', id);
    if (loading || (!message && !msg) || !id || !session_id) {
      return;
    }
    setLoading(true);
    setMessage('');
    const streamingPayload: GetConversationStreamingRequest = {
      bot_id: id,
      message: msg || message,
      session_id,
    };

    try {
      await onStreamingConversation(streamingPayload);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
    setLoading(false);
  };
  console.log(loading, id);
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      onSendMessage();
    }
  };

  useEffect(() => {
    if (id) {
      onCreateSessionChat();
      onGetInfoCurrentBot({ bot_id: id });
    }
  }, [id]);

  const getDivForResponse = (index: number, message: HistoryChat) => {
    if (message.sender_type === 'user') {
      return (
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-black ">
                  {convertStringToParagraphs(message?.content || '')}
                </span>
              </div>
            </div>
            {/* <IconRobot /> */}
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-lg max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  {message.content === LOADING_TEXT ? (
                    <TypeAnimation
                      sequence={['.', 200, '..', 200, '...', 200]}
                      repeat={Infinity}
                      cursor={false}
                    />
                  ) : (
                    convertStringToParagraphs(message?.content || '')
                  )}
                </span>
              </div>
            </div>
            {/* <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            /> */}
            <IconRobot />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            {/* <span className="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span> */}
            {/* <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt=""
              className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
            /> */}
            <IconRobot />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">{!isEmptyObjectOrArray(data) && data.bot_name}</span>
            </div>
            {/* <span className="text-lg text-gray-600">Junior Developer</span> */}
          </div>
        </div>
      </div>
      <div
        id="messages"
        className="h-full flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {!!chatConversations.length &&
          chatConversations.map((message, index) =>
            getDivForResponse(index, message),
          )}
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <input
            type="text"
            value={message}
            onKeyUp={(e) => handleKeyUp(e)}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="button"
              onClick={() => onSendMessage()}
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-400 focus:outline-none"
            >
              <AiFillRightCircle size={40} color="#4AC1FF" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
