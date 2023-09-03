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
import { deleteChatBotTransaction, getBotTransaction } from '@/repository/manageChatbot';
import { API_STATUS } from '@/constants';

interface ChatbotElementProps {
  info: ResponseManageChatbot;
}

const ChatbotElement = ({ info }: ChatbotElementProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  // const [visibleShareodal, setVisibleShareModal] = useState<boolean>(false);

  const deletedChatbot = async () => {
    try {
      const { id } = info;
      const { meta } = await dispatch(
        deleteChatBotTransaction({ bot_id: id }),
      );

      if (meta.requestStatus == API_STATUS.REJECTED) {
         return;
      }

      notification.success({
        message: "Delete bot success",
      });
      await dispatch(getBotTransaction());
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  return (
    <div
      className={classNames(
        'h-[336px] bg-[#F9F9FC] relative',
        'border-[1px] rounded-[10px] border-[#DCDEED] py-[12px] px-[19px]',
      )}
    >
      <div className="flex justify-between">
        <p className="text-[24px] font-black text-black">{info.bot_name}</p>
        <Popover
          placement="bottomRight"
          open={openPopover}
          content={
            <div className="grid gap-y-2">
              <p className="m-auto">
                <IconEdit />
              </p>
              <p className="m-auto">
                <IconShare />
              </p>
              <p className="m-auto" onClick={() => {
                setOpenPopover(!openPopover)
                setVisibleDeleteModal(true)
              }}>
                <IconDelete />
              </p>
            </div>
          }
          trigger="click"
        >
          <p className="cursor-pointer" onClick={()=>{setOpenPopover(!openPopover)}}>
            <IconGroup />
          </p>
        </Popover>
      </div>
      <div className="flex justify-center">
        <IconBot />
      </div>
      <p className="text-[20px] text-[#01058A] absolute bottom-0 flex items-center gap-x-2">
        <AiFillClockCircle />
        Today at 09:32 AM
      </p>
      <ModalComponent
        title={<div>Delete your chatbot</div>}
        onCancel={() => {setVisibleDeleteModal(false)}}
        open={visibleDeleteModal}
        centered={true}
        footer={
          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => setVisibleDeleteModal(false)}
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-[#ef7772] py-2 px-6 font-medium text-white hover:shadow-1"
              onClick={deletedChatbot}
            >
              Delete
            </button>
          </div>
        }
      >
        <div>
          Are you sure you want to delete your chatbot? This action cannot be undone.
        </div>
      </ModalComponent>
    </div>
  );
};

export default ChatbotElement;
