import classNames from 'classnames';

import IconSite from '@/components/IconSite/IconSite';
import IconSlack from '@/components/IconSlack/IconSlack';
import IconMess from '@/components/IconMess/IconMess';
import IconTeams from '@/components/IconTeams/IconTeams';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import ModalIntegration from './ModalIntegration';
const Integration = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
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
              onClick={() => setOpenModal(true)}
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconSite />
              {t('Embed', { ns: 'config_bot' })}
            </p>
            <a
              target='_blank'
              href='https://slack.com/oauth/v2/authorize?client_id=5697154391091.5942177894499&scope=app_mentions:read,channels:history,chat:write,commands,im:history&user_scope=chat:write,im:history,channels:history,groups:history'
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconSlack />
              {t('addSlack', { ns: 'config_bot' })}{' '}
            </a>
            <picture
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconTeams />
              {t('addTeam', { ns: 'config_bot' })}{' '}
              <span className="font-bold">
                {t('coming', { ns: 'config_bot' })}
              </span>
            </picture>
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
          </div>
        </div>
      </div>
      {openModal && (
        <ModalIntegration
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default Integration;
