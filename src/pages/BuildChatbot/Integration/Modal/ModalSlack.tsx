import { Modal, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  step2Slack,
  step3Slack,
  step2_1,
  step2_2,
  step2_3,
  step2_4,
  step2_5,
  step2_6,
  step2_7,
} from '@/images';
import Code from '@/components/code';
import Cookies from 'universal-cookie';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { IconCopy } from '@/components/IconGroup/IconGroup';
interface Props {
  open?: boolean;
  onClose: () => void;
}

export default function ModalSlack({ open, onClose }: Props) {
  const { t } = useTranslation();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);

  const cookies = new Cookies();

  const accessToken = cookies.get('access_token');
  const commandCodeIntegrationSlack = `/chatfly add ${accessToken}:${botInfos.id}`;

  const onCopy = (text: any) => {
    navigator.clipboard.writeText(text);
    notification.success({
      message: `${t('copy', { ns: 'config_bot' })}`,
    });
  };
  return (
    <Modal
      closable={false}
      open={open}
      onCancel={onClose}
      footer={null}
      width={830}
      centered
      className="integration-slack-modal"
    >
      <p className="flex text-[18px] mb-0 text-[#101828] font-bold">
        {t('addSlack', { ns: 'config_bot' })}
      </p>
      <div className="h-[calc(100%-50px)] overflow-auto">
        <p className="text-[15px] font-bold text-[#878787]">
          {t('integrationStepSlack', { ns: 'config_bot' })}
        </p>
        <p className="text-[15px] ml-4 text-[#878787] gap-y-4">
          {t('step1AddSlack', { ns: 'config_bot' })}
        </p>
        <a
          className="font-bold cursor-pointer mb-0 ml-4  border-[1px] border-[#D0D5DD] py-2 px-[22px] rounded-[10px]"
          href="https://slack.com/oauth/v2/authorize?client_id=5697154391091.5942177894499&scope=app_mentions:read,channels:history,chat:write,commands,im:history&user_scope=chat:write,im:history,channels:history,groups:history"
          target="_blank"
        >
          {t('install', { ns: 'config_bot' })}
        </a>
        <p className="text-[15px] mt-4 ml-4 text-[#878787]">
          {t('step2AddSlack', { ns: 'config_bot' })}&nbsp;
        </p>
        <img src={step2Slack} className="my-4" />
        <p className="text-[15px] ml-4 text-[#878787]">
          {t('step3AddSlack', { ns: 'config_bot' })}
        </p>
        <img src={step3Slack} className="my-4" />
        <p className="text-[15px] font-bold text-[#878787]">
          {t('successAddSlack', { ns: 'config_bot' })}
        </p>
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('success1AddSlack', { ns: 'config_bot' })}&nbsp;
        </p>
        <img src={step2_1} className="my-4" />
        <p className="text-[15px] ml-4 text-[#878787]">
          {t('success2AddSlack', { ns: 'config_bot' })}
        </p>
        <img src={step2_2} className="my-4" />
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('success3AddSlack', { ns: 'config_bot' })}&nbsp;
        </p>
        <img src={step2_3} className="my-4" />
        <p className="text-[15px] ml-4 text-[#878787]">
          {t('success4AddSlack', { ns: 'config_bot' })}
          <span className="font-bold">
            {t('Chatbot', { ns: 'config_bot' })}
          </span>
          {t('success4AddSlack_01', { ns: 'config_bot' })}
          <span className="font-bold">{t('bot_id', { ns: 'config_bot' })}</span>
          {t('success4AddSlack_02', { ns: 'config_bot' })}
          <span className="font-bold">
            {t('ChatFlyApp', { ns: 'config_bot' })}
          </span>
          {t('success4AddSlack_03', { ns: 'config_bot' })}
        </p>
        <img src={step2_4} className="my-4" />
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('success5AddSlack', { ns: 'config_bot' })}&nbsp;
          <br />
          <br />
          <div className="flex gap-x-2 items-center">
            <div
              className={classNames(
                'w-[95%] rounded-[5px] p-2 overflow-auto border-[1px] border-[#D0D5DD]',
              )}
            >
              <span className="mb-0 whitespace-nowrap">
                {commandCodeIntegrationSlack}
              </span>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => onCopy(commandCodeIntegrationSlack)}
            >
              <IconCopy />
            </div>
          </div>
        </p>
        <img src={step2_5} className="my-4" />
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('success6AddSlack', { ns: 'config_bot' })}
        </p>
        <img src={step2_6} className="my-4" />
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('success7AddSlack', { ns: 'config_bot' })}
          <span className="font-bold">
            {t('@ChatFly', { ns: 'config_bot' })}
          </span>
          {t('Bot', { ns: 'config_bot' })}
        </p>
        <img src={step2_7} className="my-4" />
      </div>
    </Modal>
  );
}
