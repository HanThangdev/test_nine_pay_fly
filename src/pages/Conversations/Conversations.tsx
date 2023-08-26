import classNames from 'classnames';
import IconReload from '@/components/IconReload/IconReload';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconDown from '@/components/IconDown/IconDown';
import { BiSolidFileExport } from 'react-icons/bi';
import { DatePicker } from 'antd';
const Conversations = () => {
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <div className="flex justify-between items-center">
        <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
          Select chatbot
        </button>
        <div className="flex items-center gap-x-3">
          <DatePicker placeholder="From" />
          <p className="mb-0">~</p>
          <DatePicker placeholder="To" />
        </div>
      </div>
      <div className={classNames('mt-6 grid grid-cols-2 gap-x-8')}>
        <div>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={classNames(
                  'hover:bg-[#F9F9FC] hover:cursor-pointer border-[1px] border-[#DCDEED] rounded-[5px] p-4',
                )}
              >
                <div className="flex justify-between text-[15px] text-[#33343D]">
                  <p>Customer:</p>
                  <p>2 Day</p>
                </div>
                <div className="flex justify-between gap-x-4 text-[20px] text-[#33343D]">
                  <p className="mb-0 w-[85%]">
                    Chatfly platformabout 3 hours ago Initial message: How are
                    you?
                  </p>
                  <p className="flex items-end">
                    <IconDown />
                  </p>
                </div>
              </div>
            ))}
        </div>
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
        </div>
      </div>
      <div className="flex justify-end mt-[30px]">
        <button className="w-[150px] flex items-center gap-x-2 justify-center h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[15px] font-bold justify-cente">
          <BiSolidFileExport size={24} />
          Export PDF
        </button>
      </div>
    </div>
  );
};

export default Conversations;
