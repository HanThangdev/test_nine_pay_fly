import ModalComponent from '@/components/Modal';
import { API_STATUS } from '@/constants';
import {
  deleteURLTransaction,
} from '@/repository/buildChatBot';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { deletedListIncludes } from '@/states/buildChatBot/buildChatBot.slice';
import { DataFetchLink } from '@/states/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { formatNumber } from '@/utils/format';
import { notification } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

interface FetchLinkItemProps {
  item: DataFetchLink;
  index: number;
  setUrlSelected: Dispatch<SetStateAction<string[]>>
  urlSelected: string[]
}

const FetchLinkItem = ({ item, index, setUrlSelected, urlSelected }: FetchLinkItemProps) => {
  const { t } = useTranslation();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const { data } = useSelector((state: RootState) => state.buildChatBot);
  const dispatch = useDispatch<AppDispatch>();
  const { onGetAllUrl } = useBuildChatbot();
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

      dispatch(deletedListIncludes(index));
      notification.success({
        message: 'Delete URL success',
      });
      onGetAllUrl({ bot_id: id });
      // await dispatch(
      //   getAllURLTransaction({ bot_id: id}),
      // );
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally {
      setVisibleDeleteModal(false);
    }
  };

  // const onChangeSelectedUrl = (e: CheckboxChangeEvent) => {
  //   if(urlSelected.includes(e.target.value)){
  //     const currentUrlSelected = Array.from(urlSelected)
  //     setUrlSelected(currentUrlSelected.filter((item) => item !== e.target.value))
  //   } else{
  //     setUrlSelected([...urlSelected, e.target.value])
  //   }
  // } 

  return (
    <div className="flex justify-between gap-x-[21px] mb-[20px]">
      <input
        disabled
        type="text"
        value={item.url}
        className="h-[41px] w-full  bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
      />
      <div className="flex justify-between w-[150px] items-center">
        <p className="mb-0 font-bold">{formatNumber(item?.num_token || 0)} {t('tokens', { ns: 'config_bot' })}</p>
        <RiDeleteBinLine
          size={18}
          className="cursor-pointer"
          color="#F44336"
          onClick={() => {
            setVisibleDeleteModal(true);
          }}
        />
        {/* <div className="text-success-color font-bold">Done</div>
        <div className="">
          <Checkbox onChange={onChangeSelectedUrl} value={item.url} checked={urlSelected.includes(item.url)}/>
        </div> */}
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
