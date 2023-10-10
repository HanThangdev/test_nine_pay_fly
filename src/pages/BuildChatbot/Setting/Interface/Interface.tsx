import { Tooltip } from 'antd';
import classNames from 'classnames';
import { AiFillRightCircle } from 'react-icons/ai';
import { TfiReload } from 'react-icons/tfi';

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
  dataInterface: Data;
}

const Interface = ({ dataInterface }: Props) => {
  return (
    <>
      <div>
        <div
          className={classNames(
            'rounded-[8px] border-[10px] border-[rgb(220,222,237)] h-[654px] relative',
            {
              'bg-different': dataInterface.theme === 'dark',
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
                  'text-white': dataInterface.theme === 'dark',
                },
              )}
            >
              {dataInterface.bot_avatar_url && (
                <img
                  className="h-[25px] object-cover"
                  src={dataInterface.bot_avatar_url}
                />
              )}
              {dataInterface.display_name}
            </p>
            <p className="mb-0 cursor-pointer">
              <TfiReload
                size={25}
                color={dataInterface.theme === 'dark' ? 'white' : 'black'}
              />
            </p>
          </div>
          <div className="py-[37px] px-[27px] gap-y-[10px] grid">
            <div className="bg-[#eeeef1] px-3 py-2 rounded-t-lg rounded-br-lg w-fit">
              {dataInterface.initial_message
                ? dataInterface.initial_message
                : 'Hello! How can I assist you today?'}
            </div>
            <div className="w-full justify-end flex">
              <p
                className="px-3 py-2 text-white rounded-t-lg rounded-bl-lg w-fit"
                style={{
                  background: dataInterface.chat_message_color
                    ? dataInterface.chat_message_color
                    : '#4AC1FF',
                }}
              >
                Hi
              </p>
            </div>
          </div>
          <div className="absolute bottom-[62px] flex gap-x-3 p-2 overflow-x-auto w-full">
            {dataInterface.suggest_messages?.map((item, index) => (
              <Tooltip title={item}>
                <p key={index} className="bg-[#F1F7FF] mb-0 p-2 rounded-lg text-ellipsis whitespace-nowrap">
                  {' '}
                  {item}
                </p>
              </Tooltip>
            ))}
          </div>
          <div className="absolute h-[62px] flex gap-x-[12px] bottom-0 w-full items-center border-t-[1px] border-[#E7E8F2] p-2">
            <input
              type="text"
              placeholder=""
              className={classNames(
                'h-[47px] w-full rounded-[5px] border border-[#DCDEED] px-4 outline-none focus:border-primary focus-visible:shadow-none',
                {
                  'bg-[#111827] text-white': dataInterface.theme === 'dark',
                },
              )}
            />
            <p className="mb-0 w-[40px] cursor-pointer">
              <AiFillRightCircle
                size={40}
                color={
                  dataInterface.chat_message_color
                    ? dataInterface.chat_message_color
                    : '#4AC1FF'
                }
              />
            </p>
          </div>
        </div>
        <div
          className={classNames('mt-4 flex justify-end', {
            '!justify-end': dataInterface.align_chat_bubble_button === 'right',
            '!justify-start': dataInterface.align_chat_bubble_button === 'left',
          })}
        >
          <div
            className="rounded-full bg-black flex items-center justify-center w-[50px] h-[50px]"
            style={{
              background: dataInterface.chat_bubble_button_color
                ? dataInterface.chat_bubble_button_color
                : '#4AC1FF',
            }}
          >
            <img
              className="w-[30px] h-[30px] invert"
              src={
                dataInterface.chat_icon_url
                  ? dataInterface.chat_icon_url
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
