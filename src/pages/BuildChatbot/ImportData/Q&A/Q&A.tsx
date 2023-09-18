import { RiDeleteBinLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
const QuestionAnswer = () => {
  const { t } = useTranslation();
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
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {t('IncludedSource', { ns: 'config_bot' })}:
        </p>
        <p className="text-[15px]">
          2 {t('Files', { ns: 'config_bot' })}
          <span className="text-[#A7A7B0]">
            (40 {t('tokens', { ns: 'config_bot' })})
          </span>{' '}
          | 2 {t('Links', { ns: 'config_bot' })}
          <span className="text-[#A7A7B0]">
            (4000 {t('tokens', { ns: 'config_bot' })})
          </span>{' '}
          | 1 Q&A
          <span className="text-[#A7A7B0]">
            (4000 {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        <p className="text-[15px]">
          {t('TotalTokens', { ns: 'config_bot' })}: 40/10.000.000{' '}
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
