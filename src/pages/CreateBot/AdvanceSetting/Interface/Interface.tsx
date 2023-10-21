import { RootState } from '@/states/store';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { IconSticker, IconAttach } from '@/components/IconGroup/IconGroup';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface Props {
  initial_message?: string;
  suggest_messages?: string[];
  display_name?: string;
  theme?: string;
  chat_bubble_button_color?: string;
  chat_message_color?: string;
  textbubble?: string;
  bot_avatar_url?: string;
  chat_icon_url?: string;
}

const Interface = ({
  initial_message,
  suggest_messages,
  display_name,
  chat_message_color,
  chat_bubble_button_color,
  theme,
  textbubble,
  bot_avatar_url,
  chat_icon_url,
}: Props) => {
  const { t } = useTranslation();
  const { data } = useSelector((state: RootState) => state.buildChatBot);
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

  return (
    <>
      <div className="bg-[#E5E7EB] rounded-xl p-5">
        <div
          className={classNames(
            'rounded-[16px] bg-[#F9FAFB] h-[500px] relative',
            {
              'bg-different': (theme ? theme : dataSet.theme) === 'dark',
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
                  'text-white': (theme ? theme : dataSet.theme) === 'dark',
                },
              )}
            >
              {display_name ? display_name : dataSet.display_name}
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
          <div className="py-5 px-[16px] gap-y-[10px] grid">
            <div className="flex gap-x-2">
              {(dataSet.bot_avatar_url || bot_avatar_url) && (
                <img
                  className="w-[20px] h-[20px]"
                  src={bot_avatar_url ? bot_avatar_url : dataSet.bot_avatar_url}
                />
              )}
              <div className="bg-[#eeeef1] px-3 py-2 rounded-t-lg rounded-br-lg w-fit">
                {initial_message
                  ? initial_message
                  : dataSet.initial_message
                  ? dataSet.initial_message
                  : 'Hello! How can I assist you today?'}
              </div>
            </div>
            <div className="w-full justify-end flex">
              <p
                className="px-3 py-2 text-white rounded-t-lg rounded-bl-lg w-fit"
                style={{
                  background: chat_message_color
                    ? chat_message_color
                    : dataSet.chat_message_color
                    ? dataSet.chat_message_color
                    : '#D7E4FD',
                }}
              >
                Hi
              </p>
            </div>
          </div>
          <div className="absolute bottom-[62px] flex gap-x-3 py-2 px-4 overflow-x-auto w-full">
            {(suggest_messages
              ? suggest_messages
              : dataSet.suggest_messages
            )?.map((item: any, index: any) => (
              <Tooltip title={item} key={index}>
                <p className="border-[1px] border-[#2D3FE7] text-[#2D3FE7] mb-0 px-2 py-1 rounded-lg whitespace-nowrap">
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
                placeholder="Type your message..."
                className={classNames(
                  'h-[36px] w-full bg-[#FCFCFC] outline-none focus:border-primary focus-visible:shadow-none',
                  {
                    'bg-[#111827] text-white':
                      (theme ? theme : dataSet.theme) === 'dark',
                  },
                )}
              />
              <p className="mb-0 cursor-pointer text-[#9CA3AF] py-0 px-1 border-[1px] border-[#F3F4F6] shadow rounded text-[14px]">
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
              {
                '!rounded-[20px]': textbubble,
              },
            )}
            style={{
              background: chat_bubble_button_color
                ? chat_bubble_button_color
                : dataSet.chat_bubble_button_color
                ? dataSet.chat_bubble_button_color
                : '#4AC1FF',
            }}
          >
            {textbubble}
            <img
              className="w-[30px] h-[30px] invert"
              src={
                chat_icon_url
                  ? chat_icon_url
                  : dataSet.chat_icon_url
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
