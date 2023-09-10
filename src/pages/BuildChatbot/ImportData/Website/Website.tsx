import { ImportURLPayload } from '@/repository/buildChatBot/type';
import { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { Progress, notification } from 'antd';
import { useMemo, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { TextLoadingWebsite } from './type';
import { TypeAnimation } from 'react-type-animation';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import FetchLinkItem from '../../Component/FetchLinkItem';
import { useTranslation } from 'react-i18next';
import { loadFetchLink } from '@/states/buildChatBot/buildChatBot.slice';
import { validURL } from '@/utils/validate';

const Website = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { onStreamingUploadUrl, fetchLink } = useBuildChatbot();
  const { data, listIncludesLink, loadingFetchLink } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const [fullPageUrl, setFullPageUrl] = useState<string>('');
  const [directPageUrl, setDirectPageUrl] = useState<string>('');
  const [loadingFullPage, setLoadingFullPage] = useState<boolean>(false);
  const [loadingDirectPage, setLoadingDirectPage] = useState<boolean>(false);
  
  const SCRAPE_TYPE = {
    FULL_PAGE: 1,
    DIRECT_PAGE: 2,
  };
  const onFetchLink = async (scrapeType: number) => {
    if (loadingFetchLink || !data) {
      return;
    }

    if(!validURL(scrapeType === SCRAPE_TYPE.FULL_PAGE ? fullPageUrl : directPageUrl)){
      notification.error({
        message: "Invalid Url"
      });
    }

    dispatch(loadFetchLink({
      num_token: 0,
      progress: 0,
      url:""
    }))

    if(scrapeType == SCRAPE_TYPE.FULL_PAGE){
      setLoadingFullPage(true)
    }else{
      setLoadingDirectPage(true)
    }
    
    const { id, user_id } = data;

    const importUrlPayload: ImportURLPayload = {
      bot_id: id,
      user_id,
      scrape_url:
        scrapeType === SCRAPE_TYPE.FULL_PAGE ? fullPageUrl : directPageUrl,
      scrape_type: scrapeType,
    };

    try {
      await onStreamingUploadUrl(importUrlPayload);
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally {
      setLoadingFullPage(false)
      setLoadingDirectPage(false)
    }
    resetUrl();
  };

  const listLink = useMemo(() => listIncludesLink, [listIncludesLink]);

  const totalTokens = useMemo(
    () =>
      listIncludesLink.reduce(
        (accumulator, item) => accumulator + (item.num_token || 0),
        0,
      ),
    [listIncludesLink],
  );

  const resetUrl = () => {
    setFullPageUrl('');
    setDirectPageUrl('');
  };
  
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
            className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente"
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
        <span className="font-bold">{t('OR', { ns: 'config_bot' })}</span>
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
            className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center"
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
        {!isEmptyObjectOrArray(fetchLink) && loadingDirectPage&& (
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
            ({totalTokens} {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        {!isEmptyObjectOrArray(listLink) &&
          listLink.map((item, idx) => {
            return <FetchLinkItem item={item} key={idx} />;
          })}
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {t('IncludedSource', { ns: 'config_bot' })}:
        </p>
        <p className="text-[15px]">
          {listLink.length} Links
          <span className="text-[#A7A7B0]">
            ({totalTokens} {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        <p className="text-[15px]">
          {t('TotalToken', { ns: 'config_bot' })}: {totalTokens}/400,000{' '}
          {t('limit', { ns: 'config_bot' })}
        </p>
      </div>
      {/* <div className="flex justify-end mt-[30px]">
        <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
          Import
        </button>
      </div> */}
    </>
  );
};

export default Website;
