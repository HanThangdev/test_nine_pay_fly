import ChatbotConfigClient from './ChatbotConfig';
import ImportDataClient from './ImportData';
import TestingClient from './Testing';
import IntegrationClient from './Integration';
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
    key: 'testing',
    label: `Testing`,
    children: <TestingClient />,
  },
  {
    key: 'integration',
    label: `Integration`,
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
      <button className="right-[38px] absolute w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-cente">
        Intergration
      </button>
    </div>
  );
};

export default BuildChatbot;
