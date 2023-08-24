import classNames from 'classnames';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Upload } from 'antd';

const Files = () => {
  return (
    <>
      <div
        className={classNames(
          'h-[291px] border-[1px] border-[#DCDEED] border-dashed',
          'text-center',
        )}
      >
        <Upload
          accept="image/*"
          maxCount={1}
          showUploadList={false}
          customRequest={() => {
            return false;
          }}
        >
          <div className="flex justify-center mt-[30px]">
            <AiOutlineCloudUpload size={100} color="#E8E9F4" />
          </div>
        </Upload>
        <p className="text-[24px] font-bold">Upload Files</p>
        <p className="text-[#A7A7B0] text-[15px] mb-0">
          Drag & drop files here, or click to select files
        </p>
        <p className="text-[#A7A7B0] text-[15px]">
          Supported File Types: .pdf, .doc, .docx, .txt, .csv, .xlsx
        </p>
      </div>
      <div className="flex justify-between mt-[27px]">
        <p className="text-[15px] flex items-center">
          File_Test_ChatFly_Not_Finished.docx
          <span className="text-[#A7A7B0 mr-[48px]">(20 chars)</span>
          <RiDeleteBinLine size={18} color="#F44336" />
        </p>
        <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
          Import
        </button>
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">Attached Files (40 chars)</p>
        <div className="flex justify-between">
          <p className="text-[15px]">
            File_Test_ChatFly_Not_Finished.docx
            <span className="text-[#A7A7B0]">(20 chars)</span>
          </p>
          <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
            Training
          </button>
        </div>
        <div className="flex justify-between mt-[15px]">
          <p className="text-[15px] flex items-center">
            File_Test_ChatFly_Not_Finished.docx
            <span className="text-[#A7A7B0 mr-[48px]">(20 chars)</span>
            <RiDeleteBinLine size={18} color="#F44336" />
          </p>
          <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
            Done
          </button>
        </div>
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">Included sources:</p>
        <p className="text-[15px]">
          2 Files
          <span className="text-[#A7A7B0]">(40 chars)</span>
        </p>
        <p className="text-[15px]">
          Total detected characters: 40/400,000 limit
        </p>
      </div>
    </>
  );
};

export default Files;
