import classNames from 'classnames';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Upload, notification } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { hasDuplicateFiles, isEmptyObjectOrArray } from '@/utils/utils';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { useTranslation } from 'react-i18next';
import FileItem from '@/pages/BuildChatbot/Component/FileItem';
import { API_STATUS } from '@/constants';
import { TypeAnimation } from 'react-type-animation';
import { MAX_SIZE_FILE } from '@/constants/configs_bot';
import { formatNumber } from '@/utils/format';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { IconUpload } from '@/components/IconGroup/IconGroup';
const Files = () => {
  const { t } = useTranslation();
  const [listFileWaitingImport, setListFileWaitingImport] = useState<File[]>(
    [],
  );
  const { includesResource } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const {
    onUploadFile,
    botInfos,
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
    if (file.size >= MAX_SIZE_FILE) {
      notification.warning({
        message: t('file_large_msg', { ns: 'config_bot' }),
      });
      return;
    }
    onUploadFile({ file, bot_id: botInfos?.id })
      .then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          const newList = Array.from(listFileWaitingImport).filter((_) => {
            return _.name !== file.name;
          });
          setListFileWaitingImport(newList);
          onGetAllFile({ bot_id: botInfos?.id });
        }
      })
      .catch((e) => {
        notification.warning({
          message: e?.message || '',
        });
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
  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );

  // useEffect(() => {
  //   onGetAllFile({ bot_id: data?.id });
  // }, []);

  return (
    <>
      <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
        Import data from files
      </p>
      <div className={classNames('py-4', 'text-center')}>
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
          className="bg[#F9FAFB]"
        >
          <div className="flex justify-center border-[1px] border-[#F3F4F6] w-fit m-auto shadow-sm py-1 px-2 rounded-lg bg-[#FCFCFC]">
            <IconUpload />
          </div>
          <p className="text-[20px] text-[#2D3FE7] font-medium mb-0">
            Click to upload{' '}
            <span className="text-[#4B5563]">or drag and drop</span>
          </p>
          <p className="text-[#4B5563] text-[15px] mb-0">
            {t('Drag', { ns: 'config_bot' })}
          </p>
        </Upload.Dragger>
      </div>
      {!isEmptyObjectOrArray(listFileWaitingImport) &&
        listFileWaitingImport.map((item, idx) => {
          return (
            <div className="flex justify-between mt-[27px]" key={idx}>
              <div className="text-[15px] flex justify-between items-center w-full pr-4 font-bold">
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
                disabled={loadingFetchFile}
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
      <div>
        <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
          {t('Attached', { ns: 'config_bot' })}
          <span className="text-[#A7A7B0] font-thin">
            ({formatNumber(totalTokens)} {t('tokens', { ns: 'config_bot' })})
          </span>
        </p>
        {listLink &&
          !isEmptyObjectOrArray(listLink) &&
          listLink.map((item, idx) => {
            return <FileItem item={item} key={idx} index={idx} />;
          })}
      </div>
    </>
  );
};

export default Files;
