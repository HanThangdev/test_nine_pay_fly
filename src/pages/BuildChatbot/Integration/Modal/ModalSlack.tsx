import Code from '@/components/code';
import { Modal } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
interface Props {
  open?: boolean;
  onClose: () => void;
}

export default function ModalSlack({ open, onClose }: Props) {
  const { t } = useTranslation();

  return (
    <Modal
      closable={false}
      open={open}
      onCancel={onClose}
      footer={null}
      width={830}
      centered
      className="integration-modal"
    >
      <p className="flex text-[20px] text-[#01058A] font-black">
        {t('addSlack', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] font-bold text-[#878787]">
        {t('integrationStepSlack', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] ml-4 text-[#878787]">
        {t('step1AddSlack', { ns: 'config_bot' })}
        <a
          className="text-[#38bdf8] hover:underline font-bold"
          href="https://slack.com/oauth/v2/authorize?client_id=5697154391091.5942177894499&scope=app_mentions:read,channels:history,chat:write,commands,im:history&user_scope=chat:write,im:history,channels:history,groups:history"
          target="_blank"
        >
          {t('link', { ns: 'config_bot' })}
        </a>
      </p>
      <p className="text-[15px] ml-4 text-[#878787] mt-2">
        {t('step2AddSlack', { ns: 'config_bot' })}&nbsp;
      </p>
      <p className="text-[15px] ml-4 text-[#878787]">
        {t('step3AddSlack', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] font-bold text-[#878787]">
        {t('successAddSlack', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] ml-4 text-[#878787] mt-2">
        {t('success1AddSlack', { ns: 'config_bot' })}&nbsp;
      </p>
      <p className="text-[15px] ml-4 text-[#878787]">
        {t('success2AddSlack', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] ml-4 text-[#878787] mt-2">
        {t('success3AddSlack', { ns: 'config_bot' })}&nbsp;
      </p>
      <p className="text-[15px] ml-4 text-[#878787]">
        {t('success4AddSlack', { ns: 'config_bot' })}
        <span className="font-bold">{t('Chatbot', { ns: 'config_bot' })}</span>
        {t('success4AddSlack_01', { ns: 'config_bot' })}
        <span className="font-bold">{t('bot_id', { ns: 'config_bot' })}</span>
        {t('success4AddSlack_02', { ns: 'config_bot' })}
        <span className="font-bold">
          {t('ChatFlyApp', { ns: 'config_bot' })}
        </span>
        {t('success4AddSlack_03', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] ml-4 text-[#878787] mt-2">
        {t('success5AddSlack', { ns: 'config_bot' })}&nbsp;
        <br />
        <span className="ml-12 text-[13px] italic font-bold">
          {t('Example', { ns: 'config_bot' })}
        </span>
        <br />
        <span className="ml-12 text-[13px]">
          {t('ExampleCommand', { ns: 'config_bot' })}
        </span>
      </p>
      <p className="text-[15px] ml-4 text-[#878787] mt-2">
        {t('success6AddSlack', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] ml-4 text-[#878787] mt-2">
        {t('success7AddSlack', { ns: 'config_bot' })}
        <span className="font-bold">{t('@ChatFly', { ns: 'config_bot' })}</span>
        {t('Bot', { ns: 'config_bot' })}
      </p>
    </Modal>
  );
}
