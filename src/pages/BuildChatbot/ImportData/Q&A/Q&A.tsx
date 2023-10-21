import { RiDeleteBinLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { formatNumber, trimStringValuesInArray } from '@/utils/format';
import { TypeAnimation } from 'react-type-animation';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { API_STATUS } from '@/constants';
import QuestionAndAnswerItem from '../../Component/QuestionAndAnswerItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddQuestionAndAnswerItem } from '@/repository/buildChatBot/type';
import { notification } from 'antd';

type InputsQuestionAnswer = {
  question: string;
  answer: string;
};

const initialValue = {
  question_answers: [
    {
      question: '',
      answer: '',
    },
  ],
};

const schema = yup.object().shape({
  question_answers: yup.array().of(
    yup.object().shape({
      question: yup.string().required('Question is required'), // Kiểm tra trường "question" không được trống
      answer: yup.string().required('Answer is required'), // Kiểm tra trường "answer" không được trống
    })
  ),
});

const QuestionAnswer = () => {
  const { t } = useTranslation();
  const { onAddQuestionAndAnswer, botInfos, onGetAllQuestionAndAnswer } =
    useBuildChatbot();
  const { includesResource, loadingQuestionAndAnswer, listIncludesQandA } =
    useSelector((state: RootState) => state.buildChatBot);
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'question_answers', // Tên của trường mảng
  });

  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );

  const onUpload: SubmitHandler<any> = (values: {question_answers: AddQuestionAndAnswerItem[];}) => {
    if (loadingQuestionAndAnswer || !botInfos ) {
      return;
    }
    try {
      const listQuestionAndAnswer = trimStringValuesInArray(values.question_answers)
      const payload = {
        bot_id: botInfos.id,
        user_id: botInfos.user_id,
        question_answers: listQuestionAndAnswer,
      };
      onAddQuestionAndAnswer(payload).then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          onGetAllQuestionAndAnswer({ bot_id: botInfos.id });
          resetForm()
          notification.success({
            message: 'Import Q&A success',
          });
        }
      });
    } catch (error: any) {
      console.log('error', error)
    } finally {
    }
  };

  const listQuestionAndAnswer = useMemo(
    () => listIncludesQandA,
    [listIncludesQandA],
  );
  const totalTokens = useMemo(() => {
    let total = 0;
    if (listIncludesQandA && !isEmptyObjectOrArray(listIncludesQandA)) {
      total = listIncludesQandA.reduce(
        (accumulator, item) => accumulator + (item.num_token || 0),
        0,
      );
    }
    return total;
  }, [listIncludesQandA]);

  useEffect(() => {
    onGetAllQuestionAndAnswer({ bot_id: botInfos?.id });
  }, []);

  const addQuestion = () => {
    append({ question: '', answer: '' });
  };

  const deleteQuestion = (index: number) => {
    remove(index);
  };

  const resetForm = () => {
    reset(initialValue); // Đặt lại giá trị của trường mảng
  };
  return (
    <>
      <div className="flex justify-end mt-[30px]">
        <button
          className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center"
          onClick={addQuestion}
        >
          Add more Q&A
        </button>
      </div>
      <form onSubmit={handleSubmit(onUpload)}>
        <div className="max-h-[700px] overflow-y-auto">
          {fields.map((field, index) => (
            <div key={index} className="mt-[10px] ">
              <div className="flex justify-between ">
                <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
                  {t('Question', { ns: 'config_bot' })} {index + 1}
                </p>
                <RiDeleteBinLine
                  size={18}
                  color="#F44336"
                  onClick={() => deleteQuestion(index)}
                  className="cursor-pointer"
                />
              </div>
              <textarea
                {...register(`question_answers.${index}.question`)}
                // name={`questionAndAnswer[${index}].question`}
                placeholder={`${t('What', { ns: 'config_bot' })}`}
                className="h-[40px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
              />
              <p className='text-[#D96A47]'>{errors.question_answers?.[index]?.question?.message}</p>
              <div className="mt-[20px]">
                <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
                  {t('Answer', { ns: 'config_bot' })} {index + 1}
                </p>
                <textarea
                  {...register(`question_answers.${index}.answer`)}
                  // name={`questionAndAnswer[${index}].answer`}
                  placeholder={`${t('ChatFly', { ns: 'config_bot' })}`}
                  className="h-[150px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                />
                <p className='text-[#D96A47]'>{errors.question_answers?.[index]?.answer?.message}</p>
              </div>
            </div>
          ))}
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
                  sequence={['.', 800, '..', 800, '...', 800]}
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
          ({totalTokens} {t('tokens', { ns: 'config_bot' })})
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
