import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Interface from '../Interface';
import classNames from 'classnames';
import {
  IconDark,
  IconLight,
  IconUpload,
} from '@/components/IconGroup/IconGroup';
import { Switch, Upload, ColorPicker } from 'antd';
import { RcFile } from 'antd/es/upload';
import { convertFile2Base64 } from '@/utils/utils';

const Styling = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [messageColor, setMessageColor] = useState<string>('#4AC1FF');
  const [buttonColor, setButtonColor] = useState<string>('#4AC1FF');
  const [botAvatarFile, setBotAvatarFile] = useState<File | undefined>();
  const [botAvatarUrl, setBotAvatarUrl] = useState<string>();
  const [botAvatar, setBotAvatar] = useState<string>();
  const [bot_avatar_url, setBot_avatar_url] = useState<string>('');
  const [chatIconFile, setChatIconFile] = useState<File | undefined>();
  const [chatIconUrl, setChatIconUrl] = useState<string>();
  const [chatIcon, setChatIcon] = useState<string>();
  const [chat_icon_url, setChat_icon_url] = useState<string>('');

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

  return (
    <>
      <div className="flex gap-x-4">
        <div className="p-4 w-[60%] bg-[#FCFCFC] rounded-xl">
          <div className="text-[15px]">
            <p className="font-medium mb-0 text-[#111827]">
              {t('userColor', { ns: 'config_bot' })}
            </p>
            <p className="text-[14px] text-[#9CA3AF]">
              {t('selectColor', { ns: 'config_bot' })}
            </p>
            <ColorPicker
              value={messageColor}
              onChange={(e) => setMessageColor(e.toHexString())}
            />
          </div>
          <div className="text-[15px] mt-4">
            <p className="font-medium mb-0 text-[#111827]">Chat bubble color</p>
            <p className="text-[14px] text-[#9CA3AF]">
              {t('selectColor', { ns: 'config_bot' })}
            </p>
            <ColorPicker
              value={buttonColor}
              onChange={(e) => setButtonColor(e.toHexString())}
            />
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
            <Switch size="small" checked={true} />
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
            <Switch size="small" checked={true} />
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
        </div>
        <div className="w-[40%]">
          <Interface
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
