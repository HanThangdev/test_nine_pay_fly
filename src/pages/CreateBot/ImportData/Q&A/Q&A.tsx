import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { trimStringValuesInArray } from '@/utils/format';
import { TypeAnimation } from 'react-type-animation';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { API_STATUS } from '@/constants';
import QuestionAndAnswerItem from '@/pages/BuildChatbot/Component/QuestionAndAnswerItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddQuestionAndAnswerItem } from '@/repository/buildChatBot/type';
import { notification } from 'antd';
import { IconDelete, IconImport } from '@/components/IconGroup/IconGroup';

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
    }),
  ),
});

const QuestionAnswer = () => {
  const { t } = useTranslation();
  const { onAddQuestionAndAnswer, botInfos, onGetAllQuestionAndAnswer } =
    useBuildChatbot();
  const { includesResource, loadingQuestionAndAnswer, listIncludesQandA } =
    useSelector((state: RootState) => state.buildChatBot);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'question_answers', // Tên của trường mảng
  });
  const [loadingText, setLoadingText] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );

  const onUpload: SubmitHandler<any> = (values: {
    question_answers: AddQuestionAndAnswerItem[];
  }) => {
    if (loadingQuestionAndAnswer || !botInfos) {
      return;
    }
    try {
      const listQuestionAndAnswer = trimStringValuesInArray(
        values.question_answers,
      );
      const payload = {
        bot_id: botInfos.id,
        user_id: botInfos.user_id,
        question_answers: listQuestionAndAnswer,
      };
      onAddQuestionAndAnswer(payload).then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          onGetAllQuestionAndAnswer({ bot_id: botInfos.id });
          resetForm();
          notification.success({
            message: 'Import Q&A success',
          });
        }
      });
    } catch (error: any) {
      console.log('error', error);
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

  // useEffect(() => {
  //   onGetAllQuestionAndAnswer({ bot_id: data?.id });
  // }, []);

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
      <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
        {t('text', { ns: 'config_bot' })}
      </p>
      <div className="flex justify-between gap-x-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`${t('EnterDescription', { ns: 'config_bot' })}`}
          className="h-[150px] w-full py-2 rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <button className="px-3 flex items-center min-w-[65px] gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer whitespace-nowrap">
          <IconImport />
          {loadingText ? (
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
      <div className="flex justify-between gap-x-3 mt-6 mb-4 items-center">
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
        <span className="font-bold min-w-fit">
          {t('OR', { ns: 'config_bot' })}
        </span>
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
      </div>
      <div className="flex justify-end">
        <button
          className="px-3 flex items-center gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer"
          onClick={addQuestion}
        >
          {t('addmomreQA', { ns: 'config_bot' })}
        </button>
      </div>
      <form onSubmit={handleSubmit(onUpload)}>
        <div className="max-h-[600px] overflow-y-auto">
          {fields.map((field, index) => (
            <div key={index} className="mt-[10px] ">
              <div className="flex justify-between ">
                <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
                  {t('Question', { ns: 'config_bot' })} {index + 1}
                </p>
                {index > 0 && (
                  <div
                    className="cursor-pointer p-1 rounded border-[1px] h-fit border-[#FDA29B] ml-1 bg-[#FFF]"
                    onClick={() => deleteQuestion(index)}
                  >
                    <IconDelete />
                  </div>
                )}
              </div>
              <textarea
                {...register(`question_answers.${index}.question`)}
                // name={`questionAndAnswer[${index}].question`}
                placeholder={`${t('What', { ns: 'config_bot' })}`}
                className="h-[40px] w-full py-2 rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
              />
              <p className="text-[#D96A47]">
                {errors.question_answers?.[index]?.question?.message}
              </p>
              <div className="mt-[20px]">
                <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
                  {t('Answer', { ns: 'config_bot' })} {index + 1}
                </p>
                <textarea
                  {...register(`question_answers.${index}.answer`)}
                  // name={`questionAndAnswer[${index}].answer`}
                  placeholder={`${t('ChatFly', { ns: 'config_bot' })}`}
                  className="h-[150px] w-full py-2 rounded-[8px] border border-[#D0D5DD] bg-[#FFF] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                />
                <p className="text-[#D96A47]">
                  {errors.question_answers?.[index]?.answer?.message}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="px-3 flex items-center gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer"
            type="submit"
            disabled={loadingQuestionAndAnswer}
          >
            <IconImport />
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
      <div className="max-h-[600px] overflow-y-auto">
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
    </>
  );
};

export default QuestionAnswer;
