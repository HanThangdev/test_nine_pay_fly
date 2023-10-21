import { IconCopy } from '@/components/IconGroup/IconGroup';
import Code from '@/components/code';
import { Modal, notification } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
interface Props {
  open?: boolean;
  onClose: () => void;
  token: string;
}

export default function ModalTelegram({ open, onClose, token }: Props) {
  const { t } = useTranslation();

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
      width={768}
      centered
      className="integration-modal"
    >
      <p className="flex text-[18px] mb-0 text-[#101828] font-bold">
        {t('addTelegram', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] text-[#878787]">
        {t('addChatbotIntoTelegram', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] text-[#878787]">
        {t('step1AddTelegram', { ns: 'config_bot' })}
      </p>
      <div className="flex gap-x-2 items-center">
        <div
          className={classNames(
            'w-full rounded-[5px] p-2 border-[1px] border-[#D0D5DD]',
          )}
        >
          <p className="mb-0 whitespace-break-spaces">{`/add ${token}`}</p>
        </div>
        <div className="cursor-pointer" onClick={() => onCopy(`/add ${token}`)}>
          <IconCopy />
        </div>
      </div>
      <p className="text-[15px] text-[#878787] mt-2">
        {t('step2AddTelegram', { ns: 'config_bot' })}&nbsp;
        <a
          className="text-[#38bdf8] hover:underline font-bold"
          href="https://t.me/chatflysupport_bot"
          target="_blank"
        >
          {t('link', { ns: 'config_bot' })}
        </a>
      </p>
      <p className="text-[15px] text-[#878787]">
        {t('step3AddTelegram', { ns: 'config_bot' })}
      </p>
    </Modal>
  );
}
