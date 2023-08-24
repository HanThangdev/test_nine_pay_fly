import { RiDeleteBinLine } from 'react-icons/ri';
const QuestionAnswer = () => {
  return (
    <>
      <div>
        <div className="flex justify-between ">
          <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
            Question
          </p>
          <RiDeleteBinLine size={18} color="#F44336" />
        </div>
        <textarea
          placeholder="What's ChatFly ?"
          className="h-[83px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="mt-[20px]">
        <p className="text-[15px] font-bold flex gap-x-[10px] items-center">
          Answer
        </p>
        <textarea
          placeholder="ChatFly is bloh blah"
          className="h-[208px] w-full py-2 rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="bg-[#E7E8F2] h-[1px] w-full my-6"></div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">Included sources:</p>
        <p className="text-[15px]">
          2 Files
          <span className="text-[#A7A7B0]">(40 chars)</span> | 2 Links
          <span className="text-[#A7A7B0]">(4000 chars)</span> | 1 Q&A
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

export default QuestionAnswer;
