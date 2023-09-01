import { API_STATUS } from '@/constants';
import { scrapingURLTransaction } from '@/repository/buildChatBot';
import { ScrapingURLPayload } from '@/repository/buildChatBot/type';
import store, { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { Progress, notification } from 'antd';
import { useMemo, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { TextLoadingWebsite } from './type';
import { TypeAnimation } from 'react-type-animation';
import { DataFetchLink } from '@/states/buildChatBot/type';

const Website = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, listIncludesLink } = useSelector((state: RootState) => state.buildChatBot);
  const [fullPageUrl, setFullPageUrl] = useState<string>('');
  const [directPageUrl, setDirectPageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [valueProcess, setValueProcess] = useState<DataFetchLink>({
    num_token: 0,
    progress: 0,
    url: ''
  });
  const [textLoading, setTextLoading] = useState<TextLoadingWebsite>({
    direct_page: '',
    full_page: ''
  });
  const SCRAPE_TYPE = {
    FULL_PAGE: 1,
    DIRECT_PAGE: 2
  }
  const onFetchLink = async(scrapeType: number) => {

    if (loading) {
      return;
    }

    setLoading(true);
    const valueLoading = Object.assign(textLoading)
    valueLoading[scrapeType  === SCRAPE_TYPE.FULL_PAGE ? "full_page" : "direct_page"] = "Fetching...";
    setTextLoading(valueLoading);
    const { id, user_id  } = data;

    const scrapingUrlPayload : ScrapingURLPayload= {
      bot_id: id,
      user_id,
      scrape_url: scrapeType === SCRAPE_TYPE.FULL_PAGE ? fullPageUrl : directPageUrl,
      scrape_type: scrapeType,
      setValueProcess
    }

    try {
      const { meta, payload  } = await dispatch<any>(
        scrapingURLTransaction(scrapingUrlPayload),
      );

      if(meta.requestStatus == API_STATUS.REJECTED){
        return
      }
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
    valueLoading[scrapeType === SCRAPE_TYPE.FULL_PAGE ? "full_page" : "direct_page"] = "";
    setTextLoading(valueLoading)
    setLoading(false);
    setValueProcess({
      num_token: 0,
      progress: 0,
      url: ''
    })
    resetUrl();
  }

  const listLink = useMemo(() => listIncludesLink, [listIncludesLink])

  // const onDeletedLink = (index: number) => {
  //   dispatch(deletedListIncludes(index));
  // }

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
            placeholder="Do not respond to content outside the documents provided"
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button
            className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente"
            onClick={() => onFetchLink(SCRAPE_TYPE.FULL_PAGE)}
            disabled={loading}
          >
             {textLoading.full_page ? (<div>
                Fetching<TypeAnimation
                  sequence={['.', 800, '.', 800, '.', 1000, '.']}
                  repeat={Infinity}
                />
              </div>
            ) : (
              'Fetch Link'
            )}
          </button>
        </div>
        {!!valueProcess.progress && <Progress className="mt-[10px]" percent={+(valueProcess.progress * 100).toFixed(2)} />}
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
            disabled={loading}
          >
             {textLoading.direct_page ? (<div>
                Fetching<TypeAnimation
                  sequence={['.', 800, '.', 800, '.', 1000, '.']}
                  repeat={Infinity}
                />
              </div>
            ) : (
              'Fetch Link'
            )}
          </button>
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Included Links{' '}
          <span className="text-[#A7A7B0] font-thin">(4000 chars)</span>
        </p>
        {!isEmptyObjectOrArray(listLink) &&
          listLink.map((item, idx) => {
            return (
              <div className="flex justify-between gap-x-[21px] mb-[20px]" key={idx}>
                <input
                  disabled
                  type="text"
                  value={item.url}
                  className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                />
                <div className="flex justify-between w-[150px] items-center">
                  <p className="mb-0">{item.num_token}</p>
                  <RiDeleteBinLine size={18} color="#F44336" />
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">Included sources:</p>
        <p className="text-[15px]">
          0 Files
          <span className="text-[#A7A7B0]">(0 chars) </span>| 0 Links
          <span className="text-[#A7A7B0]">(0 chars)</span>
        </p>
        <p className="text-[15px]">
          Total detected characters: 40/400,000 limit
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
