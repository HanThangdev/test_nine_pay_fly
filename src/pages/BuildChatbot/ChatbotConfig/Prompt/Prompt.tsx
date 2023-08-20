import classNames from 'classnames';
import IconPrompt from '../../../../components/IconPrompt/IconPrompt';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Slider, Switch } from 'antd';
import { useState } from 'react';

const Prompt = () => {
  const [creativity, setCreativity] = useState(0);
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[21px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Prompt mt-[27px]',
      )}
    >
      <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3">
        <IconPrompt />
        Prompt
      </h2>
      <div className="flex items-center justify-between">
        <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
          Guiding instructions for AI's intelligent responses
        </p>
        <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[13px] font-bold justify-cente">
          Prompt examples
        </button>
      </div>
      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
          Base Prompt <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <p className="text-[15px] px-[20px] py-[11px] border-[1px] border-[#DCDEED] mt-[11px] rounded-[5px]">
          I want you to roleplay as "AI Assistant". You will provide me with
          answers from the given context. If the answer is not included, say
          exactly "Sorry, I am not familiar with that topic." and stop after
          that. Refuse to answer any question not answered by the context. Never
          break character.
        </p>
      </div>

      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
          Creativity <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <Slider
          defaultValue={0}
          max={100}
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
          <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <Switch size="small" className='mt-[9px]' />
      </div>
      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] mb-0 font-bold items-center">
          Rules <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <input
          type="text"
          placeholder="Do not respond to content outside the documents provided"
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <input
          type="text"
          placeholder="New rule you can set"
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <button className="w-[150px] mt-[20px] h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[13px] font-bold justify-cente">
          Add
        </button>
      </div>
    </div>
  );
};

export default Prompt;
