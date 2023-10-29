import classNames from 'classnames';
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
import {
  IconDelete,
  IconImport,
  IconUpload,
} from '@/components/IconGroup/IconGroup';
import ModalComponent from '@/components/Modal';
const Files = () => {
  const { t } = useTranslation();
  const [listFileWaitingImport, setListFileWaitingImport] = useState<File[]>(
    [],
  );
  const [ visibleModalDeleteAll, setVisibleModalDeleteAll ] = useState(false);
  const { includesResource } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const {
    onUploadFile,
    botInfos,
    listIncludesFile,
    loadingFetchFile,
    onGetAllFile,
    onDeleteFileImported,
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

  const listFile = useMemo(() => listIncludesFile, [listIncludesFile]);

  const onDeleteAllFile = () => {
    if (!botInfos) {
      return;
    }
    try {
      const { id } = botInfos;
      const listAllFilePayload = listFile.map(it => it.knowledge_base_id)
      onDeleteFileImported({
        knowledge_base_id: listAllFilePayload,
        bot_id: id,
      }).then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          notification.success({
            message: 'Delete All File success',
          });
          onGetAllFile({ bot_id: id });
        }
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data.errors ?? error?.message,
      });
    } finally{
      setVisibleModalDeleteAll(false)
    }
  }

  useEffect(() => {
    onGetAllFile({ bot_id: botInfos?.id });
  }, []);

  return (
    <>
      <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
        {t('importData', { ns: 'config_bot' })}
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
            {t('click', { ns: 'config_bot' })}{' '}
            <span className="text-[#4B5563]">
              {t('drop', { ns: 'config_bot' })}
            </span>
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
                  className="cursor-pointer p-1 rounded border-[1px] border-[#FDA29B] ml-1 bg-[#FFF]"
                >
                  <IconDelete />
                </div>
              </div>
              <button
                className="px-3 flex items-center min-w-[65px] gap-x-1 h-[41px] bg-[#FFF] text-[#374151] rounded-[8px] border-[1px] border-[#D0D5DD] text-[15px] font-medium justify-center cursor-pointer whitespace-nowrap"
                onClick={() => onUpload(item)}
                disabled={loadingFetchFile}
              >
                <IconImport />
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
        <div className="flex justify-between pb-3">
          <p className="text-[15px] text-[#344054] mb-2 font-medium flex gap-x-[10px] items-center">
            {t('Attached', { ns: 'config_bot' })}
            <span className="text-[#A7A7B0] font-thin">
              ({formatNumber(totalTokens)} {t('tokens', { ns: 'config_bot' })})
            </span>
          </p>
          <div>
            {!!(listFile.length && listFile.length > 1) && (
              <div
                className="p-1 font-bold rounded border-[1px] border-[#FDA29B] ml-1 bg-[#FFF] flex cursor-pointer text-[#B42318]"
                onClick={() => {
                  setVisibleModalDeleteAll(true);
                }}
              >
                <IconDelete /> <span>Delete all File</span>
              </div>
            )}
          </div>
        </div>
        {listFile &&
          !isEmptyObjectOrArray(listFile) &&
          listFile.map((item, idx) => {
            return <FileItem item={item} key={idx} index={idx} />;
          })}
      </div>
      <ModalComponent
        title={<div>Delete all Q&A</div>}
        onCancel={() => {
          setVisibleModalDeleteAll(false);
        }}
        open={visibleModalDeleteAll}
        centered={true}
        footer={
          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              onClick={() => setVisibleModalDeleteAll(false)}
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-[#ef7772] py-2 px-6 font-medium text-white hover:shadow-1"
              onClick={onDeleteAllFile}
            >
              Delete
            </button>
          </div>
        }
      >
        <div>
          Are you sure you want to delete all Q&A? This action cannot be undone.
        </div>
      </ModalComponent>
    </>
  );
};

export default Files;
