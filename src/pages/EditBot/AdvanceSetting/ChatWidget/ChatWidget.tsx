import { RootState, AppDispatch } from '@/states/store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import Interface from '../Interface';
import {
  getAdvanceSettingTransaction,
  updateAdvanceSettingTransaction,
} from '@/repository/buildChatBot';
import { useParams } from 'react-router-dom';
import { Switch, notification } from 'antd';
import { API_STATUS } from '@/constants';

interface Props {
  save: boolean;
  step: string;
  saveSuccess: () => void;
}

const ChatWidget = ({ save, step, saveSuccess }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const { id } = useParams();
  const [displayName, setDisplayName] = useState('');
  const [displayRole, setDisplayRole] = useState('');
  const [initialMessages, setinitialMessages] = useState(
    'Hello! How can I assist you today?',
  );
  const [suggestMessages, setSuggestMessages] = useState('');
  const [suggestArray, setSuggestArray] = useState<any>([]);
  const [initialArray, setInitialArray] = useState<any>([]);
  const [dataAdvanced, setDataAdvanced] = useState<any>([]);
  const [textbubble, setTextbubble] = useState('');

  const getAdvance = async () => {
    const res: any = await dispatch(
      getAdvanceSettingTransaction({ bot_id: botInfos?.id || id }),
    );
    const reponse = res.payload.data;
    setDataAdvanced(reponse);
    setDisplayName(reponse.display_name);
    setinitialMessages(reponse.initial_message);
    setSuggestMessages(reponse.suggest_messages?.join('\n'));
  };
  useEffect(() => {
    getAdvance();
  }, []);

  useEffect(() => {
    if (suggestMessages) {
      const newArray = suggestMessages
        ?.split('\n')
        .filter((item) => item !== '');
      setSuggestArray(newArray);
    }

    if (initialMessages) {
      const newArray = initialMessages
        ?.split('\n')
        .filter((item) => item !== '');
      setInitialArray(newArray);
    }
  }, [suggestMessages, initialMessages]);

  const onSubmit = async () => {
    try {
      const payload = {
        bot_id: botInfos.id,
        initial_message: initialMessages,
        suggest_messages: suggestArray,
        theme: dataAdvanced.theme,
        display_name: displayName,
        bot_avatar_url: dataAdvanced.bot_avatar_url,
        chat_icon_url: dataAdvanced.chat_icon_url,
        chat_bubble_button_color: dataAdvanced.chat_bubble_button_color,
        chat_message_color: dataAdvanced.chat_message_color,
        align_chat_bubble_button: dataAdvanced.align_chat_bubble_button,
        auto_show_initial_message_after:
          dataAdvanced.auto_show_initial_message_after,
      };

      const { meta } = await dispatch(updateAdvanceSettingTransaction(payload));

      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }
      saveSuccess();
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  useEffect(() => {
    if (save && step === 'setting') {
      onSubmit();
    }
  }, [save, step]);

  return (
    <>
      <div className="flex gap-x-4">
        <div className="p-4 w-full bg-[#FCFCFC] rounded-[12px]">
          <div className="text-[15px]">
            <p className="font-medium mb-[8px] text-[#344054]">
              {t('DisplayName', { ns: 'config_bot' })}
            </p>
            <input
              type="text"
              placeholder={`${t('EgHelp', { ns: 'config_bot' })}`}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
          </div>
          <div className="text-[15px]  mt-4">
            <p className="font-medium mb-[8px] text-[#344054]">
              {t('DisplayRole', { ns: 'config_bot' })}
            </p>
            <input
              type="text"
              placeholder={`${t('EgRole', { ns: 'config_bot' })}`}
              value={displayRole}
              onChange={(e) => setDisplayRole(e.target.value)}
              className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
          </div>
          <div className="text-[15px] mt-4">
            <p className="font-medium mb-[8px] text-[#344054]">
              {t('Initial', { ns: 'config_bot' })}
            </p>
            <textarea
              placeholder={`${t('EnterDescription', { ns: 'config_bot' })}`}
              value={initialMessages}
              className="h-[64px] px-3.5 py-2.5 w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] outline-none focus:border-primary focus-visible:shadow-none"
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
              placeholder={`${t('EnterDescription', { ns: 'config_bot' })}`}
              value={suggestMessages}
              // value={suggestArray}
              className="h-[64px] px-3.5 py-2.5 w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] outline-none focus:border-primary focus-visible:shadow-none"
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
        <div className="min-w-[395px]">
          <Interface
            display_name={displayName}
            display_role={displayRole}
            initial_messages={initialArray}
            suggest_messages={suggestArray}
            textbubble={textbubble}
          />
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
