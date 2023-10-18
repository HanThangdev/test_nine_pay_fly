import classNames from 'classnames';
import Header from '@/components/header';
import { useTranslation } from 'react-i18next';
import { Steps } from 'antd';
import { useState } from 'react';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import {
  IconConfig,
  IconImportData,
  IconAdvance,
  IconTest,
} from '@/components/IconGroup/IconGroup';
import Config from './Config';
import ImportData from './ImportData';

type Steps =
  | 'config'
  | 'import_data'
  | 'advance'
  | 'test_converstation'
  | undefined;

const CreateBot = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const { nameBot, caseStudy, promptExample } = useBuildChatbot();
  const [steps, setSteps] = useState<Steps>('config');

  if (!nameBot) {
    return;
  }

  return (
    <>
      <Header
        children={
          <>
            <div className="flex justify-between items-center gap-x-3 w-[calc(100%-400px)]">
              <p className="mb-0 text-[#1F2937] font-medium">{nameBot}</p>
              <div className="flex text-[12px] items-center">
                <div
                  onClick={() => setSteps('config')}
                  className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]"
                >
                  <IconConfig /> Config
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div
                  onClick={() => setSteps('import_data')}
                  className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]"
                >
                  <IconImportData /> Import Data
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]">
                  <IconAdvance /> Advance
                </div>
                <div className="bg-[#2D3FE7] w-[16px] h-[2px]"></div>
                <div className="bg-[#F3F4F6] cursor-pointer flex gap-x-1 rounded-2xl py-1 px-3 border-[1px] border-[#D1D5DB]">
                  <IconTest />
                  Test converstation
                </div>
              </div>
            </div>
          </>
        }
      />
      <div className="p-[20px] create-bot ">
        <div className="w-full h-full bg-[#FCFCFC] rounded-[12px] py-[12px] px-[16px] min-h-[calc(100vh-180px)] mb-[65px]">
          {steps === 'config' && <Config />}
          {steps === 'import_data' && <ImportData />}
        </div>
      </div>
      <div className="fixed bottom-0 w-[calc(100%-240px)] z-999 py-[9px] px-[20px] bg-[#FCFCFC] border-t-[1px] border-[#D1D5DB] flex justify-between">
        <p
          className="mb-0 border-[1px] text-[#344054] py-[10px] px-4 rounded-lg font-semibold cursor-pointer"
          onClick={() => undefined}
        >
          Exit
        </p>
        <div className="flex gap-x-2">
          <button
            onClick={() => undefined}
            className="bg-[#F5F8FF] py-[10px] px-4 rounded-lg text-[#415EC6]"
          >
            Save draft
          </button>
          <button
            onClick={() => undefined}
            className="bg-[#2D3FE7] py-[10px] px-4 rounded-lg text-white"
          >
            Next step
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBot;
