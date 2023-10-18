import { RootState } from '@/states/store';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { AiFillRightCircle } from 'react-icons/ai';
import { TfiReload } from 'react-icons/tfi';
import { useSelector } from 'react-redux';
import { getAdvanceSettingTransaction } from '@/repository/buildChatBot';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { useParams } from 'react-router-dom';

interface Data {
  initial_message: string;
  suggest_messages: [];
  theme: string;
  display_name: string;
  bot_avatar_url: string;
  chat_icon_url: string;
  chat_bubble_button_color: string;
  chat_message_color: string;
  align_chat_bubble_button: string;
  auto_show_initial_message_after: number;
}

interface Props {
  dataInterface?: Data;
}

const Interface = ({ dataInterface }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const [dataSet, setDataSet] = useState<any>({
    bot_id: data.id,
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
      getAdvanceSettingTransaction({ bot_id: data?.id || id }),
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
      <div className="bg-[#E5E7EB] rounded-xl p-5">
        <div
          className={classNames(
            'rounded-[16px] bg-white h-[500px] mt-10 relative',
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
                'mb-0 flex items-center gap-x-[10px] text-[16px] text-[#01058A]',
                {
                  'text-white': dataSet.theme === 'dark',
                },
              )}
            >
              {dataSet.bot_avatar_url && (
                <img
                  className="w-[25px] h-[25px]"
                  src={dataSet.bot_avatar_url}
                />
              )}
              {dataSet.display_name}
            </p>
            <p className="mb-0 cursor-pointer">
              <TfiReload
                size={25}
                color={dataSet.theme === 'dark' ? 'white' : 'black'}
              />
            </p>
          </div>
          <div className="py-5 px-[16px] gap-y-[10px] grid">
            <div className="bg-[#eeeef1] px-3 py-2 rounded-t-lg rounded-br-lg w-fit">
              {dataSet.initial_message
                ? dataSet.initial_message
                : 'Hello! How can I assist you today?'}
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
          </div>
          <div className="absolute bottom-[62px] flex gap-x-3 p-2 overflow-x-auto w-full">
            {dataSet.suggest_messages?.map((item: any, index: any) => (
              <Tooltip title={item} key={index}>
                <p className="bg-[#F1F7FF] mb-0 p-2 rounded-lg whitespace-nowrap">
                  {' '}
                  {item}
                </p>
              </Tooltip>
            ))}
          </div>
          <div className="absolute h-[62px] flex gap-x-[12px] bottom-0 w-full items-center border-t-[1px] border-[#E7E8F2] p-4">
            <div className="w-full items-center px-2 gap-x-2 rounded-[8px] bg-[#FCFCFC] border border-[#D1D5DB] flex ">
              <input
                type="text"
                placeholder="Type your message..."
                className={classNames(
                  'h-[36px] w-full bg-[#FCFCFC] outline-none focus:border-primary focus-visible:shadow-none',
                  {
                    'bg-[#111827] text-white': dataSet.theme === 'dark',
                  },
                )}
              />
              <p className="mb-0 cursor-pointer">
                <svg
                  fill="#000000"
                  width="22"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <rect width="22" height="22" fill="none" />
                  <path d="M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z" />
                </svg>
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
            className="rounded-full bg-black flex items-center justify-center w-[48px] h-[48px]"
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

export default Interface;
