import classNames from 'classnames';
import IconPrompt from '@/components/IconPrompt/IconPrompt';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Slider, Switch, Tooltip } from 'antd';
import React from 'react';
import { AiOutlineCaretRight, AiOutlineCaretDown } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

interface PromptProps {
  creativity: number;
  setCreativity: (newValue: number) => void;

  dropdownOpen: boolean;
  setDropdownOpen: (newValue: boolean) => void;

  rules: any;
  setRules: (newValue: any) => void;

  value: string;
  setValue: (newValue: string) => void;
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
}) => {
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
        Prompt
        <span className="mt-[2px]">
          {dropdownOpen ? (
            <AiOutlineCaretDown size={18} color="black" />
          ) : (
            <AiOutlineCaretRight size={18} color="black" />
          )}
        </span>
      </h2>
      {dropdownOpen && (
        <>
          <div className="flex items-center justify-between">
            <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
              Guiding instructions for AI's intelligent responses
            </p>
            <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[14px] font-bold justify-cente">
              Prompt examples
            </button>
          </div>
          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
              Base Prompt{' '}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={
                  'The prompt helps the AI understand what you want and how to respond. It guides the conversation and ensures relevant and coherent answers.'
                }
              >
                <AiOutlineQuestionCircle size={18} color="#E77964" />
              </Tooltip>
            </p>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-[120px] !h-min-[150px] text-[15px] px-[20px] focus-visible:outline-none focus:border-[#DCDEED] py-[11px] border-[1px] border-[#DCDEED] mt-[11px] rounded-[5px]"
            />
          </div>

          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
              Creativity{' '}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={
                  'A higher temperature value and nearly to More Creative, allows for more randomness and creativity in the responses. This can lead to more diverse and unexpected answers. On the other hand, a lower temperature value, nearly to More Focused, produces deterministic responses, making them more conservative and predictable.'
                }
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
              <p>More Focused</p>
              <p>{creativity}</p>
              <p>More Creative</p>
            </div>
          </div>
          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
              Enable In-text Citations{' '}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={
                  'Our AI bot credits sources and includes links to specific information it used from your trained data, promoting a reliable and informed conversation.'
                }
              >
                <AiOutlineQuestionCircle size={18} color="#E77964" />
              </Tooltip>
            </p>
            <Switch size="small" className="mt-[9px]" />
          </div>
          <div className="text-[15px] mt-[16px]">
            <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
              Rules{' '}
              <Tooltip
                color="#212121"
                placement="rightTop"
                overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
                title={
                  'The rules help the AI understand an accepted principle or instruction that tells Chatbot what It is allowed or is not allowed to respon.'
                }
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
                      ? 'New rule you can set'
                      : 'Do not respond to content outside the documents provided'
                  }
                  onChange={(e) => {
                    const newRules = Array.from(rules).map((_, idx) => {
                      if (index === idx) {
                        return e.target.value; // Thay đổi giá trị "b" thành "d"
                      }
                      return _;
                    });
                    setRules(newRules)
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
              Add
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Prompt;
