import classNames from 'classnames';
import IconManage from '@/components/IconManage/IconManage';
import { notification } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { getBotTransaction } from '@/repository/manageChatbot';
import { isEmptyObjectOrArray } from '@/utils/utils';
import Loader from '@/common/Loader';
import ChatbotElement from './ChatbotElement';
import { useNavigate } from 'react-router-dom';

const ManageChatbot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { ownerChatbot, loading } = useSelector(
    (state: RootState) => state.manageBot,
  );

  useEffect(() => {
    console.log('i fire once');
    const fetchDataBot = async () => {
      try {
        await dispatch(getBotTransaction());
      } catch (error: any) {
        notification.error({
          message: error?.response?.data.errors ?? error?.message,
        });
      }
    };

    fetchDataBot();
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
          All Chatbots{' '}
          <span className="font-thin">({`${ownerChatbot.length || 0}`})</span>
        </h2>
        <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center" onClick={()=>navigate('/')}>
          New Chatbot
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {loading ? (
          <Loader className={classNames('col-span-3')} />
        ) : (
          !isEmptyObjectOrArray(ownerChatbot) &&
          ownerChatbot.map((_, index) => (
            <ChatbotElement info={_} key={index}/>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageChatbot;
