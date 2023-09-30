import { RiDeleteBinLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { formatNumber } from '@/utils/format';

const QuestionAnswer = () => {
  const { t } = useTranslation();
  const { includesResource } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );

  return (
    <>
      <div>
        <div className="flex justify-between ">
          <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
            {t('Question', { ns: 'config_bot' })}
          </p>
          <RiDeleteBinLine size={18} color="#F44336" />
        </div>
        <textarea
          placeholder={`${t('What', { ns: 'config_bot' })}`}
          className="h-[83px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="mt-[20px]">
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          {t('Answer', { ns: 'config_bot' })}
        </p>
        <textarea
          placeholder={`${t('ChatFly', { ns: 'config_bot' })}`}
          className="h-[208px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="bg-[#E7E8F2] h-[1px] w-full my-6"></div>
      <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
        {t('IncludedQ&A', { ns: 'config_bot' })}
        <span className="text-[#A7A7B0] font-thin">
          (0 {t('tokens', { ns: 'config_bot' })})
        </span>
      </p>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {t('IncludedSource', { ns: 'config_bot' })}:
        </p>
        <p className="text-[15px] font-bold">
          {includesResourceData?.resource[1]?.number_of_resources || 0}{' '}
          {(includesResourceData?.resource[1]?.number_of_resources || 0) > 1
            ? `${t('Files', { ns: 'config_bot' })}`
            : `${t('File', { ns: 'config_bot' })}`}
          <span className="text-[#A7A7B0]">
            ({formatNumber(includesResourceData?.resource[1]?.token || 0)}{' '}
            {t('tokens', { ns: 'config_bot' })})
          </span>{' '}
          | {includesResourceData?.resource[0]?.number_of_resources || 0}{' '}
          {(includesResourceData?.resource[0]?.number_of_resources || 0) > 1
            ? `${t('Links', { ns: 'config_bot' })}`
            : `${t('Link', { ns: 'config_bot' })}`}
          <span className="text-[#A7A7B0]">
            ({formatNumber(includesResourceData?.resource[0]?.token || 0)}{' '}
            {t('tokens', { ns: 'config_bot' })})
          </span>{' '}
          | {includesResourceData?.resource[2]?.number_of_resources || 0} Q&A
          <span className="text-[#A7A7B0]">
            ({formatNumber(includesResourceData?.resource[2]?.token || 0)}{' '}
            {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        <p className="text-[15px] font-bold">
          {t('TotalToken', { ns: 'config_bot' })}:{' '}
          {formatNumber(includesResourceData?.total_token || 0)} /10.000.000{' '}
          {t('limit', { ns: 'config_bot' })}
        </p>
      </div>
      <div className="flex justify-end mt-[30px]">
        <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
          {t('Import', { ns: 'config_bot' })}
        </button>
      </div>
    </>
  );
};

export default QuestionAnswer;
