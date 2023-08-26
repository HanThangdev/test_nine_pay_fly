import classNames from 'classnames';
import IconSite from '@/components/IconSite/IconSite';
import IconSlack from '@/components/IconSlack/IconSlack';
import IconMess from '@/components/IconMess/IconMess';
import IconTeams from '@/components/IconTeams/IconTeams';
import { useState } from 'react';
import ModalIntegration from './ModalIntegration';
const Integration = () => {
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
            INTEGRATIONS
          </h2>
          <div className="grid gap-y-[25px] mt-[38px] w-[530px]">
            <p
              onClick={() => setOpenModal(true)}
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] font-bold rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconSite />
              Embed on site
            </p>
            <p
              onClick={() => setOpenModal(true)}
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] font-bold rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconSlack />
              Add to Slack workspace
            </p>
            <p
              onClick={() => setOpenModal(true)}
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] font-bold rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconTeams />
              Add to Microsoft Team
            </p>
            <p
              onClick={() => setOpenModal(true)}
              className={classNames(
                'mb-0 w-full h-[55px] gap-x-4 bg-[#E8E9F4] flex items-center justify-center',
                'text-[20px] text-[#01058A] font-bold rounded-[5px] hover:cursor-pointer hover:scale-105 duration-500 transition-all',
              )}
            >
              <IconMess />
              Add to Messenger
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
