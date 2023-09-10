import classNames from 'classnames';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Upload, UploadFile, notification } from 'antd';
import { useCallback, useState } from 'react';
import { hasDuplicateFiles, isEmptyObjectOrArray } from '@/utils/utils';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { useTranslation } from 'react-i18next';
const Files = () => {
  const { t } = useTranslation();
  const [listFile, setListFile] = useState<File[]>([]);
  const { onUploadFile, data } = useBuildChatbot();
  const UploadToWaitList = useCallback(
    (file: File) => {
      if (hasDuplicateFiles(file, listFile)) {
        notification.error({
          message: 'File is already',
        });
        return;
      }
      setListFile([...listFile, file]);
    },
    [listFile],
  );

  const onUpload = (file: File) => {
    onUploadFile({ file, bot_id: data?.id });
  };

  return (
    <>
      <div
        className={classNames(
          'h-[291px] border-[1px] border-[#DCDEED] border-dashed',
          'text-center',
        )}
      >
        <Upload.Dragger
          name="file"
          multiple={true}
          onDrop={(e) => {
            return UploadToWaitList(e.dataTransfer.files[0]);
          }}
          accept=".doc,.docx,.csv,.xlsx,.pdf,.txt"
          maxCount={1}
          showUploadList={false}
          onChange={(e) => {
            const convertedFile = e.file.originFileObj as File;
            return UploadToWaitList(convertedFile);
          }}
          customRequest={() => {
            return false;
          }}
        >
          <div className="flex justify-center mt-[30px]">
            <AiOutlineCloudUpload size={100} color="#E8E9F4" />
          </div>
          <p className="text-[24px] font-bold">
            {t('Upload', { ns: 'config_bot' })}
          </p>
          <p className="text-[#A7A7B0] text-[15px] mb-0">
            {t('Drag', { ns: 'config_bot' })}
          </p>
          <p className="text-[#A7A7B0] text-[15px]">
            {t('support', { ns: 'config_bot' })}
          </p>
        </Upload.Dragger>
      </div>
      {!isEmptyObjectOrArray(listFile) &&
        listFile.map((item, idx) => {
          return (
            <div className="flex justify-between mt-[27px]" key={idx}>
              <div className="text-[15px] flex justify-between items-center w-full pr-4">
                {item.name || 'File_Name'}
                <div
                  onClick={() => {
                    const newListFile = Array.from(listFile);
                    setListFile(
                      newListFile.filter((it) => it.name !== item.name),
                    );
                  }}
                >
                  <RiDeleteBinLine size={18} color="#F44336" />
                </div>
              </div>
              <button
                className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center"
                onClick={() => onUpload(item)}
              >
                {t('Import', { ns: 'config_bot' })}
              </button>
            </div>
          );
        })}

      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {' '}
          {t('Attached', { ns: 'config_bot' })} (40{' '}
          {t('chars', { ns: 'config_bot' })})
        </p>
        <div className="flex justify-between">
          <p className="text-[15px]">
            File_Test_ChatFly_Not_Finished.docx
            <span className="text-[#A7A7B0]">
              (20 {t('chars', { ns: 'config_bot' })})
            </span>
          </p>
          {/* <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
            Training
          </button> */}
        </div>
        <div className="flex justify-between mt-[15px]">
          <p className="text-[15px] flex items-center">
            File_Test_ChatFly_Not_Finished.docx
            <span className="text-[#A7A7B0 mr-[48px]">
              (20 {t('chars', { ns: 'config_bot' })})
            </span>
            <RiDeleteBinLine size={18} color="#F44336" />
          </p>
          {/* <button className="w-[150px] h-[43px] bg-[#4AC1FF;] text-white rounded-[10px] text-[15px] font-bold justify-cente">
            Done
          </button> */}
        </div>
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {t('IncludedSource', { ns: 'config_bot' })}:
        </p>
        <p className="text-[15px]">
          2 {t('Files', { ns: 'config_bot' })}
          <span className="text-[#A7A7B0]">
            (40 {t('chars', { ns: 'config_bot' })})
          </span>
        </p>
        <p className="text-[15px]">
          {t('TotalChar', { ns: 'config_bot' })}: 40/400,000{' '}
          {t('limit', { ns: 'config_bot' })}
        </p>
      </div>
    </>
  );
};

export default Files;
