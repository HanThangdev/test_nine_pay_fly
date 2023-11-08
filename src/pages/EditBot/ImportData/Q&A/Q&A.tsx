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
import QuestionAndAnswerItem from '@/pages/BuildChatbot/Component/QuestionAndAnswerItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddQuestionAndAnswerItem } from '@/repository/buildChatBot/type';
import { notification } from 'antd';
import { IconDelete, IconImport } from '@/components/IconGroup/IconGroup';
import ModalComponent from '@/components/Modal';

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
      question: yup.string().required('Question is required'),
      answer: yup.string().required('Answer is required'),
    }),
  ),
});

const QuestionAnswer = () => {
  const { t } = useTranslation();
  const {
    onAddQuestionAndAnswer,
    botInfos,
    onGetAllQuestionAndAnswer,
    onDeleteQuestionAndAnswer,
  } = useBuildChatbot();
  const { loadingQuestionAndAnswer, listIncludesQandA } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
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
  const [visibleModalDeleteAll, setVisibleModalDeleteAll] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'question_answers',
  });
  const [loadingText, setLoadingText] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

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
    reset(initialValue);
  };

  const onDeleteAllQA = () => {
    if (!botInfos) {
      return;
    }
    try {
      const { id } = botInfos;
      const listAllQAPayload = listIncludesQandA.map((it) => it.id);
      onDeleteQuestionAndAnswer({
        question_answer_id: listAllQAPayload,
        bot_id: id,
      }).then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          notification.success({
            message: 'Delete All Q&A success',
          });
          onGetAllQuestionAndAnswer({ bot_id: id });
        }
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally {
      setVisibleModalDeleteAll(false);
    }
  };
  return (
    <div>
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

      <form onSubmit={handleSubmit(onUpload)}>
        <div className="max-h-[700px] overflow-y-auto">
          {fields?.map((field, index) => (
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
              <div>{`${t('Import', { ns: 'config_bot' })}`}</div>
            )}
          </button>
        </div>
      </form>
      <div className="flex">
        <button
          className="px-3 flex items-center gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer"
          onClick={addQuestion}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.436 0C19.063 0 21.5 2.546 21.5 6.335V15.165C21.5 18.954 19.063 21.5 15.436 21.5H6.064C2.437 21.5 0 18.954 0 15.165V6.335C0 2.546 2.437 0 6.064 0H15.436ZM15.436 1.5H6.064C3.292 1.5 1.5 3.397 1.5 6.335V15.165C1.5 18.103 3.292 20 6.064 20H15.436C18.209 20 20 18.103 20 15.165V6.335C20 3.397 18.209 1.5 15.436 1.5ZM10.75 6.3273C11.164 6.3273 11.5 6.6633 11.5 7.0773V9.99L14.4165 9.9902C14.8305 9.9902 15.1665 10.3262 15.1665 10.7402C15.1665 11.1542 14.8305 11.4902 14.4165 11.4902L11.5 11.49V14.4043C11.5 14.8183 11.164 15.1543 10.75 15.1543C10.336 15.1543 10 14.8183 10 14.4043V11.49L7.0835 11.4902C6.6685 11.4902 6.3335 11.1542 6.3335 10.7402C6.3335 10.3262 6.6685 9.9902 7.0835 9.9902L10 9.99V7.0773C10 6.6633 10.336 6.3273 10.75 6.3273Z"
              fill="black"
            />
          </svg>
          {t('addmomreQA', { ns: 'config_bot' })}
        </button>
      </div>
      <div className="bg-[#E7E8F2] h-[1px] w-full my-6"></div>
      <div className="flex justify-between pb-3">
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          {t('IncludedQ&A', { ns: 'config_bot' })}
          <div className="text-[#A7A7B0] font-thin ">
            ({totalTokens} {t('tokens', { ns: 'config_bot' })})
          </div>
        </p>
        <div>
          {!!(
            listQuestionAndAnswer.length && listQuestionAndAnswer.length > 1
          ) && (
            <div
              className="p-1 font-bold rounded border-[1px] border-[#FDA29B] ml-1 bg-[#FFF] flex cursor-pointer text-[#B42318]"
              onClick={() => {
                setVisibleModalDeleteAll(true);
              }}
            >
              <IconDelete /> <span>Delete all Q&A</span>
            </div>
          )}
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        {!isEmptyObjectOrArray(listQuestionAndAnswer) &&
          listQuestionAndAnswer.map((item, idx) => (
            <QuestionAndAnswerItem item={item} key={idx} index={idx} />
          ))}
      </div>
      <ModalComponent
        title={<div>Delete all Q&A</div>}
        onCancel={() => {
          setVisibleModalDeleteAll(false);
        }}
        open={visibleModalDeleteAll}
        centered={true}
        footer={
          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => setVisibleModalDeleteAll(false)}
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-[#ef7772] py-2 px-6 font-medium text-white hover:shadow-1"
              onClick={onDeleteAllQA}
            >
              Delete
            </button>
          </div>
        }
      >
        <div>
          Are you sure you want to delete all Q&A? This action cannot be undone.
        </div>
      </ModalComponent>
    </div>
  );
};

export default QuestionAnswer;
