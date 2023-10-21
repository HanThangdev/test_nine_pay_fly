import ModalComponent from '@/components/Modal';
import { API_STATUS } from '@/constants';
import { IconDelete, IconToken } from '@/components/IconGroup/IconGroup';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { deletedListIncludes } from '@/states/buildChatBot/buildChatBot.slice';
import { DataFetchFile } from '@/states/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { formatNumber } from '@/utils/format';
import { notification } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

interface FileItemProps {
  item: DataFetchFile;
  index: number;
}

const FileItem = ({ item, index }: FileItemProps) => {
  const { t } = useTranslation();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const dispatch = useDispatch<AppDispatch>();
  const { onDeleteFileImported, onGetAllFile } = useBuildChatbot();
  const deleteUrl = async () => {
    if (!botInfos) {
      return;
    }
    try {
      const { id } = botInfos;
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
    <div className="flex justify-between gap-x-[21px] mb-[20px] px-2 bg-[#F9FAFB] rounded-lg border-[1px] border-[#dfe1e5]">
      <div className="flex justify-between w-full h-[41px] items-center">
        <div className="w-full text-[17px]">{item.filename}</div>
        <div className="flex justify-between w-[200px] items-center">
          <span className="mb-0 font-medium flex items-center gap-x-1">
            <IconToken />({formatNumber(item.num_token)}{' '}
            {t('tokens', { ns: 'config_bot' })})
          </span>
          <div
            className="p-1 rounded border-[1px] border-[#FDA29B] ml-2 bg-[#FFF]"
            onClick={() => {
              setVisibleDeleteModal(true);
            }}
          >
            <IconDelete />
          </div>
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

export default FileItem;
