import Code from '@/components/code';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { Modal } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
interface Props {
  open?: boolean;
  onClose: () => void;
}

export default function ModalIntegration({ open, onClose }: Props) {
  const { t } = useTranslation();

  const { data } = useBuildChatbot();
  const codeStringEmbedBubble = `
    <script>
      window.chatbotConfig = {
        bot_id:"${data?.id}",
      };
    </script>
    <script src="${window.location.origin}/Chat.js"></script>
  `;

  const codeStringEmbedIframe = `
    <iframe
      src="${window.location.origin}/chat/${data?.id}"
      width="100%"
      height="300"
      style="border:1px solid black;"
    ></iframe>
  `;

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
        {t('Embed', { ns: 'config_bot' })}
      </p>
      <p className="text-[15px] text-[#878787]">
        {t('addChatbot', { ns: 'config_bot' })}
      </p>
      <div
        className={classNames(
          'w-full bg-[#dfeafb] rounded-[5px] py-[20px] px-[30px]',
        )}
      >
        <div
          className={classNames('w-full bg-[#f1f5f9] rounded-[5px] px-4 py-2')}
        >
          <Code language="html">{codeStringEmbedIframe}</Code>
        </div>
      </div>
      <p className="text-[15px] text-[#878787] mt-6">
        {t('addChatbubble', { ns: 'config_bot' })}
      </p>
      <div
        className={classNames(
          'w-full bg-[#dfeafb] rounded-[5px] py-[20px] px-[30px]',
        )}
      >
        <div
          className={classNames('w-full bg-[#f1f5f9] rounded-[5px] px-4 py-2')}
        >
          <Code language="html">{codeStringEmbedBubble}</Code>
        </div>
      </div>
    </Modal>
  );
}
