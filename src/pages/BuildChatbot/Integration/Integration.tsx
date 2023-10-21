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
