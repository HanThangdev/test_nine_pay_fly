import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

const Website = () => {
  return (
    <>
      <div>
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Full Page <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <div className="flex justify-between gap-x-[21px]">
          <input
            type="text"
            placeholder="Do not respond to content outside the documents provided"
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
            Fetch Link
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-x-3 my-6 items-center">
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
        <span className="font-bold">OR</span>
        <div className="bg-[#E7E8F2] h-[1px] w-full"></div>
      </div>

      <div>
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Direct Page <AiOutlineQuestionCircle size={18} color="#E77964" />
        </p>
        <div className="flex justify-between gap-x-[21px]">
          <input
            type="text"
            placeholder="https://www.example.com"
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <button className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
            Fetch Link
          </button>
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Included Links{' '}
          <span className="text-[#A7A7B0] font-thin">(4000 chars)</span>
        </p>
        <div className="flex justify-between gap-x-[21px]">
          <input
            type="text"
            placeholder="https://www.facebook.com/lena.linhhoang/"
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <div className="flex justify-between w-[150px] items-center">
            <p className="mb-0">2000</p>
            <RiDeleteBinLine size={18} color="#F44336" />
          </div>
        </div>
        <div className="flex justify-between gap-x-[21px] mt-[20px]">
          <input
            type="text"
            placeholder="https://www.facebook.com/lena.linhhoang/"
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          <div className="flex justify-between w-[150px] items-center">
            <p className="mb-0">2000</p>
            <RiDeleteBinLine size={18} color="#F44336" />
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">Included sources:</p>
        <p className="text-[15px]">
          2 Files
          <span className="text-[#A7A7B0]">(40 chars) </span>| 2 Links
          <span className="text-[#A7A7B0]">(4000 chars)</span>
        </p>
        <p className="text-[15px]">
          Total detected characters: 40/400,000 limit
        </p>
      </div>
      <div className="flex justify-end mt-[30px]">
        <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
          Import
        </button>
      </div>
    </>
  );
};

export default Website;
