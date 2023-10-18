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
import { IconImport } from '@/components/IconGroup/IconGroup';

const Website = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);

  const { onStreamingUploadUrl, fetchLink, onGetAllUrl } = useBuildChatbot();
  const { data, listIncludesLink, loadingFetchLink, includesResource } =
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
    if (loadingFetchLink || !data) {
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

      const { id, user_id } = data;

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

  // useEffect(() => {
  //   onGetAllUrl({ bot_id: data?.id });
  // }, []);

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
            className="px-3 flex items-center gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer"
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
            className="px-3 flex items-center gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer"
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
        <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
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
      </div>
    </>
  );
};

export default Website;
