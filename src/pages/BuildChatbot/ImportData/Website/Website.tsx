import { ImportURLPayload } from '@/repository/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { Progress, notification } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedItem, TextLoadingWebsite } from './type';
import { TypeAnimation } from 'react-type-animation';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import LinkItem from '../../Component/LinkItem';
import { useTranslation } from 'react-i18next';
import {
  deletedListIncludes,
  loadFetchLink,
} from '@/states/buildChatBot/buildChatBot.slice';
import { validURL } from '@/utils/validate';
import { API_STATUS } from '@/constants';
import { formatNumber } from '@/utils/format';
import ModalComponent from '@/components/Modal';
import { deleteURLTransaction } from '@/repository/buildChatBot';

const Website = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);

  const { onStreamingUploadUrl, fetchLink, onGetAllUrl } = useBuildChatbot();
  const { botInfos, listIncludesLink, loadingFetchLink, includesResource } =
    useSelector((state: RootState) => state.buildChatBot);
  const [fullPageUrl, setFullPageUrl] = useState<string>('');
  const [directPageUrl, setDirectPageUrl] = useState<string>('');
  const [loadingFullPage, setLoadingFullPage] = useState<boolean>(false);
  const [loadingDirectPage, setLoadingDirectPage] = useState<boolean>(false);
  const [urlSelected, setUrlSelected] = useState<string[]>([]);

  const SCRAPE_TYPE = {
    FULL_PAGE: 1,
    DIRECT_PAGE: 2,
  };
  const onFetchLink = async (scrapeType: number) => {
    if (loadingFetchLink || !botInfos) {
      return;
    }

    try {
      if (scrapeType == SCRAPE_TYPE.FULL_PAGE) {
        setLoadingFullPage(true);
      } else {
        setLoadingDirectPage(true);
      }

      if (
        !validURL(
          scrapeType === SCRAPE_TYPE.FULL_PAGE ? fullPageUrl : directPageUrl,
        )
      ) {
        notification.error({
          message: 'Invalid Url',
        });
        return;
      }

      dispatch(
        loadFetchLink({
          num_token: 0,
          progress: 0,
          url: '',
        }),
      );

      const { id, user_id } = botInfos;

      const importUrlPayload: ImportURLPayload = {
        bot_id: id,
        user_id,
        scrape_url:
          scrapeType === SCRAPE_TYPE.FULL_PAGE ? fullPageUrl : directPageUrl,
        scrape_type: scrapeType,
      };

      await onStreamingUploadUrl(importUrlPayload).then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          onGetAllUrl({ bot_id: id });
        }
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally {
      setLoadingFullPage(false);
      setLoadingDirectPage(false);
    }
    resetUrl();
  };

  const listLink = useMemo(() => listIncludesLink, [listIncludesLink]);
  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );

  const totalTokens = useMemo(
    () =>
      listIncludesLink.reduce(
        (accumulator, item) => accumulator + (item.num_token || 0),
        0,
      ),
    [listIncludesLink],
  );

  const deleteUrl = () => {
    setVisibleDeleteModal(false);
  };

  const resetUrl = () => {
    setFullPageUrl('');
    setDirectPageUrl('');
  };

  useEffect(() => {
    onGetAllUrl({ bot_id: botInfos?.id });
  }, []);

  return (
    <>
      <div>
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          {t('FullPage', { ns: 'config_bot' })}{' '}
          <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <div className="flex justify-between gap-x-[21px]">
          <input
            value={fullPageUrl}
            onChange={(e) => setFullPageUrl(e.target.value)}
            type="text"
            placeholder="https://www.example.com"
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button
            className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center cursor-pointer"
            onClick={() => onFetchLink(SCRAPE_TYPE.FULL_PAGE)}
            disabled={loadingFetchLink}
          >
            {loadingFullPage ? (
              <div>
                <TypeAnimation
                  sequence={['.', 800, '..', 800, '...', 800]}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
            ) : (
              `${t('Import', { ns: 'config_bot' })}`
            )}
          </button>
        </div>
        {!isEmptyObjectOrArray(fetchLink) && loadingFullPage && (
          <Progress
            className="mt-[10px]"
            percent={+(fetchLink.progress * 100).toFixed(2)}
          />
        )}
      </div>
      <div className="flex justify-between gap-x-3 my-6 items-center">
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
        <span className="font-bold min-w-fit">
          {t('OR', { ns: 'config_bot' })}
        </span>
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
      </div>

      <div>
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          {t('Direct', { ns: 'config_bot' })}{' '}
          <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <div className="flex justify-between gap-x-[21px]">
          <input
            value={directPageUrl}
            onChange={(e) => setDirectPageUrl(e.target.value)}
            type="text"
            placeholder="https://www.example.com"
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button
            className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center cursor-pointer"
            onClick={() => onFetchLink(SCRAPE_TYPE.DIRECT_PAGE)}
            disabled={loadingFetchLink}
          >
            {loadingDirectPage ? (
              <div>
                <TypeAnimation
                  sequence={['.', 800, '..', 800, '...', 800]}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
            ) : (
              `${t('Import', { ns: 'config_bot' })}`
            )}
          </button>
        </div>
        {!isEmptyObjectOrArray(fetchLink) && loadingDirectPage && (
          <Progress
            className="mt-[10px]"
            percent={+(fetchLink.progress * 100).toFixed(2)}
          />
        )}
      </div>
      <div className="mt-[20px]">
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          {t('IncludedLinks', { ns: 'config_bot' })}
          <span className="text-[#A7A7B0] font-thin">
            ({formatNumber(totalTokens)} {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        {!isEmptyObjectOrArray(listLink) &&
          listLink.map((item, idx) => (
            <LinkItem
              item={item}
              key={idx}
              index={idx}
              setUrlSelected={setUrlSelected}
              urlSelected={urlSelected}
            />
          ))}
        {/* <div className='flex justify-end'>
            <button
              onClick={() => setVisibleDeleteModal(true)}
              className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-end cursor-pointer"
            >
              {t('Delete', { ns: 'config_bot' })}
            </button>
          </div> */}
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {t('IncludedSource', { ns: 'config_bot' })}:
        </p>
        <p className="text-[15px] font-bold">
          {includesResourceData?.resource[1]?.number_of_resources || 0}{' '}
          {(includesResourceData?.resource[1]?.number_of_resources || 0) > 1
            ? `${t('Files', { ns: 'config_bot' })}`
            : `${t('File', { ns: 'config_bot' })}`}
          <span className="text-[#A7A7B0]">
            ({formatNumber(includesResourceData?.resource[1]?.token || 0)}{' '}
            {t('tokens', { ns: 'config_bot' })})
          </span>{' '}
          | {includesResourceData?.resource[0]?.number_of_resources || 0}{' '}
          {(includesResourceData?.resource[0]?.number_of_resources || 0) > 1
            ? `${t('Links', { ns: 'config_bot' })}`
            : `${t('Link', { ns: 'config_bot' })}`}
          <span className="text-[#A7A7B0]">
            ({formatNumber(includesResourceData?.resource[0]?.token || 0)}{' '}
            {t('tokens', { ns: 'config_bot' })})
          </span>{' '}
          | {includesResourceData?.resource[2]?.number_of_resources || 0} Q&A
          <span className="text-[#A7A7B0]">
            ({formatNumber(includesResourceData?.resource[2]?.token || 0)}{' '}
            {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        <p className="text-[15px] font-bold">
          {t('TotalToken', { ns: 'config_bot' })}:{' '}
          {formatNumber(includesResourceData?.total_token || 0)} /10.000.000{' '}
          {t('limit', { ns: 'config_bot' })}
        </p>
      </div>
      {/* <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {t('IncludedSource', { ns: 'config_bot' })}:
        </p>
        <p className="text-[15px] font-bold">
          {listLink.length}{' '}{t('Links', { ns: 'config_bot' })}
          <span className="text-[#A7A7B0]">
            ({formatNumber(totalTokens)} {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        <p className="text-[15px] font-bold">
          {t('TotalToken', { ns: 'config_bot' })}: {formatNumber(totalTokens)}/10.000.000{' '}
          {t('limit', { ns: 'config_bot' })}
        </p>
      </div> */}
      {/* <div className="flex justify-end mt-[30px]">
        <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
          Import
        </button>
      </div> */}
      {/* <ModalComponent
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
      </ModalComponent> */}
    </>
  );
};

export default Website;
