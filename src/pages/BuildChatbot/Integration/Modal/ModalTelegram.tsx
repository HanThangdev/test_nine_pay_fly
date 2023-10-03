import Code from '@/components/code';
import { Modal } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
interface Props {
  open?: boolean;
  onClose: () => void;
  token: string
}

export default function ModalTelegram({ open, onClose, token}: Props) {
  const { t } = useTranslation();

  return (
    <Modal
      closable={false}
      open={open}
      onCancel={onClose}
      footer={null}
      width={768}
      centered
      className="integration-modal"
    >
      <p className="flex text-[20px] text-[#01058A] font-black">
        {t('addTelegram', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] text-[#878787]">
        {t('addChatbotIntoTelegram', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] text-[#878787]">
        {t('step1AddTelegram', { ns: 'config_bot' })}
      </p>
      <div
        className={classNames(
          'w-full bg-[#dfeafb] rounded-[5px] py-[20px] px-[30px]',
        )}
      >
        <div
          className={classNames('w-full bg-[#f1f5f9] rounded-[5px] px-4 py-2')}
        >
          <Code language="html">{`/add ${token}`}</Code>
        </div>

      </div>
      <p className="text-[15px] text-[#878787] mt-2">
        {t('step2AddTelegram', { ns: 'config_bot' })}&nbsp;
        <a className="text-[#38bdf8] hover:underline font-bold" href="https://t.me/chatflysupport_bot" target="_blank">{t('link', { ns: 'config_bot' })}</a>
      </p>
      <p className="text-[15px] text-[#878787]">
        {t('step3AddTelegram', { ns: 'config_bot' })}
      </p>
    </Modal>
  );
}
