import { ImportURLPayload } from '@/repository/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { Progress, notification } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import LinkItem from '@/pages/BuildChatbot/Component/LinkItem';
import { useTranslation } from 'react-i18next';
import { loadFetchLink } from '@/states/buildChatBot/buildChatBot.slice';
import { validURL } from '@/utils/validate';
import { API_STATUS } from '@/constants';
import { formatNumber } from '@/utils/format';
import { IconDelete, IconImport } from '@/components/IconGroup/IconGroup';
import { DataFetchLink } from '@/states/buildChatBot/type';
import { deleteURLTransaction } from '@/repository/buildChatBot';
import ModalComponent from '@/components/Modal';

const Website = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { onStreamingUploadUrl, fetchLink, onGetAllUrl } = useBuildChatbot();
  const { botInfos, listIncludesLink, loadingFetchLink } =
    useSelector((state: RootState) => state.buildChatBot);
  const [fullPageUrl, setFullPageUrl] = useState<string>('');
  const [directPageUrl, setDirectPageUrl] = useState<string>('');
  const [loadingFullPage, setLoadingFullPage] = useState<boolean>(false);
  const [loadingDirectPage, setLoadingDirectPage] = useState<boolean>(false);
  const [ visibleModalDeleteAll, setVisibleModalDeleteAll ] = useState(false);

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

  const totalTokens = useMemo(
    () =>
      listIncludesLink.reduce(
        (accumulator: number, item: DataFetchLink) => accumulator + (item.num_token || 0),
        0,
      ),
    [listIncludesLink],
  );
  const onDeleteAllLink = async() => {
    if (!botInfos) {
      return;
    }
    try {
      const { id } = botInfos;
      const listAllUrlPayload = listLink.map(it => btoa(it.url))
      const { meta } = await dispatch(
        deleteURLTransaction({ bot_id: id, url: listAllUrlPayload }),
      );

      if (meta.requestStatus == API_STATUS.REJECTED) {
        return;
      }
      onGetAllUrl({ bot_id: id });
      notification.success({
        message: "Delete all URL success",
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } 
  }
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
        <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
          {t('FullPage', { ns: 'config_bot' })}{' '}
        </p>
        <div className="flex justify-between gap-x-2">
          <input
            value={fullPageUrl}
            onChange={(e) => setFullPageUrl(e.target.value)}
            type="text"
            placeholder="https://www.example.com"
            className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button
            className="px-3 flex items-center min-w-[65px] gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer whitespace-nowrap"
            onClick={() => onFetchLink(SCRAPE_TYPE.FULL_PAGE)}
            disabled={loadingFetchLink}
          >
            <IconImport />
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
      <div className="flex justify-between gap-x-3 mt-6 mb-4 items-center">
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
        <span className="font-bold min-w-fit">
          {t('OR', { ns: 'config_bot' })}
        </span>
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
      </div>

      <div>
        <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
          {t('Direct', { ns: 'config_bot' })}{' '}
        </p>
        <div className="flex justify-between gap-x-2">
          <input
            value={directPageUrl}
            onChange={(e) => setDirectPageUrl(e.target.value)}
            type="text"
            placeholder="https://www.example.com"
            className="h-[41px] w-full rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button
            className="px-3 flex items-center min-w-[65px] gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer whitespace-nowrap"
            onClick={() => onFetchLink(SCRAPE_TYPE.DIRECT_PAGE)}
            disabled={loadingFetchLink}
          >
            <IconImport />
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
        <div className="flex justify-between pb-3">
          <div>
            <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
              {t('IncludedLinks', { ns: 'config_bot' })}
              <span className="text-[#A7A7B0] font-thin">
                ({formatNumber(totalTokens)} {t('tokens', { ns: 'config_bot' })}
                )
              </span>
            </p>
          </div>
          <div>
            {!!(listLink.length && listLink.length > 1) && (
              <div
                className="p-1 font-bold rounded border-[1px] border-[#FDA29B] ml-1 bg-[#FFF] flex cursor-pointer text-[#B42318]"
                onClick={() => {
                  setVisibleModalDeleteAll(true);
                }}
              >
                <IconDelete /> <span>Delete all link</span>
              </div>
            )}
          </div>
        </div>
        {!isEmptyObjectOrArray(listLink) &&
          listLink.map((item, idx: number) => (
            <LinkItem
              item={item}
              key={idx}
              index={idx}
            />
          ))}
      </div>
      <ModalComponent
        title={<div>Delete all Url</div>}
        onCancel={() => {
          setVisibleModalDeleteAll(false);
        }}
        open={visibleModalDeleteAll}
        centered={true}
        footer={
          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => setVisibleModalDeleteAll(false)}
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-[#ef7772] py-2 px-6 font-medium text-white hover:shadow-1"
              onClick={onDeleteAllLink}
            >
              Delete
            </button>
          </div>
        }
      >
        <div>
          Are you sure you want to delete all Q&A? This action cannot be
          undone.
        </div>
      </ModalComponent>
    </>
  );
};

export default Website;
