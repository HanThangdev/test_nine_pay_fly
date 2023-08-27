import ChatbotConfigClient from '@/pages/BuildChatbot/ChatbotConfig';
import ImportDataClient from '@/pages/BuildChatbot/ImportData';
import TestingClient from '@/pages/BuildChatbot/Testing';
import SettingClient from '@/pages/BuildChatbot/Setting';
import IntegrationClient from '@/pages/BuildChatbot/Integration';

import Cookies from 'universal-cookie';

import { Tabs, TabsProps } from 'antd';
import classNames from 'classnames';

const items: TabsProps['items'] = [
  {
    key: 'chatbogConfig',
    label: `Chatbot Config`,
    children: <ChatbotConfigClient />,
  },
  {
    key: 'importData',
    label: `Import Data`,
    children: <ImportDataClient />,
  },
  {
    key: 'setting',
    label: `Advanced Setting`,
    children: <SettingClient />,
  },
  {
    key: 'testing',
    label: `Test Chatbot`,
    children: <TestingClient />,
  },
  {
    key: 'integration',
    label: `Integrations`,
    children: <IntegrationClient />,
  },
];

const BuildChatbot = () => {
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  if (Boolean(token) === false) {
    window.location.replace('/auth/signin');
  }
  return (
    <div className="flex">
      <Tabs
        id="Chatbot-Tabs"
        defaultActiveKey="overview"
        items={items}
        className={classNames('Chatbot-tabs flex-auto flex', 'box-border')}
      />
    </div>
  );
};

export default BuildChatbot;
