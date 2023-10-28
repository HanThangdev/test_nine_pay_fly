import classNames from 'classnames';

import { notification, Switch } from 'antd';
import {
  IconEdit,
  IconShare,
  IconDelete,
} from '@/components/IconGroup/IconGroup';

import ModalComponent from '@/components/Modal';
import { useEffect, useState } from 'react';
import { ResponseManageChatbot } from '@/states/manageBot/type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import {
  deleteChatBotTransaction,
  changeActiveChatBotTransaction,
  getBotTransaction,
} from '@/repository/manageChatbot';
import { API_STATUS } from '@/constants';
import { useNavigate } from 'react-router-dom';
import { resetStateBuild } from '@/states/buildChatBot/buildChatBot.slice';
import { useTranslation } from 'react-i18next';
import { formatTimeAgo } from '@/utils/format';
import { image_bot1, image_bot2, image_bot3 } from '@/images';

interface ChatbotElementProps {
  info: ResponseManageChatbot;
}

const images = [image_bot1, image_bot2, image_bot3];

const ChatbotElement = ({ info }: ChatbotElementProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const [visibleShareModal, setVisibleShareModal] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * images.length),
  );
  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomNumber);
  };
  useEffect(() => changeImage(), []);
  const { ownerChatbot } = useSelector((state: RootState) => state.manageBot);
  const { currentPricingPlan } = useSelector(
    (state: RootState) => state.pricing,
  );
  const [botsActive, setBotsActive] = useState<any[]>([]);

  useEffect(() => {
    setBotsActive(
      ownerChatbot.filter((item: any) => item.is_activate === true),
    );
  }, [ownerChatbot]);

  const deletedChatbot = async () => {
    try {
      const { id } = info;
      const { meta } = await dispatch(deleteChatBotTransaction({ bot_id: id }));

      if (meta.requestStatus == API_STATUS.REJECTED) {
        return;
      }

      notification.success({
        message: `${t('DeleteSuccess', { ns: 'manage_bot' })}`,
      });
      await dispatch(getBotTransaction());
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  const onActive = async () => {
    if (
      currentPricingPlan === 'Free' &&
      botsActive.length > 0 &&
      !info.is_activate
    ) {
      notification.error({
        message: `${t('limitBot', { ns: 'manage_bot' })}`,
      });
    } else {
      try {
        const { id } = info;
        const status = info.is_activate ? false : true;
        const { meta } = await dispatch(
          changeActiveChatBotTransaction({ bot_id: id, is_activate: status }),
        );

        if (meta.requestStatus == API_STATUS.REJECTED) {
          setVisibleDeleteModal(false);
          return;
        }

        await dispatch(getBotTransaction());
      } catch (error: any) {
        notification.error({
          message: error?.response?.data.errors ?? error?.message,
        });
      }
    }
  };

  const redirectToUpdateBot = () => {
    const { id } = info;
    dispatch(resetStateBuild());
    navigate(`/edit-chatbot/${id}`);
  };

  const onClick = () => {
    navigator.clipboard.writeText(`${window.location.origin}/chat/${info.id}`);
    notification.success({
      message: `${t('copy', { ns: 'config_bot' })}`,
    });
  };

  return (
    <div
      className={classNames(
        ' bg-[#F9FAFB] relative flex gap-x-[12px] justify-between',
        'border-[1px] rounded-[8px] border-[#D1D5DB] p-[16px]',
      )}
    >
      <div
        className="flex justify-center min-w-[124px] h-[85px] cursor-pointer border-[1px] border-[#D1D5DB] rounded-[8px]"
        onClick={redirectToUpdateBot}
      >
        <img src={images[currentImageIndex]} />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start">
          {info.is_activate ? (
            <button
              className="text-[20px] text-[#111827]"
              onClick={redirectToUpdateBot}
            >
              {info.bot_name}
            </button>
          ) : (
            <p className="text-[20px] text-[#111827] mb-0">{info.bot_name}</p>
          )}

          <div className="flex gap-x-2">
            <p
              className="cursor-pointer items-center mb-0 flex gap-x-1 bg-[#FFF] py-2 px-3 border-[1px] border-[#D0D5DD] text-[14px] text-[#374151] rounded-[8px]"
              onClick={() => setVisibleShareModal(true)}
            >
              <IconShare />
              {t('Share', { ns: 'manage_bot' })}
            </p>
            <p
              className={classNames(
                'cursor-pointer items-center mb-0 flex gap-x-1 bg-[#FFF] py-2 px-3 border-[1px] border-[#D0D5DD] text-[14px] text-[#374151] rounded-[8px]',
                {
                  'opacity-50': !info.is_activate,
                },
              )}
              onClick={() => info.is_activate && redirectToUpdateBot()}
            >
              <IconEdit />
              {t('Modify', { ns: 'manage_bot' })}
            </p>
            <p
              className="cursor-pointer items-center mb-0 flex gap-x-1 border-[#FDA29B] bg-[#FFF] py-2 px-3 border-[1px] text-[14px] text-[#374151] rounded-[8px]"
              onClick={() => setVisibleDeleteModal(true)}
            >
              <IconDelete />
            </p>
          </div>
        </div>
        <p className="text-[14px] mb-0 text-[#6B7280] flex items-center gap-x-2">
          {t('Lastupdate', { ns: 'manage_bot' })}:{' '}
          {formatTimeAgo(new Date(info.updated_at))}
        </p>
      </div>
      <div className="Switch-bot min-w-[230px] h-full bg-[#F9FAFB] border-[1px] border-[#E5E7EB] gap-x-4 rounded-[8px] py-2 px-3">
        <p className="text-[14px] flex items-center">
          <Switch
            size="small"
            className="mr-2"
            checked={info.is_activate}
            onClick={onActive}
          />
          {t('Active', { ns: 'manage_bot' })}
        </p>
        <p className="mb-0 text-[14px]">
          {info.is_activate
            ? `${t('active', { ns: 'manage_bot' })}`
            : `${t('inactive', { ns: 'manage_bot' })}`}
        </p>
      </div>

      <ModalComponent
        title={
          <div className="text-[18px] text-[#101828] font-semibold">
            <p className="bg-[#FEF3F2] w-fit p-2 rounded-full">
              <p className="w-fit p-2 bg-[#FEE4E2] mb-0 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#D92D20"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </p>
            {t('textDelete', { ns: 'manage_bot' })}
          </div>
        }
        onCancel={() => {
          setVisibleDeleteModal(false);
        }}
        open={visibleDeleteModal}
        centered={true}
        width={400}
        footer={
          <div className="grid grid-cols-2 justify-end gap-4.5">
            <button
              className="flex justify-center rounded-lg border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => setVisibleDeleteModal(false)}
            >
              {t('Cancel', { ns: 'manage_bot' })}
            </button>
            <button
              className="flex justify-center rounded-lg bg-[#D92D20] py-2 px-6 font-medium text-white hover:shadow-1"
              onClick={deletedChatbot}
            >
              {t('Delete', { ns: 'manage_bot' })}
            </button>
          </div>
        }
      >
        <div>{t('confirm', { ns: 'manage_bot' })}</div>
      </ModalComponent>
      <ModalComponent
        title={
          <div className="text-[18px] text-[#101828] font-semibold">
            <p className="bg-[#F9F5FF] w-fit p-2 rounded-full">
              <p className="w-fit p-2 bg-[#F4EBFF] mb-0 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.5 7.5H7.51M21.09 13.91L13.92 21.08C13.7343 21.266 13.5137 21.4135 13.2709 21.5141C13.0281 21.6148 12.7678 21.6666 12.505 21.6666C12.2422 21.6666 11.9819 21.6148 11.7391 21.5141C11.4963 21.4135 11.2757 21.266 11.09 21.08L2.5 12.5V2.5H12.5L21.09 11.09C21.4625 11.4647 21.6716 11.9716 21.6716 12.5C21.6716 13.0284 21.4625 13.5353 21.09 13.91Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </p>
            {t('Sharechatbot', { ns: 'manage_bot' })}
          </div>
        }
        onCancel={() => {
          setVisibleShareModal(false);
        }}
        open={visibleShareModal}
        centered={true}
        footer={
          <div className="w-full justify-end gap-4.5">
            <button
              className="flex justify-center w-full rounded-lg border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => setVisibleShareModal(false)}
            >
              {t('Closepopup', { ns: 'manage_bot' })}
            </button>
          </div>
        }
      >
        <div className="flex justify-between gap-x-2">
          <div
            onClick={onClick}
            className="rounded-[8px] w-full py-[10px] px-[14px] border-[1px] border-[#D0D5DD] cursor-pointer"
          >{`${window.location.origin}/chat/${info.id}`}</div>
          <div
            onClick={onClick}
            className="rounded-[8px] p-3 border-[1px] border-[#D0D5DD] flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.88013 6.31055H11.3601C11.9901 6.31055 12.6001 6.57055 13.0401 7.03055L15.9801 10.0905C16.4001 10.5205 16.6301 11.1005 16.6301 11.7105V16.1905V17.6905V18.0305C16.6401 20.0305 15.0801 21.6705 13.0801 21.7505H6.88013C5.92013 21.7305 5.01013 21.3305 4.33013 20.6205C3.66013 19.9205 3.30013 18.9905 3.32013 18.0105V9.89055C3.37013 7.91055 5.00013 6.31055 6.97013 6.31055H7.38013H8.88013ZM13.0501 20.2505C14.2101 20.2005 15.1401 19.2305 15.1301 18.0305V12.6805H13.4101C11.7501 12.6705 10.4001 11.3205 10.4001 9.67055V7.81055H6.97013C5.81013 7.81055 4.84013 8.75055 4.82013 9.91055V18.0305C4.80013 18.6205 5.02013 19.1705 5.42013 19.5805C5.81013 20.0005 6.35013 20.2405 6.93013 20.2505H13.0501Z"
                fill="#212121"
              />
              <path
                opacity="0.4"
                d="M17.1101 16.19C18.2601 16.14 19.2001 15.15 19.1801 13.98V8.62H17.4701C15.8101 8.61 14.4601 7.26 14.4601 5.6V3.75H11.0201C9.85013 3.75 8.91013 4.67 8.88013 5.85V6.31H7.38013V5.83C7.43013 3.84 9.06013 2.25 11.0201 2.25H15.4201C16.0401 2.25 16.6601 2.51 17.1001 2.97L20.0401 6.03C20.4501 6.44 20.6801 7.02 20.6801 7.65V13.97C20.7101 15.94 19.1201 17.61 17.1301 17.69H16.6301V16.19H17.1101Z"
                fill="#212121"
              />
            </svg>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};

export default ChatbotElement;
