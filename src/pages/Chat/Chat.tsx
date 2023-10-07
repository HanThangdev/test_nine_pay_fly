import { useTranslation } from 'react-i18next';
import { Tooltip, notification } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
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
import {
  resetConversations,
  setNewMessageIntoListConversation,
  toogleTheme,
} from '@/states/chat/chat.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { TfiHeadphone, TfiReload } from 'react-icons/tfi';
import { PiSunDimLight } from 'react-icons/pi';
import { MdOutlineDarkMode } from 'react-icons/md';
// import FormCollectCustomer from '@/components/formCollectCustomer';

const Chat = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLInputElement | null>(null);
  const { id } = useParams();
  const idBot = useMemo(() => {
    return id;
  }, [id]);
  const {
    onStreamingConversation,
    chatConversations,
    session_id,
    theme
  } = useConversationsChatbot();
  const { onGetInfoCurrentBot, data, onGetAdvanceSetting, advanceSetting } =
    useBuildChatbot();
  const onSendMessage = async (msg: string | undefined = '') => {
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
    dispatch(resetConversations());
  };

  const onToogleTheme = () => {
    dispatch(toogleTheme(!theme));
  };

  useEffect(() => {
    if (idBot) {
      onGetAdvanceSetting({ bot_id: idBot });
      onGetInfoCurrentBot({ bot_id: idBot });
    }
  }, [idBot]);

  useEffect(() => {
    if (!isEmptyObjectOrArray(advanceSetting) && advanceSetting?.initial_message) {
      dispatch(
        setNewMessageIntoListConversation({
          sender_type: 'assistant',
          content: advanceSetting?.initial_message,
        }),
      );
      dispatch(toogleTheme(advanceSetting.theme === "dark" ? false : true));
    }
    
  }, [advanceSetting]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [advanceSetting]);

  const getDivForResponse = (index: number, message: HistoryChat) => {
    if (message.sender_type === 'user') {
      return (
        <div className="chat-message" key={index}>
          <div className="flex items-end justify-end">
            <div className="bg-[#D1EFFF] rounded-t-lg rounded-bl-lg flex flex-col space-y-2 text-lg max-w-[80%] mx-2 order-1 items-center">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 whitespace-pre-wrap">
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
        <div className="chat-message" key={index}>
          <div className="flex items-end">
            <div className="bg-[#e2e8f0] rounded-t-lg rounded-bl-lg flex flex-col space-y-2 text-lg max-w-[80%] mx-2 order-2 items-center">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 whitespace-pre-wrap">
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
            {advanceSetting?.bot_avatar_url ? (
              <img
                src={advanceSetting?.bot_avatar_url}
                alt="avatar"
                className="w-[20px] h-[20px] rounded-full"
              />
            ) : (
              <IconRobot />
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`px-3 pb-3 flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen ${
         !theme
          ? 'bg-different text-white'
          : 'bg-[#fafafd]'
      }`}
    >
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 ">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            {/* <span className="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span> */}
            {advanceSetting?.bot_avatar_url ? (
              <img
                src={advanceSetting?.bot_avatar_url}
                alt="avatar"
                className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
              />
            ) : (
              <IconRobot />
            )}
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="mr-3">
                {advanceSetting?.display_name ||
                  (!isEmptyObjectOrArray(data) && data.bot_name)}
              </span>
            </div>
            {/* <span className="text-lg text-gray-600">Junior Developer</span> */}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
          >
            <TfiReload size={25} onClick={reloadHistoryMessage} />
          </button>
          <button
            onClick={onToogleTheme}
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
          >
            {!theme ? (
              <PiSunDimLight size={25} />
            ) : (
              <MdOutlineDarkMode size={25} />
            )}
          </button>
        </div>
      </div>
      <div
        ref={messagesEndRef}
        id="messages"
        className="h-full flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch text-black"
      >
        {!!chatConversations.length &&
          chatConversations.map((message, index) =>
            getDivForResponse(index, message),
          )}
        {/* {!!(chatConversations.filter((item) => item.sender_type == 'user')
          .length >= (advanceSetting?.auto_show_initial_message_after || 0)) && 
          !!advanceSetting?.auto_show_initial_message_after &&
          isCollectedCustomer && <FormCollectCustomer field={data.collect_customer_info}/>} */}
      </div>
      <div className="flex gap-x-3 pb-2 pt-2 text-black overflow-x-auto">
        {!isEmptyObjectOrArray(advanceSetting?.suggest_messages) &&
          advanceSetting?.suggest_messages.map((it, index) => (
            <Tooltip title={it}>
              <div
                key={index}
                className="bg-[#F1F7FF] p-2 rounded-lg truncate h-[40px] px-2 align-middle mb-[10px]"
                onClick={() => onSendMessage(it)}
              >
                <span>{it}</span>
              </div>
            </Tooltip>
          ))}
      </div>
      <div className="border-t-2 border-gray-200 pt-4 mb-2 sm:mb-0 ">
        <div className="flex items-center bg-white rounded-xl">
          <div className="w-full text-black">
            <input
              type="text"
              value={message}
              onKeyUp={(e) => handleKeyUp(e)}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message!"
              className=" w-full focus:outline-none focus:placeholder-gray-400 placeholder-gray-600 pl-4 pr-4 bg-gray-200 rounded-md py-3"
            />
          </div>

          <div className="right-0 items-center inset-y-0 sm:flex">
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
