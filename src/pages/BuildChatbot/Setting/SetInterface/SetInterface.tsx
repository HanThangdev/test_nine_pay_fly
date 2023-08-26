import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import ColorPicker from 'react-pick-color';
const SetInterface = () => {
  const [color, setColor] = useState('#fff');
  const [openColor, setOpencolor] = useState(false);
  return (
    <div className="">
      <div className="text-[15px]">
        <p className="font-bold mb-[8px]">Initial Messages</p>
        <input
          type="text"
          placeholder=""
          className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <p className="mt-[12px] text-[#A7A7B0]">
          Enter each message in a new line
        </p>
      </div>
      <div className="text-[15px]">
        <p className="font-bold mb-[8px]">Suggestted Messages</p>
        <input
          type="text"
          placeholder=""
          className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <p className="mt-[12px] text-[#A7A7B0]">
          Enter each message in a new line
        </p>
      </div>
      <div className="text-[15px]">
        <p className="font-bold mb-[8px]">Theme</p>
        <input
          type="text"
          placeholder=""
          className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="text-[15px] mt-[15px]">
        <p className="font-bold mb-[8px]">Update Chatbot profile picture</p>
        <div className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] items-center justify-center flex">
          <FiUpload size={20} />
        </div>
        <p className="mt-[12px] text-[#A7A7B0]">
          Remove Chatbot profile picture
        </p>
      </div>
      <div className="text-[15px]">
        <p className="font-bold mb-[8px]">Display name</p>
        <input
          type="text"
          placeholder=""
          className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="text-[15px]">
        <p className="font-bold mb-[8px]">User Message Color</p>
        <div className="flex justify-between">
          <div
            onClick={() => setOpencolor(!openColor)}
            className="h-[41px] w-[41px] rounded-[5px] border border-[#DCDEED] cursor-pointer flex items-center justify-center"
          >
            <p className="mb-0 w-[35px] h-[35px] rounded-[5px] bg-primary"></p>
          </div>
          {openColor && (
            <ColorPicker
              color={color}
              onChange={(color) => setColor(color.hex)}
              className="absolute ml-[55px]"
            />
          )}
          <button className="right-[38px] w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
            Reset
          </button>
        </div>
      </div>
      <div className="text-[15px] mt-[15px]">
        <p className="font-bold mb-[8px]">Update Chat icon</p>
        <div className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] items-center justify-center flex">
          <FiUpload size={20} />
        </div>
      </div>
      <div className="text-[15px]">
        <p className="font-bold mb-[8px]">Remove Chat icon</p>
        <p className="h-[41px] w-[41px] rounded-[5px] border border-[#DCDEED]"></p>
      </div>
      <div className="text-[15px]">
        <p className="font-bold mb-[8px]">Align Chat Bubble Button</p>
        <input
          type="text"
          placeholder=""
          className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </div>
  );
};

export default SetInterface;
