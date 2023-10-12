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
import {
  getTokenTelegramTransaction,
} from '@/repository/buildChatBot';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { API_STATUS } from '@/constants';
import ModalMsTeam from './Modal/ModalMsTeam';
const Integration = () => {
  const { t } = useTranslation();
  const { data } = useBuildChatbot();
  const [openModalEmbed, setOpenModalEmbed] = useState(false);
  const [openModalTelegram, setOpenModalTelegram] = useState(false);
  const [openModalMsTeam, setOpenModalMsTeam] = useState(false);
  const [openModalSlack, setOpenModalSlack] = useState(false);
  const [tokenTelegram, setTokenTelegram] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const onIntegrationTelegram = async () => {
    try {
      const { meta, payload }: any = await dispatch(
        getTokenTelegramTransaction({ bot_id: data.id }),
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

  
  return (
    <>
      <div
        className={classNames(
          'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] h-[100vh] flex justify-center',
        )}
      >
        <div className="my-[58px] ">
          <h2 className="text-[20px] flex justify-center text-[#33343d] font-black gap-x-3 items-center">
            {t('INTEGRATIONS', { ns: 'config_bot' })}
          </h2>
          <div className="grid gap-y-[25px] mt-[38px] w-[590px]">
            <p
              onClick={() => setOpenModalEmbed(true)}
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
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
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconSlack />
              {t('addSlack', { ns: 'config_bot' })}{' '}
            </a>
            <div
              onClick={onIntegrationTelegram}
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconTelegram />
              {t('addTelegram', { ns: 'config_bot' })}{' '}
            </div>
            <div
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
              onClick={() => setOpenModalMsTeam(true)}
            >
              <IconTeams />
              {t('addTeam', { ns: 'config_bot' })}{' '}
            </div>

            <p
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconMess />
              {t('addMess', { ns: 'config_bot' })}{' '}
              <span className="font-bold">
                {t('coming', { ns: 'config_bot' })}
              </span>
            </p>
            <p
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <img src={iconWordpress} width={25} />
              {t('addWordpress', { ns: 'config_bot' })}{' '}
              <span className="font-bold">
                {t('coming', { ns: 'config_bot' })}
              </span>
            </p>
            <p
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <img src={iconZalo} width={25} />
              {t('addZalo', { ns: 'config_bot' })}{' '}
              <span className="font-bold">
                {t('coming', { ns: 'config_bot' })}
              </span>
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
