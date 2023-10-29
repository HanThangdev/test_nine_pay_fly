import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import {
  IconLink,
  IconFiles,
  IconQA,
  IconWeb,
  IconFile,
  IconMess,
  IconImportData,
} from '@/components/IconGroup/IconGroup';
import WebsiteClient from './Website';
import FilesClient from './Files';
import QuestionAnswerClient from './Q&A';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { formatNumber } from '@/utils/format';

const ImportData = () => {
  const { t } = useTranslation();
  const [importBy, setImportBy] = useState('website');
  const { includesResource } = useSelector(
    (state: RootState) => state.buildChatBot,
  );
  const includesResourceData = useMemo(
    () => includesResource,
    [includesResource],
  );

  const urlParams = new URLSearchParams(window.location.search);
  const getLanguageFromURL = urlParams.get('language');
  const lang = getLanguageFromURL || localStorage.getItem('LANGUAGE') || 'en';

  return (
    <div className="import-data ">
      <p className="flex text-[20px] items-center text-black">
        <IconImportData />
        {t('import')}
      </p>
      <div
        className={classNames(
          'border-b-[1px] border-[#E5E7EB] pb-[12px] px-3 flex justify-between ',
        )}
      >
        <div className="flex gap-x-4">
          <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
            <IconLink />
            {includesResourceData?.resource[0]?.number_of_resources || 0}{' '}
            {(includesResourceData?.resource[0]?.number_of_resources || 0) > 1
              ? `${t('Links', { ns: 'config_bot' })}`
              : `${t('Link', { ns: 'config_bot' })}`}
            <span className="text-[#A7A7B0]">
              ({formatNumber(includesResourceData?.resource[0]?.token || 0)}{' '}
              {t('tokens', { ns: 'config_bot' })})
            </span>
          </div>
          <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
            <IconFiles />
            {includesResourceData?.resource[1]?.number_of_resources || 0}{' '}
            {(includesResourceData?.resource[1]?.number_of_resources || 0) > 1
              ? `${t('Files', { ns: 'config_bot' })}`
              : `${t('File', { ns: 'config_bot' })}`}
            <span className="text-[#A7A7B0]">
              ({formatNumber(includesResourceData?.resource[1]?.token || 0)}{' '}
              {t('tokens', { ns: 'config_bot' })})
            </span>
          </div>
          <div className="bg-[#F3F4F6] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium">
            <IconQA />
            {includesResourceData?.resource[2]?.number_of_resources || 0} Q&A
            <span className="text-[#A7A7B0]">
              ({formatNumber(includesResourceData?.resource[2]?.token || 0)}{' '}
              {t('tokens', { ns: 'config_bot' })})
            </span>
          </div>
        </div>
        <div className="text-[#4B5563] font-medium flex items-center">
          {t('TotalToken', { ns: 'config_bot' })}:{' '}
          {formatNumber(includesResourceData?.total_token || 0)} /10.000.000{' '}
          {t('limit', { ns: 'config_bot' })}
        </div>
      </div>
      <div className="flex gap-x-4 mt-5">
        <div className="w-[224px] bg-[#F3F4F6] p-2 rounded-l-[12px] min-h-[calc(100vh-300px)]">
          <div
            className={classNames('rounded-lg p-3 cursor-pointer mb-3', {
              'bg-[#FCFCFC]': importBy === 'website',
            })}
            onClick={() => setImportBy('website')}
          >
            <p className="text-[#111827] font-medium mb-2 flex gap-x-2 items-center">
              <IconWeb />
              {t('Website', { ns: 'config_bot' })}
            </p>
            <div
              className={classNames(
                'bg-[#F3F4F6] text-[12px] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium',
                {
                  'text-[11px]': lang === 'jp',
                },
              )}
            >
              <IconLink />
              {includesResourceData?.resource[0]?.number_of_resources || 0}{' '}
              {(includesResourceData?.resource[0]?.number_of_resources || 0) > 1
                ? `${t('Links', { ns: 'config_bot' })}`
                : `${t('Link', { ns: 'config_bot' })}`}
              <span className="text-[#A7A7B0]">
                ({formatNumber(includesResourceData?.resource[0]?.token || 0)}{' '}
                {t('tokens', { ns: 'config_bot' })})
              </span>
            </div>
          </div>
          <div
            className={classNames('rounded-lg p-3 cursor-pointer mb-3', {
              'bg-[#FCFCFC]': importBy === 'files',
            })}
            onClick={() => setImportBy('files')}
          >
            <p className="text-[#111827] font-medium mb-2 flex gap-x-2 items-center">
              <IconFile />
              {t('Files', { ns: 'config_bot' })}
            </p>
            <div
              className={classNames(
                'bg-[#F3F4F6] text-[12px] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium',
                {
                  'text-[11px]': lang === 'jp',
                },
              )}
            >
              <IconFiles />
              {includesResourceData?.resource[1]?.number_of_resources || 0}{' '}
              {(includesResourceData?.resource[1]?.number_of_resources || 0) > 1
                ? `${t('Files', { ns: 'config_bot' })}`
                : `${t('File', { ns: 'config_bot' })}`}
              <span className="text-[#A7A7B0]">
                ({formatNumber(includesResourceData?.resource[1]?.token || 0)}{' '}
                <span>{t('tokens', { ns: 'config_bot' })})</span>
              </span>
            </div>
          </div>
          <div
            className={classNames('rounded-lg p-3 cursor-pointer', {
              'bg-[#FCFCFC]': importBy === 'Q&A',
            })}
            onClick={() => setImportBy('Q&A')}
          >
            <p className="text-[#111827] font-medium mb-2 flex gap-x-2 items-center">
              <IconMess />
              {t('Q&A', { ns: 'config_bot' })}
            </p>
            <div
              className={classNames(
                'bg-[#F3F4F6] text-[12px] py-1 px-2 rounded-lg flex gap-x-1 items-center font-medium',
                {
                  'text-[11px]': lang === 'jp',
                },
              )}
            >
              <IconQA />
              {includesResourceData?.resource[2]?.number_of_resources || 0} Q&A
              <span className="text-[#A7A7B0]">
                ({formatNumber(includesResourceData?.resource[2]?.token || 0)}{' '}
                {t('tokens', { ns: 'config_bot' })})
              </span>
            </div>
          </div>
        </div>
        <div className="w-[calc(100%-224px)]">
          {importBy === 'website' && <WebsiteClient />}
          {importBy === 'files' && <FilesClient />}
          {importBy === 'Q&A' && <QuestionAnswerClient />}
        </div>
      </div>
    </div>
  );
};

export default ImportData;
