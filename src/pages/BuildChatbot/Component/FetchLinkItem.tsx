import ModalComponent from '@/components/Modal';
import { API_STATUS } from '@/constants';
import { deleteURLTransaction, getAllURLTransaction } from '@/repository/buildChatBot';
import { DataFetchLink } from '@/states/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { notification } from 'antd';
import { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

interface FetchLinkItemProps {
  item: DataFetchLink;
}

const FetchLinkItem = ({ item }: FetchLinkItemProps) => {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const dispatch = useDispatch<AppDispatch>();

  const deleteUrl = async () => {
    if (!data) {
      return;
    }
    try {
      const { id } = data;
      const { meta } = await dispatch(
        deleteURLTransaction({ bot_id: id, url: item.url }),
      );

      if (meta.requestStatus == API_STATUS.REJECTED) {
        return;
      }
      notification.success({
        message: 'Delete URL success',
      });
      await dispatch(
        getAllURLTransaction({ bot_id: id}),
      );
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally{
      setVisibleDeleteModal(false)
    }
  };

  return (
    <div className="flex justify-between gap-x-[21px] mb-[20px]">
      <input
        disabled
        type="text"
        value={item.url}
        className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
      />
      <div className="flex justify-between w-[150px] items-center">
        <p className="mb-0">{item.num_token}</p>
        <RiDeleteBinLine
          size={18}
          color="#F44336"
          onClick={() => {
            setVisibleDeleteModal(true);
          }}
        />
      </div>
      <ModalComponent
        title={<div>Delete this Url</div>}
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
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-[#ef7772] py-2 px-6 font-medium text-white hover:shadow-1"
              onClick={deleteUrl}
            >
              Delete
            </button>
          </div>
        }
      >
        <div>
          Are you sure you want to delete this URL? This action cannot be
          undone.
        </div>
      </ModalComponent>
    </div>
  );
};

export default FetchLinkItem;
