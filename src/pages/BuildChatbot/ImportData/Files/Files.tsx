import classNames from 'classnames';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Upload, UploadFile, notification } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { hasDuplicateFiles, isEmptyObjectOrArray } from '@/utils/utils';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { useTranslation } from 'react-i18next';
import FetchFileItem from '../../Component/FetchFileItem';
import { API_STATUS } from '@/constants';
import { TypeAnimation } from 'react-type-animation';
const Files = () => {
  const { t } = useTranslation();
  const [listFileWaitingImport, setListFileWaitingImport] = useState<File[]>(
    [],
  );
  const {
    onUploadFile,
    data,
    listIncludesFile,
    loadingFetchFile,
    onGetAllFile,
  } = useBuildChatbot();
  const UploadToWaitList = useCallback(
    (file: File) => {
      if (hasDuplicateFiles(file, listFileWaitingImport)) {
        notification.error({
          message: 'File is already',
        });
        return;
      }
      setListFileWaitingImport([...listFileWaitingImport, file]);
    },
    [listFileWaitingImport],
  );

  const onUpload = (file: File) => {
    onUploadFile({ file, bot_id: data?.id }).then((response) => {
      if (response.meta.requestStatus === API_STATUS.FULFILLED) {
        const newList = Array.from(listFileWaitingImport).filter((_) => {
          return _.name !== file.name;
        });
        setListFileWaitingImport(newList);
        onGetAllFile({ bot_id: data?.id });
      }
    });
  };

  const totalTokens = useMemo(() => {
    let total = 0;
    if (listIncludesFile && !isEmptyObjectOrArray(listIncludesFile)) {
      total = listIncludesFile.reduce(
        (accumulator, item) => accumulator + (item.num_token || 0),
        0,
      );
    }
    return total;
  }, [listIncludesFile]);

  const listLink = useMemo(() => listIncludesFile, [listIncludesFile]);

  useEffect(() => {
    onGetAllFile({ bot_id: data?.id });
  }, []);

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
      {!isEmptyObjectOrArray(listFileWaitingImport) &&
        listFileWaitingImport.map((item, idx) => {
          return (
            <div className="flex justify-between mt-[27px]" key={idx}>
              <div className="text-[15px] flex justify-between items-center w-full pr-4">
                {item.name || 'File_Name'}
                <div
                  onClick={() => {
                    const newListFile = Array.from(listFileWaitingImport);
                    setListFileWaitingImport(
                      newListFile.filter((it) => it.name !== item.name),
                    );
                  }}
                  className="cursor-pointer"
                >
                  <RiDeleteBinLine size={18} color="#F44336" />
                </div>
              </div>
              <button
                className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center"
                onClick={() => onUpload(item)}
              >
                {loadingFetchFile ? (
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
          );
        })}

      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {' '}
          {t('Attached', { ns: 'config_bot' })} ({totalTokens}{' '}
          {t('chars', { ns: 'config_bot' })})
        </p>
        {listLink && !isEmptyObjectOrArray(listLink) &&
          listLink.map((item, idx) => {
            return <FetchFileItem item={item} key={idx} index={idx} />;
          })}
      </div>
      <div className="mt-[25px]">
        <p className="text-[16px] font-bold">
          {t('IncludedSource', { ns: 'config_bot' })}:
        </p>
        <p className="text-[15px]">
          {listIncludesFile?.length || 0} {t('Files', { ns: 'config_bot' })}
          <span className="text-[#A7A7B0]">
            ({totalTokens} {t('chars', { ns: 'config_bot' })})
          </span>
        </p>
        <p className="text-[15px]">
          {t('TotalChar', { ns: 'config_bot' })}: {totalTokens}/400,000{' '}
          {t('limit', { ns: 'config_bot' })}
        </p>
      </div>
    </>
  );
};

export default Files;
