import BotConfig from './BotConfig';
import profileState, { useProfileState } from '@/states/profile';
const BotConfigClient = () => {
  const { data: profile } = useProfileState(profileState);
  console.log(profile);

  return <BotConfig />;
};

export default BotConfigClient;
