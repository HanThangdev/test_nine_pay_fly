import { RootState } from '@/states/store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Interface from '../Interface';
import classNames from 'classnames';
import {
  IconDark,
  IconLight,
  IconUpload,
} from '@/components/IconGroup/IconGroup';
import { Switch, Upload, ColorPicker, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import {
  getAdvanceSettingTransaction,
  updateAdvanceSettingTransaction,
  uploadBotProfilePictureTransaction,
} from '@/repository/buildChatBot';
import { API_STATUS } from '@/constants';
import { useParams } from 'react-router-dom';
import { RcFile } from 'antd/es/upload';
import { convertFile2Base64 } from '@/utils/utils';

enum STEP {
  config,
  import_data,
  advance,
  styling,
  test_converstation,
}

interface Props {
  save?: boolean;
  step?: STEP;
  saveSuccess?: () => void;
}

const Styling = ({ save, step, saveSuccess }: Props) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const [theme, setTheme] = useState('light');
  const [messageColor, setMessageColor] = useState<string>('#4AC1FF');
  const [buttonColor, setButtonColor] = useState<string>('#FFFF');
  const [dataAdvanced, setDataAdvanced] = useState<any>([]);
  const [botAvatarFile, setBotAvatarFile] = useState<File | undefined>();
  const [botAvatarUrl, setBotAvatarUrl] = useState<string>();
  const [botAvatar, setBotAvatar] = useState<string>();
  const [bot_avatar_url, setBot_avatar_url] = useState<string>('');
  const [chatIconFile, setChatIconFile] = useState<File | undefined>();
  const [chatIconUrl, setChatIconUrl] = useState<string>();
  const [chatIcon, setChatIcon] = useState<string>();
  const [chat_icon_url, setChat_icon_url] = useState<string>('');
  const [chatBubble, setChatBubble] = useState<boolean>(false);

  const beforeUpload = async (file: RcFile | File) => {
    setBotAvatarFile(file);
    return false;
  };

  const beforeUploadIcon = async (file: RcFile | File) => {
    setChatIconFile(file);
    return false;
  };

  useEffect(() => {
    if (botAvatarFile) {
      convertFile2Base64(botAvatarFile).then((image) => {
        if (image) {
          setBotAvatarUrl(image);
        }
      });
    }
  }, [botAvatarFile]);

  useEffect(() => {
    setBotAvatar(botAvatarUrl);
  }, [botAvatarUrl]);

  useEffect(() => {
    if (chatIconFile) {
      convertFile2Base64(chatIconFile).then((image) => {
        if (image) {
          setChatIconUrl(image);
        }
      });
    }
  }, [chatIconFile]);

  useEffect(() => {
    setChatIcon(chatIconUrl);
  }, [chatIconUrl]);

  const getAdvance = async () => {
    const res: any = await dispatch(
      getAdvanceSettingTransaction({ bot_id: botInfos?.id || id }),
    );
    const reponse = res.payload.data;
    setDataAdvanced(reponse);
    setMessageColor(reponse.chat_message_color);
    setButtonColor(reponse.chat_bubble_button_color);
    setBot_avatar_url(reponse.bot_avatar_url);
    setChat_icon_url(reponse.chat_icon_url);
    setTheme(reponse.theme ? reponse.theme : 'light');
  };
  useEffect(() => {
    getAdvance();
  }, []);

  const onSubmit = async () => {
    const res: any = botAvatarFile
      ? await dispatch(
          uploadBotProfilePictureTransaction({
            bot_id: botInfos.id,
            file: botAvatarFile,
          }),
        )
      : '';

    const resIcon: any = chatIconFile
      ? await dispatch(
          uploadBotProfilePictureTransaction({
            bot_id: botInfos.id,
            file: chatIconFile,
          }),
        )
      : '';
    try {
      const payload = {
        bot_id: botInfos.id,
        initial_message: dataAdvanced.initial_message,
        suggest_messages: dataAdvanced.suggest_messages,
        theme: theme,
        display_name: dataAdvanced.display_name,
        bot_avatar_url: res
          ? res.payload.data.data.url
          : dataAdvanced.bot_avatar_url,
        chat_icon_url: resIcon
          ? resIcon.payload.data.data.url
          : dataAdvanced.chat_icon_url,
        chat_bubble_button_color: buttonColor,
        chat_message_color: messageColor,
        align_chat_bubble_button: dataAdvanced.align_chat_bubble_button,
        auto_show_initial_message_after:
          dataAdvanced.auto_show_initial_message_after,
      };

      const { meta } = await dispatch(updateAdvanceSettingTransaction(payload));

      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }
      if (saveSuccess) {
        saveSuccess();
      }
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  useEffect(() => {
    if (save && step === STEP.styling) {
      onSubmit();
    }
  }, [save, step]);

  const btnColor = [
    {
      color: 'bg-[#FB6514]',
      value: '#FB6514',
    },
    {
      color: 'bg-[#F63D68]',
      value: '#F63D68',
    },
    {
      color: 'bg-[#EE46BC]',
      value: '#EE46BC',
    },
    {
      color: 'bg-[#7A5AF8]',
      value: '#7A5AF8',
    },
    {
      color: 'bg-[#444CE7]',
      value: '#444CE7',
    },
    {
      color: 'bg-[#1570EF]',
      value: '#1570EF',
    },
    {
      color: 'bg-[#12B76A]',
      value: '#12B76A',
    },
    {
      color: 'bg-[#F79009]',
      value: '#F79009',
    },
    {
      color: 'bg-[#F04438]',
      value: '#F04438',
    },
    {
      color: 'bg-[#9E77ED]',
      value: '#9E77ED',
    },
    {
      color: 'bg-[#667085]',
      value: '#667085',
    },
    // 'bg-[#FB6514]',
    // 'bg-[#F63D68]',
    // 'bg-[#EE46BC]',
    // 'bg-[#7A5AF8]',
    // 'bg-[#444CE7]',
    // 'bg-[#1570EF]',
    // 'bg-[#12B76A]',
    // 'bg-[#F79009]',
    // 'bg-[#F04438]',
    // 'bg-[#9E77ED]',
    // 'bg-[#667085]',
  ];

  return (
    <>
      <div className="flex gap-x-4">
        <div className="p-4 w-full bg-[#FCFCFC] rounded-[12px]">
          <div className="text-[15px]">
            <p className="font-medium mb-0 text-[#111827]">
              {t('userColor', { ns: 'config_bot' })}
            </p>
            <p className="text-[12px] text-[#9CA3AF]">
              {t('selectColor', { ns: 'config_bot' })}
            </p>
            <div className="flex gap-x-2 justify-items-center">
              {btnColor.map((it, index) => (
                <button
                  key={index}
                  className={classNames(
                    `rounded-lg w-5 h-5 p-4 d-inline-flex align-items-center justify-content-center`,
                    it.color,
                  )}
                  onClick={() => setMessageColor(it.value)}
                />
              ))}
              <p className="text-[14px] text-[#9CA3AF] mt-1">or</p>
              <ColorPicker
                value={messageColor}
                onChange={(e) => setMessageColor(e.toHexString())}
                showText={(color) => (
                  <span className="text-[14px] text-[#D1D5DB]">
                    {color.toHexString()}
                  </span>
                )}
              />
            </div>
          </div>
          <div className="text-[15px] mt-4">
            <p className="font-medium mb-0 text-[#111827]">Chat bubble color</p>
            <p className="text-[12px] text-[#9CA3AF]">
              {t('selectColor', { ns: 'config_bot' })}
            </p>
            <div className="flex gap-x-2 justify-items-center">
              {btnColor.map((it, index) => (
                <button
                  key={index}
                  className={classNames(
                    `rounded-lg w-5 h-5 p-4 d-inline-flex align-items-center justify-content-center`,
                    it.color,
                  )}
                  onClick={() => setButtonColor(it.value)}
                />
              ))}
              <p className="text-[14px] text-[#9CA3AF] mt-1">or</p>
              <ColorPicker
                value={buttonColor}
                onChange={(e) => setButtonColor(e.toHexString())}
                showText={(color) => (
                  <span className="text-[14px] text-[#D1D5DB]">
                    {color.toHexString()}
                  </span>
                )}
              />
            </div>
          </div>
          <div className="text-[15px] mt-4">
            <p className="font-medium mb-0 text-[#111827]">
              {t('Theme', { ns: 'config_bot' })}
            </p>
            <div className="flex gap-x-1 p-1 bg-[#E5E7EB] rounded-lg w-fit mt-1">
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={classNames(
                  'py-2 px-3 items-center rounded-lg flex gap-x-2',
                  {
                    'bg-[#FFF]': theme == 'dark',
                  },
                )}
              >
                <IconDark />
                {t('Dark', { ns: 'config_bot' })}
              </button>
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={classNames(
                  'py-2 px-3 items-center rounded-lg flex gap-x-2',
                  {
                    'bg-[#FFF]': theme == 'light',
                  },
                )}
              >
                <IconLight />
                {t('Light', { ns: 'config_bot' })}
              </button>
            </div>
          </div>
          <p className="prompt-bot flex gap-x-[10px] font-medium text-[#111827] items-center mt-4">
            <Switch
              size="small"
              checked={!!botAvatarFile || Boolean(bot_avatar_url)}
              onChange={() => {
                if (botAvatarFile || bot_avatar_url) {
                  setBotAvatarFile(undefined);
                  setBotAvatar('');
                  setBot_avatar_url('');
                } else {
                  notification.info({
                    message: t('please_import_avatar', { ns: 'config_bot' }),
                  });
                }
              }}
            />
            {t('userPicture', { ns: 'config_bot' })}
          </p>
          <div>
            <Upload.Dragger
              accept="image/*"
              multiple={true}
              maxCount={1}
              showUploadList={false}
              beforeUpload={beforeUpload}
              customRequest={() => {
                return false;
              }}
              className="bg-[#F9FAFB]"
            >
              <div className="flex justify-center border-[1px] border-[#F3F4F6] w-fit m-auto shadow-sm py-1 px-2 rounded-lg bg-[#FCFCFC]">
                <IconUpload />
              </div>
              <p className="text-[14x] text-[#2D3FE7] font-medium mb-0">
                {t('click', { ns: 'config_bot' })}{' '}
                <span className="text-[#4B5563]">
                  {t('drop', { ns: 'config_bot' })}
                </span>
              </p>
              <p className="text-[#4B5563] text-[12px] mb-0">
                {t('typesfile', { ns: 'config_bot' })}
              </p>
            </Upload.Dragger>
          </div>
          <p className="prompt-bot flex gap-x-[10px] font-medium text-[#111827] items-center mt-4">
            <Switch
              size="small"
              checked={!!chatIconFile || Boolean(chat_icon_url)}
              onChange={() => {
                if (chatIconFile || chat_icon_url) {
                  setChatIconFile(undefined);
                  setChatIconUrl('');
                  setChat_icon_url('');
                } else {
                  notification.info({
                    message: t('please_import_avatar', { ns: 'config_bot' }),
                  });
                }
              }}
            />
            {t('symbol', { ns: 'config_bot' })}
          </p>
          <div>
            <Upload.Dragger
              accept="image/*"
              multiple={true}
              maxCount={1}
              showUploadList={false}
              beforeUpload={beforeUploadIcon}
              customRequest={() => {
                return false;
              }}
              className="bg-[#F9FAFB]"
            >
              <div className="flex justify-center border-[1px] border-[#F3F4F6] w-fit m-auto shadow-sm py-1 px-2 rounded-lg bg-[#FCFCFC]">
                <IconUpload />
              </div>
              <p className="text-[14x] text-[#2D3FE7] font-medium mb-0">
                {t('click', { ns: 'config_bot' })}{' '}
                <span className="text-[#4B5563]">
                  {t('drop', { ns: 'config_bot' })}
                </span>
              </p>
              <p className="text-[#4B5563] text-[12px] mb-0">
                {t('typesfile', { ns: 'config_bot' })}
              </p>
            </Upload.Dragger>
          </div>
          <p className="prompt-bot flex gap-x-[10px] font-medium text-[#111827] items-center mt-4">
            <Switch
              size="small"
              checked={chatBubble}
              onChange={() => setChatBubble(!chatBubble)}
            />
            Chat Bubble
          </p>
        </div>
        <div className="min-w-[395px] w-[395px]">
          <Interface
            chatbubble={chatBubble}
            chat_message_color={messageColor}
            chat_bubble_button_color={buttonColor}
            theme={theme}
            bot_avatar_url={botAvatar ? botAvatar : bot_avatar_url}
            chat_icon_url={chatIcon ? chatIcon : chat_icon_url}
          />
        </div>
      </div>
    </>
  );
};

export default Styling;
