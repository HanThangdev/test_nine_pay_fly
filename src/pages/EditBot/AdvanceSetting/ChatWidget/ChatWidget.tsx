import { RootState } from '@/states/store';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Interface from '../Interface';

const ChatWidget = () => {
  const { t } = useTranslation();
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const [suggestMessages, setSuggestMessages] = useState('');
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
  return (
    <>
      <div className="flex gap-x-4">
        <div className="p-4 w-[60%]">
          <div className="text-[15px]">
            <p className="font-medium mb-[8px] text-[#344054]">
              {t('DisplayName', { ns: 'config_bot' })}
            </p>
            <input
              type="text"
              placeholder=""
              value={dataSet.display_name}
              onChange={(e) =>
                setDataSet({
                  ...dataSet,
                  display_name: e.target.value,
                })
              }
              className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
          </div>
          <div className="text-[15px] mt-4">
            <p className="font-medium mb-[8px] text-[#344054]">
              {t('Initial', { ns: 'config_bot' })}
            </p>
            <input
              type="text"
              placeholder=""
              value={dataSet.initial_message}
              className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
              onChange={(e) =>
                setDataSet({
                  ...dataSet,
                  initial_message: e.target.value,
                })
              }
            />
            <p className="mt-[12px] text-[#A7A7B0]">
              {t('EnterEach', { ns: 'config_bot' })}
            </p>
          </div>
          <div className="text-[15px]">
            <p className="font-medium mb-[8px] text-[#344054]">
              {t('SuggesttedMess', { ns: 'config_bot' })}
            </p>
            <textarea
              placeholder=""
              value={suggestMessages}
              // value={suggestArray}
              className="h-[100px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
              onChange={(e) => setSuggestMessages(e.target.value)}
            />
            <p className="mt-[12px] text-[#A7A7B0]">
              {t('EnterEach', { ns: 'config_bot' })}
            </p>
          </div>
        </div>
        <div className="w-[40%]">
          <Interface />
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
