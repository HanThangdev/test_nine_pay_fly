import classNames from 'classnames';
import IconInterface from '@/components/IconInterface/IconInterface';
import SetInterface from './SetInterface';
import Interface from './Interface';
const Setting = () => {
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3 items-center">
        <IconInterface />
        Chat Interface
      </h2>
      <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
        Note: Applies when embedded on a website
      </p>
      <div className="grid grid-cols-2 gap-x-6">
        <SetInterface />
        <Interface />
      </div>
    </div>
  );
};

export default Setting;
