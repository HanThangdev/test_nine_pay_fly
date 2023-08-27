import BotConfigClient from './BotConfig';
import PromptClient from './Prompt';
import CollectCustomerClient from './CollectCustomer';
import profileState, { useProfileState } from '@/states/profile';
import { BotPayload } from '@/repository/buildbot/type';
import { useState } from 'react';

const ChatbotConfig = () => {
  const { data: profile } = useProfileState(profileState);
  const [botData, setBotData] = useState<BotPayload | undefined>();
  console.log(profile);
  return (
    <>
      <BotConfigClient />
      <PromptClient />
      <CollectCustomerClient />
    </>
  );
};

export default ChatbotConfig;
