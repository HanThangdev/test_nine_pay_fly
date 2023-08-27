import classNames from 'classnames';

import IconManage from '@/components/IconManage/IconManage';
import { Popover } from 'antd';
import IconGroup from '@/components/IconGroup/IconGroup';
import IconEdit from '@/components/IconEdit/IconEdit';
import IconShare from '@/components/IconShare/IconShare';
import IconDelete from '@/components/IconDelete/IconDelete';
import IconBot from '@/components/IconBot/IconBot';

import { AiFillClockCircle } from 'react-icons/ai';

const ManageChatbots = () => {
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
          All Chatbots <span className="font-thin">(6)</span>
        </h2>
        <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
          New Chatbot
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={classNames(
                'h-[336px] bg-[#F9F9FC] relative',
                'border-[1px] rounded-[10px] border-[#DCDEED] py-[12px] px-[19px]',
              )}
            >
              <div className="flex justify-between">
                <p className="text-[24px] font-black text-black">
                  BOT {index + 1}
                </p>
                <Popover
                  placement="bottomRight"
                  content={
                    <div className="grid gap-y-2">
                      <p className="m-auto">
                        <IconEdit />
                      </p>
                      <p className="m-auto">
                        <IconShare />
                      </p>
                      <p className="m-auto">
                        <IconDelete />
                      </p>
                    </div>
                  }
                  trigger="click"
                >
                  <p className="cursor-pointer">
                    <IconGroup />
                  </p>
                </Popover>
              </div>
              <div className="flex justify-center">
                <IconBot />
              </div>
              <p className="text-[20px] text-[#01058A] absolute bottom-0 flex items-center gap-x-2">
                <AiFillClockCircle />
                Today at 09:32 AM
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ManageChatbots;
