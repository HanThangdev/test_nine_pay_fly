import { RiDeleteBinLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { formatNumber } from '@/utils/format';
import { TypeAnimation } from 'react-type-animation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { API_STATUS } from '@/constants';
import QuestionAndAnswerItem from '../../Component/QuestionAndAnswerItem';

type InputsQuestionAnswer = {
  question: string;
  answer: string;
};

const QuestionAnswer = () => {
  const { t } = useTranslation();
  const { onAddQuestionAndAnswer, data, onGetAllQuestionAndAnswer } =
    useBuildChatbot();
  const { includesResource, loadingQuestionAndAnswer, listIncludesQandA } =
    useSelector((state: RootState) => state.buildChatBot);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsQuestionAnswer>();
  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );
  const [questionAndAnswerSelected, setQuestionAndAnswerSelected] = useState<
    string[]
  >([]);

  const onUpload: SubmitHandler<InputsQuestionAnswer> = (values) => {
    if (loadingQuestionAndAnswer || !data || isEmptyObjectOrArray(values)) {
      console.log(isEmptyObjectOrArray(values), values);
      return;
    }
    try {
      const payload = {
        bot_id: data.id,
        user_id: data.user_id,
        ...values,
      };
      onAddQuestionAndAnswer(payload).then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          reset({
            answer: "",
            question: "",
          })
          onGetAllQuestionAndAnswer({ bot_id: data.id });
        }
      });
    } catch (error: any) {
    } finally {
    }
    console.log(data);
  };

  const listQuestionAndAnswer = useMemo(
    () => listIncludesQandA,
    [listIncludesQandA],
  );
  // const totalTokens = useMemo(() => {
  //   let total = 0;
  //   if (listIncludesQandA && !isEmptyObjectOrArray(listIncludesQandA)) {
  //     total = listIncludesQandA.reduce(
  //       (accumulator, item) => accumulator + (item.num_token || 0),
  //       0,
  //     );
  //   }
  //   return total;
  // }, [listIncludesQandA]);

  useEffect(() => {
    onGetAllQuestionAndAnswer({ bot_id: data?.id });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onUpload)}>
        <div>
          <div className="flex justify-between ">
            <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
              {t('Question', { ns: 'config_bot' })}
            </p>
            <RiDeleteBinLine size={18} color="#F44336" />
          </div>
          <textarea
            {...register('question')}
            placeholder={`${t('What', { ns: 'config_bot' })}`}
            className="h-[83px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
        <div className="mt-[20px]">
          <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
            {t('Answer', { ns: 'config_bot' })}
          </p>
          <textarea
            {...register('answer')}
            placeholder={`${t('ChatFly', { ns: 'config_bot' })}`}
            className="h-[208px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
        <div className="flex justify-end mt-[30px]">
          <button
            className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center"
            type="submit"
            disabled={loadingQuestionAndAnswer}
          >
            {loadingQuestionAndAnswer ? (
              <div>
                <TypeAnimation
                  sequence={['.', 100, '..', 100, '...', 100]}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
            ) : (
              `${t('Import', { ns: 'config_bot' })}`
            )}
          </button>
        </div>
      </form>
      <div className="bg-[#E7E8F2] h-[1px] w-full my-6"></div>
      <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
        {t('IncludedQ&A', { ns: 'config_bot' })}
        <div className="text-[#A7A7B0] font-thin ">
          ({includesResourceData?.resource[2]?.token}{' '}
          {t('tokens', { ns: 'config_bot' })})
        </div>
      </p>
      <div className="max-h-[500px] overflow-y-auto">
        {!isEmptyObjectOrArray(listQuestionAndAnswer) &&
          listQuestionAndAnswer.map((item, idx) => (
            <QuestionAndAnswerItem
              item={item}
              key={idx}
              index={idx}
              // setUrlSelected={setQuestionAndAnswerSelected}
              // urlSelected={questionAndAnswerSelected}
            />
          ))}
      </div>
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
    </>
  );
};

export default QuestionAnswer;
