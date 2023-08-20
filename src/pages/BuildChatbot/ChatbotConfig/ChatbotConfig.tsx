import BotConfigClient from './BotConfig';
import PromptClient from './Prompt';
import CollectCustomerClient from './CollectCustomer';

const ChatbotConfig = () => {
  return (
    <>
      <BotConfigClient />
      <PromptClient />
      <CollectCustomerClient />
    </>
  );
};

export default ChatbotConfig;
