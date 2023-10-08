import Code from '@/components/code';
import { API_STATUS } from '@/constants';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { Input, Modal, notification } from 'antd';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  open?: boolean;
  onClose: () => void;
}
const { TextArea } = Input;
export default function ModalEmbed({ open, onClose }: Props) {
  const { t } = useTranslation();
  const { data, onUpdateListDomain } = useBuildChatbot();
  const [listDomain, setListDomain] = useState(
    data?.domain ? data?.domain.join('\n') : '',
  );
  const [statusActionDomain, setStatusActionDomain] = useState('View');
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
  const listDomainPayload = useMemo(() => {
    return listDomain?.split('\n').filter((item: string) => item !== '');
  }, [listDomain]);

  const handleButtonAction = () => {
    if (statusActionDomain == 'View') {
      setStatusActionDomain('Edit');
    } else {
      if(listDomainPayload.length > 10){
        notification.error({
          message: t('ListDomainYouCanEmbedMessage', { ns: 'config_bot' }),
        });
        return;
      }
      setStatusActionDomain('View');
      isEmptyObjectOrArray(listDomainPayload) ? null : handleUpdateListDomain();
    }
  };

  const handleUpdateListDomain = () => {
    onUpdateListDomain({ bot_id: data.id, domain: listDomainPayload }).then((response) => {
      if (response.meta.requestStatus === API_STATUS.FULFILLED){
        notification.success({
          message: 'Update domain successfully',
        });
      }
    }).catch((err) => {
      console.log(err)
    })
  };
  
  return (
    <Modal
      closable={false}
      open={open}
      onCancel={onClose}
      footer={null}
      width={768}
      centered
      className="integration-modal max-h-full"
    >
      <p className="flex text-[20px] text-[#01058A] font-black">
        {t('Embed', { ns: 'config_bot' })}
      </p>
      <div className="font-bold mb-[8px] flex items-center justify-between">
        <span>{t('ListDomainYouCanEmbed', { ns: 'config_bot' })}</span>
        <button
          onClick={handleButtonAction}
          className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center cursor-pointer"
        >
          {statusActionDomain === 'View' ? 'Edit' : 'Submit'}
        </button>
      </div>
      <TextArea
        disabled={statusActionDomain == 'View'}
        placeholder=""
        rows={4}
        value={listDomain}
        className="h-[100px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        onChange={(e) =>setListDomain(e.target.value)}
      />
      <p className="text-[15px] text-[#878787] pt-[20px]">
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
