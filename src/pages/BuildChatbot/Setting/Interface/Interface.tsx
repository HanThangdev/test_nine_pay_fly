import classNames from 'classnames';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconReload from '@/components/IconReload/IconReload';
import { AiFillRightCircle } from 'react-icons/ai';

const Interface = () => {
  return (
    <>
      <div
        className={classNames(
          'rounded-[8px] border-[10px] border-[rgb(220,222,237)] h-[654px] relative',
        )}
      >
        <div className="flex justify-between h-[45px] bg-[#FAFAFD] items-center px-[18px]">
          <p className="mb-0 flex items-center gap-x-[10px] text-[16px] text-[#01058A]">
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
        <div className="absolute h-[62px] bottom-0 w-full items-center border-t-[1px] border-[#E7E8F2] p-2 flex gap-x-[12px]">
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
    </>
  );
};

export default Interface;
