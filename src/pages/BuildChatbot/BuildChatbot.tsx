import ChatbotConfigClient from '@/pages/BuildChatbot/ChatbotConfig';
import ImportDataClient from '@/pages/BuildChatbot/ImportData';
import TestingClient from '@/pages/BuildChatbot/Testing';
import SettingClient from '@/pages/BuildChatbot/Setting';
import IntegrationClient from '@/pages/BuildChatbot/Integration';
import Scoring from '@/pages/BuildChatbot/Scoring';

import Cookies from 'universal-cookie';

import { Tabs, TabsProps } from 'antd';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '@/states/store';

import {
  setActiveTab,
  setDataWhenUpdate,
} from '@/states/buildChatBot/buildChatBot.slice';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
const urlParams = new URLSearchParams(window.location.search);
const getLanguageFromURL = urlParams.get('language');
const BuildChatbot = () => {
  const {
    botInfos,
    activeTab,
    onGetInfoCurrentBot,
    onGetIncludesSource,
    includesResource,
  } = useBuildChatbot();
  const { t } = useTranslation();
  const lang = getLanguageFromURL || localStorage.getItem('LANGUAGE') || 'en';
  const { id } = useParams();
  const items: TabsProps['items'] = [
    {
      key: 'chatbogConfig',
      label: `${t('ChatbotConfig')}`,
      children: <ChatbotConfigClient />,
    },
    {
      key: 'importData',
      label: `${t('ImportData')}`,
      children: <ImportDataClient />,
    },
    {
      key: 'scoring',
      label: `${t('Scoring')}`,
      children: <Scoring />,
    },
    {
      key: 'testing',
      label: `${t('TestChatbot')}`,
      children: <TestingClient />,
    },
    {
      key: 'setting',
      label: `${t('AdvancedSetting')}`,
      children: <SettingClient />,
    },
    {
      key: 'integration',
      label: `${t('Integrations')}`,
      children: <IntegrationClient />,
    },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const [activeKey, setActiveKey] = useState<string>(items[0].key);
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  if (Boolean(token) === false) {
    window.location.replace('/auth/signin');
  }

  useEffect(() => {
    setActiveKey(activeTab || items[0].key);
  }, [activeTab]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const obj: any = {};

    for (const [key, value] of urlParams) {
      obj[key] = value;
    }

    dispatch(setDataWhenUpdate(obj));
    if (id) {
      onGetInfoCurrentBot({ bot_id: id })
        .then(() => {
          onGetIncludesSource({ bot_id: id });
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  }, []);

  const listTab = useMemo(() => {
    return !!isEmptyObjectOrArray(botInfos)
      ? items.map((item, index) =>
          index != 0 ? { ...item, disabled: true } : item,
        )
      : !!includesResource?.total_token
      ? items
      : items.map((item, index) =>
          ![0, 1].includes(index) ? { ...item, disabled: true } : item,
        );
  }, [botInfos, lang, includesResource]);

  const onChange = (key: string) => {
    setActiveKey(key);
    dispatch(setActiveTab(key));
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
