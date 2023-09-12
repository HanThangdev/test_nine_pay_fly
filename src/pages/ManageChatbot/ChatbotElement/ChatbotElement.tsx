import classNames from 'classnames';

import { Popover, notification } from 'antd';
import IconGroup from '@/components/IconGroup/IconGroup';
import IconEdit from '@/components/IconEdit/IconEdit';
import IconShare from '@/components/IconShare/IconShare';
import IconDelete from '@/components/IconDelete/IconDelete';
import IconBot from '@/components/IconBot/IconBot';

import { AiFillClockCircle } from 'react-icons/ai';
import ModalComponent from '@/components/Modal';
import { useState } from 'react';
import { ResponseManageChatbot } from '@/states/manageBot/type';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import {
  deleteChatBotTransaction,
  getBotTransaction,
} from '@/repository/manageChatbot';
import { API_STATUS } from '@/constants';
import { useNavigate } from 'react-router-dom';
import { objectToQueryString } from '@/utils/utils';
import { resetStateBuild } from '@/states/buildChatBot/buildChatBot.slice';
import { useTranslation } from 'react-i18next';
import { formatTimeAgo } from '@/utils/format';

interface ChatbotElementProps {
  info: ResponseManageChatbot;
}

const ChatbotElement = ({ info }: ChatbotElementProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  // const [visibleShareodal, setVisibleShareModal] = useState<boolean>(false);

  const deletedChatbot = async () => {
    try {
      const { id } = info;
      const { meta } = await dispatch(deleteChatBotTransaction({ bot_id: id }));

      if (meta.requestStatus == API_STATUS.REJECTED) {
        setVisibleDeleteModal(false);
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

  const redirectToUpdateBot = () => {
    const { id } = info;
    dispatch(resetStateBuild());
    navigate(`/build-chatbots/${id}`);
  };

  return (
    <div
      className={classNames(
        'h-[336px] bg-[#F9F9FC] relative',
        'border-[1px] rounded-[10px] border-[#DCDEED] py-[12px] px-[19px]',
      )}
    >
      <div className="flex justify-between">
        <button
          className="text-[24px] font-black text-black"
          onClick={redirectToUpdateBot}
        >
          {info.bot_name}
        </button>
        <Popover
          placement="bottomRight"
          open={openPopover}
          content={
            <div className="grid gap-y-2">
              <p
                className="m-auto cursor-pointer pb-2"
                onClick={redirectToUpdateBot}
              >
                <IconEdit />
              </p>
              <p className="m-auto cursor-pointer pb-2">
                <IconShare />
              </p>
              <p
                className="m-auto cursor-pointer pb-2"
                onClick={() => {
                  setOpenPopover(!openPopover);
                  setVisibleDeleteModal(true);
                }}
              >
                <IconDelete />
              </p>
            </div>
          }
          trigger="click"
        >
          <p
            className="cursor-pointer"
            onClick={() => {
              setOpenPopover(!openPopover);
            }}
          >
            <IconGroup />
          </p>
        </Popover>
      </div>
      <div
        className="flex justify-center cursor-pointer"
        onClick={redirectToUpdateBot}
      >
        <IconBot />
      </div>
      <p className="text-[20px] text-[#01058A] absolute bottom-0 flex items-center gap-x-2">
        <AiFillClockCircle />
        {formatTimeAgo(new Date(info.updated_at))}
      </p>
      <ModalComponent
        title={<div>{t('textDelete', { ns: 'manage_bot' })}</div>}
        onCancel={() => {
          setVisibleDeleteModal(false);
        }}
        open={visibleDeleteModal}
        centered={true}
        footer={
          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => setVisibleDeleteModal(false)}
            >
              {t('Cancel', { ns: 'manage_bot' })}
            </button>
            <button
              className="flex justify-center rounded bg-[#ef7772] py-2 px-6 font-medium text-white hover:shadow-1"
              onClick={deletedChatbot}
            >
              {t('Delete', { ns: 'manage_bot' })}
            </button>
          </div>
        }
      >
        <div>{t('confirm', { ns: 'manage_bot' })}</div>
      </ModalComponent>
    </div>
  );
};

export default ChatbotElement;
