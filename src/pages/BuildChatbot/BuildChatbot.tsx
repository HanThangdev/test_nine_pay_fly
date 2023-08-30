import ChatbotConfigClient from '@/pages/BuildChatbot/ChatbotConfig';
import ImportDataClient from '@/pages/BuildChatbot/ImportData';
import TestingClient from '@/pages/BuildChatbot/Testing';
import SettingClient from '@/pages/BuildChatbot/Setting';
import IntegrationClient from '@/pages/BuildChatbot/Integration';

import Cookies from 'universal-cookie';

import { Tabs, TabsProps } from 'antd';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch } from '@/states/store';
import { resetStateBuild } from '@/states/buildChatBot/buildChatBot.slice';

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
  const { activeTab, data } = useSelector((state: any) => state.buildChatBot);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [activeKey, setActiveKey] = useState<string>(items[0].key);
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  if (Boolean(token) === false) {
    window.location.replace('/auth/signin');
  }

  useEffect(() => {
    setActiveKey(activeTab || items[0].key)
  },[activeTab])

  useEffect(() => {
    dispatch(resetStateBuild())
  }, [location]);

  const listTab = useMemo(() => {
    return !!_.isEmpty(data) ? items.map((item, index) => ( index != 0  ? { ...item, disabled: true } : item)) : items
  },[data])

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="flex">
      <Tabs
        id="Chatbot-Tabs"
        defaultActiveKey="overview"
        items={listTab}
        activeKey={activeKey}
        onChange={onChange}
        className={classNames('Chatbot-tabs flex-auto flex', 'box-border')}
      />
    </div>
  );
};

export default BuildChatbot;
