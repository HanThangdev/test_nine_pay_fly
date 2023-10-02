import Code from '@/components/code';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
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

  const { data } = useBuildChatbot();
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
      <div className='mt-2'>
        <strong>Link:</strong>&nbsp;<a className={"hover:text-[#01168a]"} href="https://t.me/chatflysupport_bot" target="_blank">{t('addTelegram', { ns: 'config_bot' })}</a>
      </div>
    </Modal>
  );
}
