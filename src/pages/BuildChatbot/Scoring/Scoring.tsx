import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { getBotEvaluationStrong } from '@/repository/buildChatBot';
import { useEffect, useState } from 'react';
import { API_STATUS } from '@/constants';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';

const Scoring = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useBuildChatbot();

  const getEvaluationStrong = async () => {
    try {
      const { meta, payload }: any = await dispatch(
        getBotEvaluationStrong({ bot_id: data.id }),
      );
      if (meta.requestStatus == API_STATUS.REJECTED) {
        throw meta;
      }
      console.log('payload', payload);
    } catch (error: any) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getEvaluationStrong();
  });

  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px] flex justify-between',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config text-[15px]',
      )}
    >
      <div>
        <p className="font-bold mb-1">{t('How', { ns: 'scoring' })}</p>
        <p className="text-[#A7A7B0] ">{t('note', { ns: 'scoring' })}</p>
        <p className="font-bold mb-[6px]">{t('Tips', { ns: 'scoring' })}</p>
        <p className="mb-[6px] flex gap-x-3 items-center">
          <span className="flex w-5 h-5 rounded-full bg-[#4a80ff] items-center justify-center">
            <span className="flex w-[13px] h-[13px] rounded-full border-[#f8f8f8] border-[2px] border-dotted"></span>
          </span>
          {t('addUrl', { ns: 'scoring' })}
        </p>
        <p className="mb-[6px] flex gap-x-3 items-center">
          <span className="flex w-5 h-5 rounded-full bg-[#4a80ff] items-center justify-center">
            <span className="flex w-[13px] h-[13px] rounded-full border-[#f8f8f8] border-[2px] border-dotted"></span>
          </span>
          {t('rules', { ns: 'scoring' })}
        </p>
        <p className="mb-[6px] flex gap-x-3 items-center">
          <span className="flex w-5 h-5 rounded-full bg-[#4a80ff] items-center justify-center">
            <span className="flex w-[13px] h-[13px] rounded-full border-[#f8f8f8] border-[2px] border-dotted"></span>
          </span>
          {t('history', { ns: 'scoring' })}
        </p>
      </div>
      <div>
        <div className="chart" data-chart="2">
          <div className="pie-chart pie-chart--donut">
            <span className="pie-chart__value">65%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoring;