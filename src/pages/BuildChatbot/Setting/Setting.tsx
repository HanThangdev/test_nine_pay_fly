import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconInterface from '@/components/IconInterface/IconInterface';

import SetInterface from './SetInterface';
import Interface from './Interface';
const Setting = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<any>([]);
  const handleData = async (data: any) => {
    setData(data);
  };
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Setting',
      )}
    >
      <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3 items-center">
        <IconInterface />
        {t('ChatInter', { ns: 'config_bot' })}
      </h2>
      <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
        {t('Note', { ns: 'config_bot' })}
      </p>
      <div className="grid grid-cols-2 gap-x-6">
        <SetInterface dataSetinterface={handleData} />
        <Interface dataInterface={data} />
      </div>
    </div>
  );
};

export default Setting;
