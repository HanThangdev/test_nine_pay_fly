import classNames from 'classnames';
import IconManage from '@/components/IconManage/IconManage';
import { notification } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import Loader from '@/components/Loader';
import ChatbotElement from './ChatbotElement';
import { useNavigate } from 'react-router-dom';
import { resetStateBuild } from '@/states/buildChatBot/buildChatBot.slice';
import { useManageChatbot } from '@/states/manageBot/manageBot.selector';
import { useTranslation } from 'react-i18next';

const ManageChatbot = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { onGetBot } = useManageChatbot();
  const { ownerChatbot, loading } = useSelector(
    (state: RootState) => state.manageBot,
  );

  useEffect(() => {
    const fetchDataBot = async () => {
      try {
        onGetBot();
      } catch (error: any) {
        notification.error({
          message: error?.response?.data.errors ?? error?.message,
        });
      }
    };
    if (isEmptyObjectOrArray(ownerChatbot)) {
      fetchDataBot();
    }
  }, []);

  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3">
          <IconManage />
          {t('All', { ns: 'manage_bot' })}
          <span className="font-thin">({`${ownerChatbot.length || 0}`})</span>
        </h2>
        <button
          className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center"
          onClick={() => {
            dispatch(resetStateBuild());
            navigate('/build-chatbots');
          }}
        >
          {t('New', { ns: 'manage_bot' })}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {loading ? (
          <Loader className={classNames('col-span-3')} />
        ) : (
          !isEmptyObjectOrArray(ownerChatbot) &&
          ownerChatbot.map((_, index) => (
            <ChatbotElement info={_} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default ManageChatbot;
