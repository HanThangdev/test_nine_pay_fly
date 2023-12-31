import { Tabs, TabsProps } from 'antd';
import classNames from 'classnames';
import FilesClient from './Files';
import WebsiteClient from './Website';
import QuestionAnswerClient from './Q&A';
import { useTranslation } from 'react-i18next';

const ImportData = () => {
  const { t } = useTranslation();
  const items: TabsProps['items'] = [
    {
      key: 'website',
      label: `${t('Website', { ns: 'config_bot' })}`,
      children: <WebsiteClient />,
    },
    {
      key: 'files',
      label: `${t('Files', { ns: 'config_bot' })}`,
      children: <FilesClient />,
    },
    {
      key: 'Q&A',
      label: `${t('Q&A', { ns: 'config_bot' })}`,
      children: <QuestionAnswerClient />,
    },
  ];
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <Tabs
        id="Chatbot-Tabs"
        defaultActiveKey="overview"
        items={items}
        className={classNames(
          'Chatbot-tabs import-data-tabs flex-auto flex',
          'box-border',
        )}
      />
    </div>
  );
};

export default ImportData;
