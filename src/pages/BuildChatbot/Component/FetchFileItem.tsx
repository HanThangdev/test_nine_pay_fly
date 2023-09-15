import ModalComponent from '@/components/Modal';
import { API_STATUS } from '@/constants';
import {
  deleteURLTransaction,
  getAllURLTransaction,
} from '@/repository/buildChatBot';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { deletedListIncludes } from '@/states/buildChatBot/buildChatBot.slice';
import { DataFetchFile } from '@/states/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { formatNumber } from '@/utils/format';
import { notification } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

interface FetchFileItemProps {
  item: DataFetchFile;
  index: number;
}

const FetchFileItem = ({ item, index }: FetchFileItemProps) => {
  const { t } = useTranslation();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const dispatch = useDispatch<AppDispatch>();
  const { onDeleteFileImported, onGetAllFile } = useBuildChatbot();
  const deleteUrl = async () => {
    if (!data) {
      return;
    }
    try {
      const { id } = data;
      const { knowledge_base_id } = item;

      onDeleteFileImported({ knowledge_base_id, bot_id: id }).then(
        (response) => {
          if (response.meta.requestStatus === API_STATUS.FULFILLED) {
            dispatch(deletedListIncludes(index));
            notification.success({
              message: 'Delete URL success',
            });
            onGetAllFile({ bot_id: id });
          }
        },
      );
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally {
      setVisibleDeleteModal(false);
    }
  };

  return (
    <div className="flex justify-between gap-x-[21px] mb-[20px]">
      <div className="flex justify-between mt-[15px] w-full">
        <div className="w-full font-bold text-[17px]">{item.filename}</div>
        <div className="text-[15px] flex items-center justify-end w-full">
          <span className="text-[#A7A7B0 mr-[48px] font-bold text-[16px]">
            ({formatNumber(item.num_token)} {t('tokens', { ns: 'config_bot' })})
          </span>
          <RiDeleteBinLine
            className="cursor-pointer"
            size={18}
            color="#F44336"
            onClick={() => {
              setVisibleDeleteModal(true);
            }}
          />
        </div>
        {/* <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
            Done
          </button> */}
      </div>
      <ModalComponent
        title={<div>Delete this File</div>}
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
          Are you sure you want to delete this File? This action cannot be
          undone.
        </div>
      </ModalComponent>
    </div>
  );
};

export default FetchFileItem;
