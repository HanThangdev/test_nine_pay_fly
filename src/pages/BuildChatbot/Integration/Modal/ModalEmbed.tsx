import { API_STATUS } from '@/constants';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { Input, Modal, notification } from 'antd';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconCopy } from '@/components/IconGroup/IconGroup';

interface Props {
  open?: boolean;
  onClose: () => void;
}
const { TextArea } = Input;
export default function ModalEmbed({ open, onClose }: Props) {
  const { t } = useTranslation();
  const { botInfos, onUpdateListDomain } = useBuildChatbot();
  const [listDomain, setListDomain] = useState(
    botInfos?.domain ? botInfos?.domain.join('\n') : '',
  );
  const [statusActionDomain, setStatusActionDomain] = useState('View');
  const codeStringEmbedBubble = `
    <script>
      window.chatbotConfig = {
        bot_id:"${botInfos?.id}",
      };
    </script>
    <script src="${window.location.origin}/Chat.js"></script>
  `;

  const codeStringEmbedIframe = `
    <iframe
      src="${window.location.origin}/chat/${botInfos?.id}"
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
      if (listDomainPayload.length > 10) {
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
    onUpdateListDomain({ bot_id: botInfos.id, domain: listDomainPayload })
      .then((response) => {
        if (response.meta.requestStatus === API_STATUS.FULFILLED) {
          notification.success({
            message: 'Update domain successfully',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      className="integration-modal max-h-full"
    >
      <p className="flex text-[18px] mb-0 text-[#101828] font-bold">
        {t('Embed', { ns: 'config_bot' })}
      </p>
      <div className="text-[14px] text-[#344054] mb-[8px] flex items-center justify-between">
        <span>{t('ListDomainYouCanEmbed', { ns: 'config_bot' })}</span>
        {/* <button
          onClick={handleButtonAction}
          className="w-[150px] h-[41px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[15px] font-bold justify-center cursor-pointer"
        >
          {statusActionDomain === 'View' ? 'Edit' : 'Submit'}
        </button> */}
      </div>
      <div className="flex gap-x-2 items-center">
        <TextArea
          disabled={statusActionDomain == 'View'}
          placeholder=""
          rows={2}
          value={listDomain}
          className="h-[50px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          onChange={(e) => setListDomain(e.target.value)}
        />
        <p className="mb-0 cursor-pointer" onClick={handleButtonAction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2924 17.033C17.6374 17.033 17.9174 17.313 17.9174 17.658C17.9174 18.003 17.6374 18.283 17.2924 18.283H11.2482C10.9032 18.283 10.6232 18.003 10.6232 17.658C10.6232 17.313 10.9032 17.033 11.2482 17.033H17.2924ZM13.4306 3.0447C13.4722 3.0772 14.8664 4.16054 14.8664 4.16054C15.3731 4.4622 15.7689 5.00137 15.9189 5.6397C16.0681 6.27137 15.9597 6.92304 15.6122 7.47387C15.6099 7.47754 15.6076 7.48117 15.5996 7.49197L15.5933 7.50032C15.5369 7.57465 15.2917 7.8847 14.0541 9.43519C14.0426 9.45551 14.0296 9.47454 14.0154 9.49304C13.9945 9.5203 13.9718 9.54535 13.9476 9.56817C13.8632 9.67445 13.774 9.78612 13.6803 9.90353L13.4903 10.1414C13.0984 10.6322 12.6335 11.2142 12.082 11.9046L11.799 12.2588C10.7343 13.5914 9.37069 15.2977 7.62389 17.483C7.24139 17.9597 6.66805 18.2372 6.05222 18.2447L3.01972 18.283H3.01139C2.72222 18.283 2.47055 18.0847 2.40305 17.8022L1.72055 14.9097C1.57972 14.3105 1.71972 13.6922 2.10389 13.2122L9.95389 3.39387C9.95722 3.39054 9.95972 3.38637 9.96305 3.38304C10.8239 2.35387 12.3806 2.2022 13.4306 3.0447ZM9.07866 6.48917L3.07972 13.993C2.93722 14.1714 2.88472 14.4014 2.93722 14.6222L3.50472 17.0264L6.03722 16.9947C6.27805 16.9922 6.50055 16.8847 6.64805 16.7014C7.40762 15.751 8.36227 14.5566 9.34377 13.3284L9.69102 12.8938L10.0389 12.4585C10.9593 11.3066 11.8687 10.1684 12.6296 9.21572L9.07866 6.48917ZM10.9256 4.18054L9.85949 5.5125L13.4101 8.23827C14.0936 7.38225 14.5432 6.81845 14.5847 6.7647C14.7214 6.54304 14.7747 6.2297 14.7031 5.92804C14.6297 5.61887 14.4372 5.35637 14.1597 5.18887C14.1006 5.14804 12.6964 4.05804 12.6531 4.02387C12.1247 3.60054 11.3539 3.67387 10.9256 4.18054Z"
              fill="black"
            />
          </svg>
        </p>
      </div>
      <p className="text-[12px] text-[#6B7280] pt-[10px]">
        {t('addChatbot', { ns: 'config_bot' })}
      </p>
      <div className="flex gap-x-2">
        <div
          className={classNames(
            'w-full rounded-[5px] p-2 border-[1px] border-[#D0D5DD]',
          )}
        >
          <p className="mb-0 whitespace-break-spaces">
            {codeStringEmbedIframe}
          </p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => onCopy(codeStringEmbedIframe)}
        >
          <IconCopy />
        </div>
      </div>
      <p className="text-[12px] text-[#6B7280] pt-[10px]">
        {t('addChatbubble', { ns: 'config_bot' })}
      </p>
      <div className="flex gap-x-2">
        <div
          className={classNames(
            'w-full rounded-[5px] p-2 border-[1px] border-[#D0D5DD]',
          )}
        >
          <p className="mb-0 whitespace-break-spaces">
            {codeStringEmbedBubble}
          </p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => onCopy(codeStringEmbedBubble)}
        >
          <IconCopy />
        </div>
      </div>
    </Modal>
  );
}
