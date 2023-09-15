import classNames from 'classnames';
import IconPrompt from '@/components/IconPrompt/IconPrompt';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Radio, Slider, Switch, Tooltip } from 'antd';
import React from 'react';
import { AiOutlineCaretRight, AiOutlineCaretDown } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { PROMPT_EXAM } from '@/constants';

const optionsModal = [
  { label: 'GPT - 3.5', value: 'GPT - 3.5' },
  { label: 'GPT - 3.5 - 16k', value: 'GPT - 3.5 - 16k' },
  { label: 'GPT - 4.0', value: 'GPT - 4.0', disabled: true },
];

interface PromptProps {
  creativity: number;
  setCreativity: (newValue: number) => void;

  dropdownOpen: boolean;
  setDropdownOpen: (newValue: boolean) => void;

  rules: any;
  setRules: (newValue: any) => void;

  value: string;
  setValue: (newValue: string) => void;

  model: string;
  setModel: (value: string) => void;
}

const Prompt: React.FC<PromptProps> = ({
  creativity,
  setCreativity,
  dropdownOpen,
  setDropdownOpen,
  rules,
  setRules,
  value,
  setValue,
  model,
  setModel,
}) => {
  const { t } = useTranslation();
  const addItem = () => {
    setRules([...rules, '']);
  };
  const removeItem = (index: any) => {
    const rows = [...rules];
    rows.splice(index, 1);
    setRules(rows);
  };
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[21px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Prompt mt-[27px]',
      )}
    >
      <h2
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-[20px] text-[#01058A] font-black flex items-center gap-x-3"
      >
        <IconPrompt />
        {t('Prompt', { ns: 'config_bot' })}
        <span className="mt-[2px]">
          <AiOutlineCaretRight
            size={18}
            color="black"
            className={`${dropdownOpen && 'rotate-90'} transition-all`}
          />
        </span>
      </h2>
      {dropdownOpen && (
        <>
          <div className="text-[15px] mt-[16px]">
            <p className="flex gap-x-[10px] font-bold items-center">
              {t('Model', { ns: 'config_bot' })}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={t('tooltipModel', { ns: 'config_bot' })}
              >
                <AiOutlineQuestionCircle size={18} color="#E77964" />
              </Tooltip>
            </p>
            <div className="mt-[13px]">
              <Radio.Group
                options={optionsModal}
                onChange={(e) => setModel(e.target.value)}
                value={model}
                optionType="button"
                buttonStyle="solid"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
              {t('Guiding', { ns: 'config_bot' })}
            </p>
            <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[14px] font-bold justify-cente">
              {t('PromptEx', { ns: 'config_bot' })}
            </button>
          </div>

          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
              {t('Base', { ns: 'config_bot' })}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={t('tooltipPrompt', { ns: 'config_bot' })}
              >
                <AiOutlineQuestionCircle size={18} color="#E77964" />
              </Tooltip>
            </p>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-[300px] !h-min-[150px] text-[15px] px-[20px] focus-visible:outline-none focus:border-[#DCDEED] py-[11px] border-[1px] border-[#DCDEED] mt-[11px] rounded-[5px]"
            />
          </div>

          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
              {t('Creativity', { ns: 'config_bot' })}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={t('tooltipTem', { ns: 'config_bot' })}
              >
                <AiOutlineQuestionCircle size={18} color="#E77964" />
              </Tooltip>
            </p>
            <Slider
              defaultValue={0}
              max={100}
              value={creativity}
              onChange={(e) => setCreativity(e)}
              tooltip={{ formatter: null }}
            />
            <div className="flex justify-between text-[#323232] font-bold">
              <p>{t('MoreFocus', { ns: 'config_bot' })}</p>
              <p>{creativity}</p>
              <p>{t('MoreCreate', { ns: 'config_bot' })}</p>
            </div>
          </div>
          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
              {t('Enable', { ns: 'config_bot' })}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={t('tooltipAI', { ns: 'config_bot' })}
              >
                <AiOutlineQuestionCircle size={18} color="#E77964" />
              </Tooltip>
            </p>
            <Switch size="small" className="mt-[9px]" />
          </div>
          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
              {t('Rules', { ns: 'config_bot' })}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={t('tooltipRule', { ns: 'config_bot' })}
              >
                <AiOutlineQuestionCircle size={18} color="#E77964" />
              </Tooltip>
            </p>
            {rules.map((_item: string, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between gap-x-4 mt-[12px]"
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
                  } h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none`}
                />

                <div className="w-[30px]">
                  {index !== 0 && (
                    <RiDeleteBinLine
                      size={18}
                      color="#F44336"
                      onClick={() => removeItem(index)}
                    />
                  )}
                </div>
              </div>
            ))}
            <button
              onClick={addItem}
              className="w-[150px] mt-[20px] h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[13px] font-bold justify-cente"
            >
              {t('Add', { ns: 'config_bot' })}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Prompt;
