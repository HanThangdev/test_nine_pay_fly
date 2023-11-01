import classNames from 'classnames';
import IconAllBot from '@/components/IconAllBot/IconAllBot';
import { Modal, notification, Slider } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import Loader from '@/components/Loader';
import ChatbotElement from './ChatbotElement';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { resetStateBuild } from '@/states/buildChatBot/buildChatBot.slice';
import { useManageChatbot } from '@/states/manageBot/manageBot.selector';
import { useTranslation } from 'react-i18next';
import Header from '@/components/header';
import IconSubcription from '@/components/IconSubcription/IconSubcription';
import { IconCreate_fillWhite } from '@/components/IconCreate/IconCreate';
import { CreateBotModalWrapper } from '../CreateBot/CreateBotModal';

const urlParams = new URLSearchParams(window.location.search);
const getLanguageFromURL = urlParams.get('language');

const ManageChatbot = () => {
  const { t } = useTranslation();
  const { typeIntegration, status } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { onGetBot } = useManageChatbot();
  const { ownerChatbot, loading } = useSelector(
    (state: RootState) => state.manageBot,
  );
  const { currentPricingPlan, number_of_chatbots, monthly_message_credits } =
    useSelector((state: RootState) => state.pricing);
  const lang = getLanguageFromURL || localStorage.getItem('LANGUAGE') || 'en';
  const [botsActive, setBotsActive] = useState<any[]>([]);

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

  const renderModalStatusIntegration = (
    typeIntegration: string,
    status: string,
  ) => {
    if (status == 'success') {
      Modal.success({
        title: `Congratulations! Your integration with ${typeIntegration} is a success. 🎉🚀`,
        // width: 500,
        onOk: () => {
          navigate('/');
        },
        okButtonProps: {
          className:
            'w-[120px] h-[40px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[14px] font-bold ',
        },
      });
    }
    if (status == 'fail') {
      Modal.error({
        title: `Sorry, your integration on ${typeIntegration} fail, please try again or contact with Admin`,
        // width: 500,
        onOk: () => {
          navigate('/');
        },
        okButtonProps: {
          className:
            'w-[120px] h-[40px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[14px] font-bold ',
        },
      });
    }
  };

  useEffect(() => {
    if (typeIntegration && status) {
      renderModalStatusIntegration(typeIntegration, status);
    }
  }, []);

  useEffect(() => {
    setBotsActive(
      ownerChatbot.filter((item: any) => item.is_activate === true && !item.is_deleted),
    );
  }, [ownerChatbot]);

  return (
    <>
      <Header
        children={
          <>
            <h1 className="text-[24px] text-[#1F2937] mb-0">{t('Manage')}</h1>
          </>
        }
      />
      <div className="px-[20px] py-[16px] manage-bots">
        <div className="grid grid-cols-3 gap-x-[20px]">
          <div className="col-span-1 bg-[#FCFCFC] rounded-[12px] p-[16px]">
            <div className="flex justify-between items-center mb-2">
              <p className="mb-0 text-[18px] flex gap-x-1 text-black">
                <IconSubcription />
                {t('Subscription', { ns: 'manage_bot' })}
              </p>
              <p className="mb-0 text-[14px] bg-button-upgrade h-[28px] flex items-center px-2 text-white rounded-lg font-semibold">
                <NavLink to="/price">{t('Upgrade')}</NavLink>
              </p>
            </div>
            <p className="mb-2 flex">
              {t('Currentplan', { ns: 'manage_bot' })} -
              <span
                className={classNames('text-black ml-1', {
                  'flex flex-row-reverse': lang === 'vi',
                })}
              >
                <span
                  className={classNames({
                    'lowercase ml-1': lang === 'vi',
                  })}
                >
                  {currentPricingPlan === 'Free' &&
                    `${t('Free', { ns: 'manage_bot' })}`}
                  {currentPricingPlan === 'Basic' &&
                    `${t('Basic', { ns: 'manage_bot' })}`}
                  {currentPricingPlan === 'Starter' &&
                    `${t('Starter', { ns: 'manage_bot' })}`}
                  {currentPricingPlan === 'Standard' &&
                    `${t('Standard', { ns: 'manage_bot' })}`}
                  {currentPricingPlan === 'Business' &&
                    `${t('Business', { ns: 'manage_bot' })}`}
                </span>
                {t('plan', { ns: 'manage_bot' })}
              </span>
            </p>
            <div className="h-[1px] bg-[#E5E7EB]"></div>
            <p className="flex justify-between my-2">
              {t('Price', { ns: 'manage_bot' })}
              <span className="text-black">
                {currentPricingPlan === 'Free' &&
                  `${t('Free', { ns: 'manage_bot' })}`}
                {currentPricingPlan === 'Basic' &&
                  `${t('Basic', { ns: 'manage_bot' })}`}
                {currentPricingPlan === 'Starter' &&
                  `${t('Starter', { ns: 'manage_bot' })}`}
                {currentPricingPlan === 'Standard' &&
                  `${t('Standard', { ns: 'manage_bot' })}`}
                {currentPricingPlan === 'Business' &&
                  `${t('Business', { ns: 'manage_bot' })}`}
              </span>
            </p>
            <p className="flex justify-between mb-2">
              {t('Remain', { ns: 'manage_bot' })}
              <span className="text-black">
                {monthly_message_credits} {t('request', { ns: 'manage_bot' })}
              </span>
            </p>
            <p className="flex justify-between mb-0">
              {t('Billing', { ns: 'manage_bot' })}
              <span className="text-black">
                {' '}
                {t('Monthly', { ns: 'manage_bot' })}
              </span>
            </p>
          </div>
          <div className="col-span-2 bg-[#FCFCFC] rounded-[12px] p-[16px]">
            <p className="mb-0 text-[18px] flex gap-x-1 text-black">
              <IconSubcription />
              {t('Chatbotusage', { ns: 'manage_bot' })}
            </p>
            <div className="grid grid-cols-2 gap-x-[16px] mt-2">
              <div>
                <div className="flex justify-between text-[13px]">
                  <p className="mb-0">
                    {' '}
                    {t('Activebot', { ns: 'manage_bot' })}
                  </p>
                  <p className="mb-0">
                    {botsActive.length}/{ownerChatbot.filter(it => !it.is_deleted).length}{' '}
                    {t('bots', { ns: 'manage_bot' })}
                  </p>
                </div>
                <Slider
                  value={botsActive.length}
                  disabled
                  max={ownerChatbot.length}
                />
              </div>
              <div>
                <div className="flex justify-between text-[13px]">
                  <p className="mb-0">{t('Operation', { ns: 'manage_bot' })}</p>
                  <p className="mb-0">20/2000 {t('requests')}</p>
                </div>
                <Slider defaultValue={30} disabled />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div
          className={classNames(
            'bg-[#FCFCFC] rounded-[10px] p-4 mt-[16px] min-h-[calc(100vh-325px)]',
            'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
          )}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-[16px] text-black flex gap-x-3">
              <IconAllBot />
              {t('Manage')}
            </h2>
            <CreateBotModalWrapper>
              {({ onOpen }) => (
                <button
                  className="py-1 px-2 bg-[#2D3FE7] text-white rounded-[8px] text-[14px] font-bold justify-center flex gap-x-1"
                  onClick={() => {
                    dispatch(resetStateBuild());
                    onOpen();
                  }}
                >
                  <IconCreate_fillWhite />
                  {t('New', { ns: 'manage_bot' })}
                </button>
              )}
            </CreateBotModalWrapper>
          </div>
          <div className="grid gap-y-4 mt-[24px]">
            {loading ? (
              <Loader className={classNames('col-span-3')} />
            ) : (
              !isEmptyObjectOrArray(ownerChatbot) &&
              ownerChatbot.map((_, index) => {
                return !_.is_deleted ? <ChatbotElement info={_} key={index} /> : <></>
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageChatbot;
