import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Interface from '../Interface';
import { Switch } from 'antd';

const ChatWidget = () => {
  const { t } = useTranslation();
  const [displayName, setDisplayName] = useState('');
  const [initialMessages, setinitialMessages] = useState('');
  const [suggestMessages, setSuggestMessages] = useState('');
  const [suggestArray, setSuggestArray] = useState<any>([]);
  const [textbubble, setTextbubble] = useState('');

  useEffect(() => {
    const newArray = suggestMessages?.split('\n').filter((item) => item !== '');
    setSuggestArray(newArray);
  }, [suggestMessages]);

  return (
    <>
      <div className="flex gap-x-4">
        <div className="p-4 w-[60%] bg-[#FCFCFC] rounded-xl">
          <div className="text-[15px]">
            <p className="font-medium mb-[8px] text-[#344054]">
              {t('DisplayName', { ns: 'config_bot' })}
            </p>
            <input
              type="text"
              placeholder=""
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
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
              value={initialMessages}
              className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
              onChange={(e) => setinitialMessages(e.target.value)}
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
          <div className="text-[15px] mt-4">
            <p className="font-medium mb-[8px] text-[#344054] flex justify-between prompt-bot items-center">
              {t('textBubble', { ns: 'config_bot' })}
              <span className="flex gap-x-2 items-center">
                <Switch size="small" /> {t('Displaytext', { ns: 'config_bot' })}
              </span>
            </p>
            <input
              type="text"
              placeholder="eg: Chat with me"
              value={textbubble}
              className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
              onChange={(e) => setTextbubble(e.target.value)}
            />
          </div>
        </div>
        <div className="w-[40%]">
          <Interface
            display_name={displayName}
            initial_message={initialMessages}
            suggest_messages={suggestArray}
            textbubble={textbubble}
          />
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
