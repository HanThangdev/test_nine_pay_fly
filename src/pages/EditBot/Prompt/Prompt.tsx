import { Slider, Tooltip, Switch, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import IconTip from '@/components/IconTip/IconTip';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/states/store';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { updateBotTransaction } from '@/repository/buildChatBot';
import { API_STATUS } from '@/constants';
import { IconAdd, IconDelete } from '@/components/IconGroup/IconGroup';

interface Props {
  save: boolean;
  step: string;
  saveSuccess: () => void;
}

const Prompt = ({ save, step, saveSuccess }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const [promptExample, setPromptExample] = useState('');
  const [creativity, setCreativity] = useState(0);
  const [rules, setRules] = useState<Array<string>>(['']);

  const addItem = () => {
    setRules([...rules, '']);
  };
  const removeItem = (index: any) => {
    const rows = [...rules];
    rows.splice(index, 1);
    setRules(rows);
  };

  useEffect(() => {
    if (!isEmptyObjectOrArray(botInfos)) {
      setPromptExample(botInfos.custom_prompt);
      setCreativity(botInfos.temperature);
      setRules(botInfos.rules);
    }
  }, [botInfos]);

  const onSubmit = async () => {
    try {
      const updateBotPayload = {
        bot_name: botInfos.bot_name,
        case_study: botInfos.case_study,
        collect_customer_info: botInfos?.collect_customer_info,
        rules: rules,
        gpt_model_name: botInfos.model,
        temperature: creativity,
        custom_prompt: promptExample,
        user_id: botInfos.user_id,
        id: botInfos.id,
      };
      let response = await dispatch(updateBotTransaction(updateBotPayload));
      const { meta } = response;
      saveSuccess();
      notification.success({
        message: `${t('upadetSuccess', { ns: 'config_bot' })}`,
      });

      if (meta.requestStatus === API_STATUS.REJECTED) {
        return;
      }
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    }
  };

  useEffect(() => {
    if (save && step === 'Prompt') {
      onSubmit();
    }
  }, [save, step]);
  return (
    <div className="prompt-bot">
      <p className="text-[14px] text-[#9CA3AF] font-medium">
        {t('Guiding', { ns: 'config_bot' })}
      </p>
      <div className="flex justify-between">
        <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
          {t('Base', { ns: 'config_bot' })}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={t('tooltipPrompt', { ns: 'config_bot' })}
          >
            <span className="w-3 mt-[1px]">
              <IconTip />
            </span>
          </Tooltip>
        </p>
        <p className="text-[12px] text-[#2D3FE7] font-semibold flex items-center mb-0 gap-x-1 bg-[#F5F5FF] rounded-lg py-1 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M9.16778 9.46365H4.95612"
              stroke="#2D3FE7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16778 7.02155H4.95612"
              stroke="#2D3FE7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.56326 4.58508H4.95618"
              stroke="#2D3FE7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.28003 1.60406C9.28003 1.60406 4.80178 1.6064 4.79478 1.6064C3.18478 1.61631 2.18787 2.67565 2.18787 4.29148V9.65582C2.18787 11.2798 3.19237 12.3432 4.81637 12.3432C4.81637 12.3432 9.29403 12.3415 9.30162 12.3415C10.9116 12.3316 11.9091 11.2716 11.9091 9.65582V4.29148C11.9091 2.66748 10.904 1.60406 9.28003 1.60406Z"
              stroke="#2D3FE7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {t('examplePrompt', { ns: 'config_bot' })}{' '}
        </p>
      </div>
      <textarea
        value={promptExample}
        onChange={(e) => setPromptExample(e.target.value)}
        className="w-full max-h-[200px] min-h-[150px] text-[15px] px-[20px] focus-visible:outline-none focus:border-[#DCDEED] py-[11px] border-[1px] border-[#DCDEED] mt-[11px] rounded-[5px]"
      />
      <p className="w-[240px] mt-[12px] flex gap-x-[10px] font-bold items-center">
        {t('Creativity', { ns: 'config_bot' })}
        <Tooltip
          color="#212121"
          placement="rightTop"
          overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
          title={t('tooltipTem', { ns: 'config_bot' })}
        >
          <span className="w-3 mt-[1px]">
            <IconTip />
          </span>
        </Tooltip>
      </p>
      <Slider
        defaultValue={0}
        max={100}
        value={creativity}
        onChange={(e) => setCreativity(e)}
      />
      <div className="flex justify-between mt-3">
        <p className="text-[14px] text-[#2F80ED]  font-medium flex items-center gap-x-1 bg-[#E9F2FF] rounded-lg py-1 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mt-[2px]"
          >
            <path
              d="M9.8821 14.5084C10.0771 14.4032 10.1987 14.2032 10.1987 13.9856V10.5978H16.8881C17.2259 10.5978 17.5 10.33 17.5 10C17.5 9.6701 17.2259 9.40232 16.8881 9.40232H10.1987V6.01445C10.1987 5.79608 10.0771 5.59605 9.8821 5.49164C9.68711 5.38565 9.44887 5.39282 9.2604 5.50838L2.78556 9.49397C2.6077 9.60395 2.5 9.79443 2.5 10C2.5 10.2057 2.6077 10.3961 2.78556 10.5061L9.2604 14.4917C9.35994 14.5523 9.47335 14.5834 9.58676 14.5834C9.68792 14.5834 9.78991 14.5579 9.8821 14.5084Z"
              fill="#2F80ED"
            />
          </svg>
          {t('MoreFocus', { ns: 'config_bot' })}
        </p>
        <p className="text-[14px] text-[#2F80ED] font-medium flex items-center gap-x-1 bg-[#E9F2FF] rounded-lg py-1 px-2">
          {t('MoreCreate', { ns: 'config_bot' })}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mt-[2px]"
          >
            <path
              d="M10.1179 5.4916C9.9229 5.5968 9.80133 5.79684 9.80133 6.01441V9.40228H3.11191C2.77414 9.40228 2.5 9.67006 2.5 10C2.5 10.3299 2.77414 10.5977 3.11191 10.5977H9.80133V13.9856C9.80133 14.204 9.9229 14.404 10.1179 14.5084C10.3129 14.6144 10.5511 14.6072 10.7396 14.4917L17.2144 10.5061C17.3923 10.3961 17.5 10.2056 17.5 10C17.5 9.79438 17.3923 9.60391 17.2144 9.49393L10.7396 5.50834C10.6401 5.44777 10.5267 5.41669 10.4132 5.41669C10.3121 5.41669 10.2101 5.44219 10.1179 5.4916Z"
              fill="#2F80ED"
            />
          </svg>
        </p>
      </div>
      <p className="flex gap-x-[10px] font-bold items-center">
        <Switch size="small" />
        {t('Enable', { ns: 'config_bot' })}
        <Tooltip
          color="#212121"
          placement="rightTop"
          overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
          title={t('tooltipAI', { ns: 'config_bot' })}
        >
          <span className="w-3 mt-[1px]">
            <IconTip />
          </span>
        </Tooltip>
      </p>
      <div className="flex justify-between mb-3">
        <p className="w-[240px] mb-0 flex gap-x-[10px] font-bold items-center">
          {t('Rules', { ns: 'config_bot' })}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={t('tooltipRule', { ns: 'config_bot' })}
          >
            <span className="w-3 mt-[1px]">
              <IconTip />
            </span>
          </Tooltip>
        </p>
        <button
          onClick={addItem}
          className=" bg-white text-[#344054] flex items-center rounded-[8px] border-[1px] border-[#D0D5DD] py-1 px-2 text-[14px] font-bold"
        >
          <IconAdd />
          {t('addRule', { ns: 'config_bot' })}
        </button>
      </div>

      {rules.map((_item: string, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between gap-x-2 mt-[12px] pr-2 rounded-lg border border-[#DCDEED] bg-[#ffffffeb]"
        >
          <input
            type="text"
            value={_item}
            placeholder={
              index !== 0
                ? `${t('Newrule', { ns: 'config_bot' })}`
                : `${t('notRespond', { ns: 'config_bot' })}`
            }
            onChange={(e) => {
              const newRules = Array.from(rules).map((_, idx) => {
                if (index === idx) {
                  return e.target.value; // Thay đổi giá trị "b" thành "d"
                }
                return _;
              });
              setRules(newRules);
            }}
            className={`${
              index !== 0 || 'mt-[12px'
            } h-[41px] w-full rounded-[8px] px-4 outline-none focus:border-primary focus-visible:shadow-none`}
          />

          <div className="cursor-pointer">
            {index !== 0 && (
              <div
                className="cursor-pointer p-1 rounded border-[1px] h-fit border-[#FDA29B] ml-1 bg-[#FFF]"
                onClick={() => removeItem(index)}
              >
                <IconDelete />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prompt;
