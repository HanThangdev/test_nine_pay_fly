import React, { useRef, useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import ColorPicker from 'react-pick-color';
import { FormData, schema } from './type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { PiSunDimLight } from 'react-icons/pi';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Checkbox, Upload, Popover, notification } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { RcFile } from 'antd/es/upload';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { AdvanceSettingTransaction } from '@/repository/buildChatBot';
import { API_STATUS } from '@/constants';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { convertFile2Base64 } from '@/utils/utils';
import { useTranslation } from 'react-i18next';

const optionsAlign = [
  {
    label: 'right',
    value: 'right',
  },
  {
    label: 'left',
    value: 'left',
  },
];

interface Props {
  dataSetinterface: (_data: any) => Promise<void>;
}

const SetInterface = ({ dataSetinterface }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const resultRef = useRef<any>(null);
  const resultRefButton = useRef<any>(null);
  const [color, setColor] = useState('#4AC1FF');
  const [openColor, setOpencolor] = useState(false);
  const [colorButton, setColorButton] = useState('#4AC1FF');
  const [openColorButton, setOpencolorButton] = useState(false);
  const [suggestMessages, setSuggestMessages] = useState('');
  const [suggestArray, setSuggestArray] = useState([] as string[]);
  const [theme, setTheme] = useState('light');
  const [botAvatarFile, setBotAvatarFile] = useState<File | undefined>();
  const [botAvatarUrl, setBotAvatarUrl] = useState<string>();
  const [botAvatar, setBotAvatar] = useState<string>();
  const [removeImage, setRemoveImage] = useState(false);
  const [openButtonIcon, setOpenButtonIcon] = useState(false);
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const [dataSet, setDataSet] = useState<any>({
    bot_id: data.id,
    initial_message: 'Hello! How can I assist you today?',
    display_name: '',
    align_chat_bubble_button: 'right',
    auto_show_initial_message_after: 0,
    chat_icon_url:
      'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
  });

  const beforeUpload = async (file: RcFile | File) => {
    setBotAvatarFile(file);
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

  const onChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setBotAvatar('');
      setRemoveImage(true);
    } else {
      setBotAvatar(botAvatarUrl);
      setRemoveImage(false);
    }
  };

  useEffect(() => {
    setDataSet({
      ...dataSet,
      suggest_messages: suggestArray,
      theme: theme,
      bot_avatar_url: botAvatar,
      chat_message_color: color,
      chat_bubble_button_color: colorButton,
    });
  }, [suggestArray, theme, botAvatar, color, colorButton]);

  useEffect(() => {
    dataSetinterface(dataSet);
  }, [dataSet]);

  const { handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      initial_message: 'Hello! How can I assist you today?',
      display_name: '',
      chat_bubble_button_color: '',
      align_chat_bubble_button: 'right',
      auto_show_initial_message_after: 0,
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const newArray = suggestMessages.split('\n').filter((item) => item !== '');
    setSuggestArray(newArray);
  }, [suggestMessages]);

  const onSubmit = handleSubmit(async () => {
    try {
      const { meta } = await dispatch(AdvanceSettingTransaction(dataSet));

      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }

      notification.success({
        message: `${t('AdvancedSuccess', { ns: 'config_bot' })}`,
      });
      setTimeout(() => {}, 500);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  });

  useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (resultRef.current && !resultRef.current.contains(e.target)) {
        setOpencolor(false);
      }
      if (
        resultRefButton.current &&
        !resultRefButton.current.contains(e.target)
      ) {
        setOpencolorButton(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);

  const handleOpenChange = (newOpen: boolean) => {
    setOpenButtonIcon(newOpen);
  };

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="text-[15px]">
          <p className="font-bold mb-[8px]">
            {t('Initial', { ns: 'config_bot' })}
          </p>
          <input
            type="text"
            placeholder=""
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            {...register('initial_message')}
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
          <p className="font-bold mb-[8px]">
            {t('AutoShow', { ns: 'config_bot' })}
          </p>
          <input
            type="number"
            placeholder=""
            min={0}
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            {...register('auto_show_initial_message_after')}
            onChange={(e) =>
              setDataSet({
                ...dataSet,
                auto_show_initial_message_after: e.target.value,
              })
            }
          />
        </div>
        <div className="text-[15px]">
          <p className="font-bold mb-[8px]">
            {t('SuggesttedMess', { ns: 'config_bot' })}
          </p>
          <textarea
            placeholder=""
            className="h-[100px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            onChange={(e) => setSuggestMessages(e.target.value)}
          />
          <p className="mt-[12px] text-[#A7A7B0]">
            {t('EnterEach', { ns: 'config_bot' })}
          </p>
        </div>
        <div className="text-[15px]">
          <p className="font-bold mb-[8px]">
            {t('Theme', { ns: 'config_bot' })}
          </p>
          <div className="flex gap-x-4">
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={classNames(
                'py-2 px-3 items-center rounded-[5px] flex gap-x-2',
                {
                  'bg-[#f4f4f5]': theme == 'light',
                },
              )}
            >
              <PiSunDimLight size={20} />
              {t('Light', { ns: 'config_bot' })}
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={classNames(
                'py-2 px-3 items-center rounded-[5px] flex gap-x-2',
                {
                  'bg-[#f4f4f5]': theme == 'dark',
                },
              )}
            >
              <MdOutlineDarkMode size={20} />
              {t('Dark', { ns: 'config_bot' })}
            </button>
          </div>
        </div>
        <div className="text-[15px] mt-[15px]">
          {!removeImage && (
            <>
              <p className="font-bold mb-[8px]">
                {t('UpdateChatAvatar', { ns: 'config_bot' })}
              </p>

              <div className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] items-center justify-center flex">
                <Upload
                  accept="image/*"
                  maxCount={1}
                  showUploadList={false}
                  customRequest={() => {
                    return false;
                  }}
                  beforeUpload={beforeUpload}
                >
                  <FiUpload size={20} />{' '}
                </Upload>
              </div>
            </>
          )}

          <p className="mt-[12px] mb-1">
            {t('RemoveChatAvatar', { ns: 'config_bot' })}
          </p>
          <Checkbox onChange={onChange}></Checkbox>
        </div>
        <div className="text-[15px] mt-4">
          <p className="font-bold mb-[8px]">
            {t('DisplayName', { ns: 'config_bot' })}
          </p>
          <input
            type="text"
            placeholder=""
            {...register('display_name')}
            onChange={(e) =>
              setDataSet({
                ...dataSet,
                display_name: e.target.value,
              })
            }
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
        <div className="text-[15px]">
          <p className="font-bold mt-4 mb-[8px]">
            {t('colorUserMess', { ns: 'config_bot' })}
          </p>
          <div className="flex justify-between">
            <div>
              <div
                onClick={() => setOpencolor(!openColor)}
                className="h-[41px] w-[41px] rounded-[5px] border border-[#DCDEED] cursor-pointer flex items-center justify-center"
              >
                <p
                  className={classNames(`mb-0 w-[35px] h-[35px] rounded-[5px]`)}
                  style={{ background: color }}
                ></p>
              </div>
              <div ref={resultRef} className="mt-[-35px]">
                {openColor && (
                  <ColorPicker
                    color={color}
                    onChange={(color) => setColor(color.hex)}
                    className="absolute ml-[55px]"
                  />
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setColor('#4AC1FF')}
              className="right-[38px] w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente"
            >
              {t('Reset', { ns: 'config_bot' })}
            </button>
          </div>
        </div>
        <div className="text-[15px] flex gap-x-4 items-center mt-[15px]">
          <p className="font-bold mb-0">
            {t('UpdateIconChat', { ns: 'config_bot' })}
          </p>
          <Popover
            content={
              <div className="w-[220px] grid grid-cols-4 gap-x-2">
                {itemsIcon.map((item, index) => (
                  <div
                    key={index}
                    className="w-[50px] h-[50px] flex items-center justify-center rounded-full p-2 hover:bg-[#e8e9f4]"
                    onClick={() =>
                      setDataSet({
                        ...dataSet,
                        chat_icon_url: item,
                      })
                    }
                  >
                    <img className="w-[30px] h-[30px]" src={item} />
                  </div>
                ))}
              </div>
            }
            title={false}
            trigger="click"
            open={openButtonIcon}
            onOpenChange={handleOpenChange}
          >
            <div className="h-[50px] w-[50px] cursor-pointer rounded-full border border-[#DCDEED] bg-[#ffffffeb] items-center justify-center flex">
              <img className="w-[30px] h-[30px]" src={dataSet.chat_icon_url} />
            </div>
          </Popover>
        </div>
        <div className="text-[15px] mt-4 flex gap-x-4">
          <p className="font-bold mt-4 mb-[8px]">
            {t('ChatBubble', { ns: 'config_bot' })}
          </p>
          <div className="flex justify-between">
            <div
              onClick={() => setOpencolorButton(!openColorButton)}
              className="h-[41px] w-[41px] mt-2 rounded-[5px] border border-[#DCDEED] cursor-pointer flex items-center justify-center"
            >
              <p
                className={classNames(`mb-0 w-[35px] h-[35px] rounded-[5px]`)}
                style={{ background: colorButton }}
              ></p>
            </div>
            <div ref={resultRefButton} className="ml-[-35px]">
              {openColorButton && (
                <ColorPicker
                  color={colorButton}
                  onChange={(color) => setColorButton(color.hex)}
                  className="absolute ml-[55px]"
                />
              )}
            </div>
          </div>
        </div>
        <div className="text-[15px] mt-4">
          <p className="font-bold mb-[8px]">
            {t('AlignChat', { ns: 'config_bot' })}
          </p>
          <select
            {...register('align_chat_bubble_button')}
            onChange={(e) =>
              setDataSet({
                ...dataSet,
                align_chat_bubble_button: e.target.value,
              })
            }
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          >
            {optionsAlign.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end mt-[30px]">
          <button
            type="submit"
            className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente"
          >
            {t('save', { ns: 'config_bot' })}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetInterface;

const itemsIcon = [
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-1.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-2.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-3.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-4.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-5.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-6.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-7.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-8.svg',
  'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/logo-9.svg',
];
