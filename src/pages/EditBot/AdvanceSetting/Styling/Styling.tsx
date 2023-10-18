import { RootState } from '@/states/store';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Interface from '../Interface';
import classNames from 'classnames';
import {
  IconDark,
  IconLight,
  IconUpload,
} from '@/components/IconGroup/IconGroup';
import { Switch, Upload, ColorPicker } from 'antd';

const Styling = () => {
  const { t } = useTranslation();
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const [theme, setTheme] = useState('light');
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
            <p className="font-medium mb-0 text-[#111827]">
              {t('userColor', { ns: 'config_bot' })}
            </p>
            <p className="text-[14px] text-[#9CA3AF]">
              {t('selectColor', { ns: 'config_bot' })}
            </p>
            <ColorPicker />
          </div>
          <div className="text-[15px] mt-4">
            <p className="font-medium mb-0 text-[#111827]">Chat bubble color</p>
            <p className="text-[14px] text-[#9CA3AF]">
              {t('selectColor', { ns: 'config_bot' })}
            </p>
            <ColorPicker />
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
              name="file"
              multiple={true}
              accept=".doc,.docx,.csv,.xlsx,.pdf,.txt"
              maxCount={1}
              showUploadList={false}
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
              name="file"
              multiple={true}
              accept=".doc,.docx,.csv,.xlsx,.pdf,.txt"
              maxCount={1}
              showUploadList={false}
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
          <Interface />
        </div>
      </div>
    </>
  );
};

export default Styling;
