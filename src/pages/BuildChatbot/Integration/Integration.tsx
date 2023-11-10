import classNames from 'classnames';

import IconSite from '@/components/IconSite/IconSite';
import IconSlack from '@/components/IconSlack/IconSlack';
import IconMess from '@/components/IconMess/IconMess';
import IconTeams from '@/components/IconTeams/IconTeams';
import { useTranslation } from 'react-i18next';
import { iconWordpress, iconZalo } from '@/images';

import { useState } from 'react';
import ModalEmbed from './Modal/ModalEmbed';
import IconTelegram from '@/components/IconTelegram/IconTelegram';
import ModalTelegram from './Modal/ModalTelegram';
import ModalSlack from './Modal/ModalSlack';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { getTokenTelegramTransaction } from '@/repository/buildChatBot';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { API_STATUS } from '@/constants';
import ModalMsTeam from './Modal/ModalMsTeam';
import { QRCode, notification } from 'antd';
import { logoImg } from '@/images/logo';
const Integration = () => {
  const { t } = useTranslation();
  const { botInfos } = useBuildChatbot();
  const [openModalEmbed, setOpenModalEmbed] = useState(false);
  const [openModalTelegram, setOpenModalTelegram] = useState(false);
  const [openModalMsTeam, setOpenModalMsTeam] = useState(false);
  const [openModalSlack, setOpenModalSlack] = useState(false);
  const [tokenTelegram, setTokenTelegram] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const onIntegrationTelegram = async () => {
    try {
      const { meta, payload }: any = await dispatch(
        getTokenTelegramTransaction({ bot_id: botInfos.id }),
      );
      if (meta.requestStatus == API_STATUS.REJECTED) {
        throw meta;
      }
      setTokenTelegram(payload?.data.data);
      setOpenModalTelegram(true);
    } catch (error: any) {
      console.log('error', error);
    }
  };

  const onClick = () => {
    navigator.clipboard.writeText(`${window.location.origin}/chat/${botInfos.id}`);
    notification.success({
      message: `${t('copy', { ns: 'config_bot' })}`,
    });
  };


  return (
    <>
      <div
        className={classNames(
          'p-6 mt-[6px] py-[22px] px-[29px]',
          'flex justify-center',
        )}
      >
        <div className="">
          <div className="grid gap-y-[8px] w-[400px]">
            <div
              className={classNames(
                'font-medium flex-col mb-0 w-full py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <div className ="pb-2">{t('share_your_bot', { ns: 'config_bot' })}</div>
              <div className ="flex justify-center w-full">
                <QRCode
                  errorLevel="H"
                  value={`${window.location.origin}/chat/${botInfos.id}`}
                  icon={logoImg}
                />
              </div>
            </div>
            <div
              className={classNames(
                'font-medium mb-0 w-full py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <div
                onClick={onClick}
                className="rounded-[8px] w-full py-[10px] px-[14px] border-[1px] border-[#D0D5DD] cursor-pointer"
              >{`${window.location.origin}/chat/${botInfos.id}`}</div>

              <div
                onClick={onClick}
                className="rounded-[8px] p-3 border-[1px] border-[#D0D5DD] flex items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.88013 6.31055H11.3601C11.9901 6.31055 12.6001 6.57055 13.0401 7.03055L15.9801 10.0905C16.4001 10.5205 16.6301 11.1005 16.6301 11.7105V16.1905V17.6905V18.0305C16.6401 20.0305 15.0801 21.6705 13.0801 21.7505H6.88013C5.92013 21.7305 5.01013 21.3305 4.33013 20.6205C3.66013 19.9205 3.30013 18.9905 3.32013 18.0105V9.89055C3.37013 7.91055 5.00013 6.31055 6.97013 6.31055H7.38013H8.88013ZM13.0501 20.2505C14.2101 20.2005 15.1401 19.2305 15.1301 18.0305V12.6805H13.4101C11.7501 12.6705 10.4001 11.3205 10.4001 9.67055V7.81055H6.97013C5.81013 7.81055 4.84013 8.75055 4.82013 9.91055V18.0305C4.80013 18.6205 5.02013 19.1705 5.42013 19.5805C5.81013 20.0005 6.35013 20.2405 6.93013 20.2505H13.0501Z"
                    fill="#212121"
                  />
                  <path
                    opacity="0.4"
                    d="M17.1101 16.19C18.2601 16.14 19.2001 15.15 19.1801 13.98V8.62H17.4701C15.8101 8.61 14.4601 7.26 14.4601 5.6V3.75H11.0201C9.85013 3.75 8.91013 4.67 8.88013 5.85V6.31H7.38013V5.83C7.43013 3.84 9.06013 2.25 11.0201 2.25H15.4201C16.0401 2.25 16.6601 2.51 17.1001 2.97L20.0401 6.03C20.4501 6.44 20.6801 7.02 20.6801 7.65V13.97C20.7101 15.94 19.1201 17.61 17.1301 17.69H16.6301V16.19H17.1101Z"
                    fill="#212121"
                  />
                </svg>
              </div>
            </div>
            <p
              onClick={() => setOpenModalEmbed(true)}
              className={classNames(
                'mb-0 w-full py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex items-center px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconSite />
              {t('Embed', { ns: 'config_bot' })}
            </p>
            <a
              target="_blank"
              // href="https://slack.com/oauth/v2/authorize?client_id=5697154391091.5942177894499&scope=app_mentions:read,channels:history,chat:write,commands,im:history&user_scope=chat:write,im:history,channels:history,groups:history"
              onClick={() => setOpenModalSlack(true)}
              className={classNames(
                'mb-0 w-full py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex items-center px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconSlack />
              {t('addSlack', { ns: 'config_bot' })}{' '}
            </a>
            <div
              onClick={onIntegrationTelegram}
              className={classNames(
                'mb-0 w-full py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex items-center px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconTelegram />
              {t('addTelegram', { ns: 'config_bot' })}{' '}
            </div>
            <div
              className={classNames(
                'mb-0 w-full py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex items-center px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
              onClick={() => setOpenModalMsTeam(true)}
            >
              <IconTeams />
              {t('addTeam', { ns: 'config_bot' })}{' '}
            </div>

            <p
              className={classNames(
                'mb-0 w-full justify-between py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex items-center px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <div className="flex items-center gap-x-4">
                <IconMess />
                {t('addMess', { ns: 'config_bot' })}{' '}
              </div>
              <p className="flex items-center mb-0 uppercase text-[#D70] h-[24px] text-[10px] py-[2px] px-1 rounded-lg bg-[#F6F1E2]">
                {t('coming', { ns: 'pricing_plan' })}
              </p>
            </p>
            <p
              className={classNames(
                'mb-0 w-full justify-between py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex items-center px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <div className="flex items-center gap-x-4">
                <img src={iconWordpress} width={25} />
                {t('addWordpress', { ns: 'config_bot' })}{' '}
              </div>
              <p className="flex items-center mb-0 uppercase text-[#D70] h-[24px] text-[10px] py-[2px] px-1 rounded-lg bg-[#F6F1E2]">
                {t('coming', { ns: 'pricing_plan' })}
              </p>
            </p>
            <p
              className={classNames(
                'mb-0 w-full justify-between py-3 gap-x-4 bg-[#FFF] border-[1px] border-[#D0D5DD] flex items-center px-4',
                'text-[16px] text-black rounded-[8px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <div className="flex items-center gap-x-4">
                <img src={iconZalo} width={25} />
                {t('addZalo', { ns: 'config_bot' })}{' '}
              </div>

              <p className="flex items-center mb-0 uppercase text-[#D70] h-[24px] text-[10px] py-[2px] px-1 rounded-lg bg-[#F6F1E2]">
                {t('coming', { ns: 'pricing_plan' })}
              </p>
            </p>
          </div>
        </div>
      </div>
      <ModalEmbed
        open={openModalEmbed}
        onClose={() => setOpenModalEmbed(false)}
      />
      <ModalTelegram
        open={openModalTelegram}
        onClose={() => setOpenModalTelegram(false)}
        token={tokenTelegram}
      />
      <ModalSlack
        open={openModalSlack}
        onClose={() => setOpenModalSlack(false)}
      />
      <ModalMsTeam
        open={openModalMsTeam}
        onClose={() => setOpenModalMsTeam(false)}
      />
    </>
  );
};

export default Integration;
