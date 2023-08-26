import classNames from 'classnames';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconReload from '@/components/IconReload/IconReload';
import { AiFillRightCircle } from 'react-icons/ai';
const Testing = () => {
  return (
    <div
      className={classNames(
        'rounded-[8px] bg-white h-[654px] relative text-[18px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <div className="flex justify-between h-[45px] items-center px-[18px] border-b-[1px] border-[#E7E8F2]">
        <p className="mb-0 flex items-center gap-x-[10px] font-bold text-[#01058A]">
          <IconInterface />
          Chat fly
        </p>
        <IconReload />
      </div>
      <div className="py-[37px] px-[27px] gap-y-[10px] grid">
        <div className="bg-[#F1F7FF] p-2 rounded-t-lg rounded-br-lg w-fit">
          Hello! How can I assist you today?
        </div>
        <div className="w-full justify-end flex">
          <p className="bg-[#D1EFFF] p-2 rounded-t-lg rounded-bl-lg w-fit">
            Hi
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex gap-x-3 ml-[26px]">
          <p className="bg-[#F1F7FF] p-2 rounded-lg w-fit"> What's ChatFly?</p>
          <p className="bg-[#F1F7FF] p-2 rounded-lg w-fit"> Policy</p>
        </div>
        <p className="text-[#878787] ml-[26px]">48 massage credits left</p>
        <div className="h-[62px] items-center border-t-[1px] border-[#E7E8F2] p-2 flex gap-x-[12px]">
          <input
            type="text"
            placeholder=""
            className="h-[47px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <p className="mb-0 w-[40px]">
            <AiFillRightCircle size={40} color="#4AC1FF" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testing;
