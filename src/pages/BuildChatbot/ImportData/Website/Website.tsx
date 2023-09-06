import { ScrapingURLPayload } from '@/repository/buildChatBot/type';
import { RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { Progress, notification } from 'antd';
import { useMemo, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { TextLoadingWebsite } from './type';
import { TypeAnimation } from 'react-type-animation';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import FetchLinkItem from '../../Component/FetchLinkItem';

const Website = () => {
  const { onStreamingUploadUrl, fetchLink } = useBuildChatbot()
  const { data, listIncludesLink, loadingFetchLink } = useSelector((state: RootState) => state.buildChatBot);
  const [fullPageUrl, setFullPageUrl] = useState<string>('');
  const [directPageUrl, setDirectPageUrl] = useState<string>('');
  const [textLoading, setTextLoading] = useState<TextLoadingWebsite>({
    direct_page: '',
    full_page: ''
  });
  const SCRAPE_TYPE = {
    FULL_PAGE: 1,
    DIRECT_PAGE: 2
  }
  const onFetchLink = async(scrapeType: number) => {

    if (loadingFetchLink || !data) {
      return;
    }

    const valueLoading = Object.assign(textLoading)
    valueLoading[scrapeType  === SCRAPE_TYPE.FULL_PAGE ? "full_page" : "direct_page"] = "Fetching...";
    setTextLoading(valueLoading);
    const { id, user_id} = data;

    const scrapingUrlPayload : ScrapingURLPayload= {
      bot_id: id,
      user_id,
      scrape_url: scrapeType === SCRAPE_TYPE.FULL_PAGE ? fullPageUrl : directPageUrl,
      scrape_type: scrapeType,
    }

    try {
      onStreamingUploadUrl(scrapingUrlPayload)
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
    valueLoading[scrapeType === SCRAPE_TYPE.FULL_PAGE ? "full_page" : "direct_page"] = "";
    setTextLoading(valueLoading)
    resetUrl();
  }

  const listLink = useMemo(() => listIncludesLink, [listIncludesLink])

  const totalTokens = useMemo(() => listIncludesLink.reduce((accumulator, item) => accumulator + item.num_token, 0), [listIncludesLink])

  const resetUrl = () => {
    setFullPageUrl("")
    setDirectPageUrl("")
  }
  return (
    <>
      <div>
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Full Page <AiOutlineQuestionCircle size={18} color="#E77964" />
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
             {textLoading.full_page ? (<div>
                Fetching<TypeAnimation
                  sequence={['.', 800, '..', 800, '...', 800]}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
            ) : (
              'Fetch Link'
            )}
          </button>
        </div>
        {(!!fetchLink?.progress && textLoading.full_page) && <Progress className="mt-[10px]" percent={+(fetchLink.progress * 100).toFixed(2)} />}
      </div>
      <div className="flex justify-between gap-x-3 my-6 items-center">
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
        <span className="font-bold">OR</span>
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
      </div>

      <div>
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Direct Page <AiOutlineQuestionCircle size={18} color="#E77964" />
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
             {textLoading.direct_page ? (<div>
                Fetching<TypeAnimation
                  sequence={['.', 800, '..', 800, '...', 800]}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
            ) : (
              'Fetch Link'
            )}
          </button>
        </div>
        {(!!fetchLink?.progress && textLoading.direct_page) && <Progress className="mt-[10px]" percent={+(fetchLink.progress * 100).toFixed(2)} />}
      </div>
      <div className="mt-[20px]">
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Included Links{' '}
          <span className="text-[#A7A7B0] font-thin">({totalTokens} tokens)</span>
        </p>
        {!isEmptyObjectOrArray(listLink) &&
          listLink.map((item, idx) => {
            return (
              <FetchLinkItem item={item} key={idx}/>
            );
          })}
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">Included sources:</p>
        <p className="text-[15px]">
           {listLink.length} Links
          <span className="text-[#A7A7B0]">({totalTokens} tokens)</span>
        </p>
        <p className="text-[15px]">
          Total detected tokens: {totalTokens}/400,000 limit
        </p>
      </div>
      <div className="flex justify-end mt-[30px]">
        <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
          Import
        </button>
      </div>
    </>
  );
};

export default Website;