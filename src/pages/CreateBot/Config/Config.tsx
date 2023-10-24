import { useTranslation } from 'react-i18next';
import { Radio, InputNumber, Tooltip, Checkbox, Button } from 'antd';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import { isEmptyObjectOrArray, convertCustomValue } from '@/utils/utils';
import IconTip from '@/components/IconTip/IconTip';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BotPayload, CustomField } from '@/repository/buildChatBot/type';
const ButtonGroup = Button.Group;
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IconDelete } from '@/components/IconGroup/IconGroup';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Dispatch } from '@reduxjs/toolkit';

const optionsModal = [
  { label: 'GPT - 3.5', value: 'GPT - 3.5' },
  { label: 'GPT - 3.5 - 16k', value: 'GPT - 3.5 - 16k' },
  { label: 'GPT - 4.0', value: 'GPT - 4.0', disabled: true },
];

interface ICOnfig {
  payloadCreateBot: BotPayload;
  setPayloadCreateBot: (data: BotPayload) => void;
  custom: CustomField[];
  setCustom: (data: CustomField[]) => void
}

const Config = ({ payloadCreateBot, setPayloadCreateBot, custom, setCustom }: ICOnfig) => {
  const { t } = useTranslation();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const [titleForm, setTitleForm] = useState('Let us know how to contact you');
  const [messageCount, setMessageCount] = useState(100);

  const increaseBadge = () => {
    setMessageCount(messageCount + 1);
  };

  const declineBadge = () => {
    setMessageCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  return (
    <div className="config-bot">
      <p className="font-medium text-[#344054] flex items-center gap-x-[10px]">
        Rate limit (per day)
        <Tooltip
          color="#212121"
          placement="rightTop"
          overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
          title=""
        >
          <span className="w-3 mt-[1px]">
            <IconTip />
          </span>
        </Tooltip>
      </p>
      <ButtonGroup>
        <Button className="flex items-center" onClick={declineBadge}>
          <MinusOutlined />
        </Button>
        <Button>{messageCount} messages</Button>
        <Button className="flex items-center" onClick={increaseBadge}>
          <PlusOutlined />
        </Button>
      </ButtonGroup>
      <p className="text-[12px] text-[#9CA3AF] mt-[10px]">
        Limit to 100 messages every 1 day
      </p>
      <p className="font-medium mt-4 text-[#344054] flex items-center gap-x-[10px]">
        {t('CollectCustomer', { ns: 'config_bot' })}
        <Tooltip
          color="#212121"
          placement="rightTop"
          overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
          title={t('tooltipCus', { ns: 'config_bot' })}
        >
          <span className="w-3 mt-[1px]">
            <IconTip />
          </span>
        </Tooltip>
      </p>
      <div className="flex gap-x-[30px]">
        <Checkbox
          onChange={(e: CheckboxChangeEvent) =>
            setPayloadCreateBot({
              ...payloadCreateBot,
              collect_customer_info: {
                ...payloadCreateBot.collect_customer_info,
                email: e.target.checked,
              },
            })
          }
          checked={!!payloadCreateBot.collect_customer_info.email}
        >
          {t('Email', { ns: 'config_bot' })}
        </Checkbox>
        <Checkbox
          onChange={(e: CheckboxChangeEvent) =>
            setPayloadCreateBot({
              ...payloadCreateBot,
              collect_customer_info: {
                ...payloadCreateBot.collect_customer_info,
                name: e.target.checked,
              },
            })
          }
          checked={!!payloadCreateBot.collect_customer_info.name}
        >
          {t('Name', { ns: 'config_bot' })}
        </Checkbox>
        <Checkbox
          onChange={(e: CheckboxChangeEvent) =>
            setPayloadCreateBot({
              ...payloadCreateBot,
              collect_customer_info: {
                ...payloadCreateBot.collect_customer_info,
                phone: e.target.checked,
              },
            })
          }
          checked={!!payloadCreateBot.collect_customer_info.phone}
        >
          {t('Phone', { ns: 'config_bot' })}
        </Checkbox>
      </div>
      <div className="bg-[#F3F4F6] p-[10px] rounded-lg mt-2">
        <div className="flex justify-between items-center">
          <p className="text-[#6B7280] mb-0">Preview of form collector</p>
          <button
            onClick={() =>
              custom.length < 2 &&
              setCustom([
                ...custom,
                { key: `${t('CustomField', { ns: 'config_bot' })}` },
              ])
            }
            className=" bg-white text-[#344054] flex items-center rounded-[8px] border-[1px] border-[#D0D5DD] py-1 px-2 text-[14px] font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M2.91666 15.957H5.95347"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M2.91666 11.9857H8.14091"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M2.91666 8.01434H10.5358"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M2.91666 4.04297H17.9167"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5237 10.8268V15.9567M17.0895 13.3914H11.9597"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {t('CustomField', { ns: 'config_bot' })}
          </button>
        </div>
        <div className="text-[15px] mt-[16px]">
          <input
            onChange={(e) => {
              setTitleForm(e.target.value);
            }}
            value={titleForm}
            type="text"
            placeholder={`${t('Letus', { ns: 'config_bot' })}`}
            className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
          {payloadCreateBot?.collect_customer_info?.email && (
            <input
              disabled
              type="text"
              placeholder={`${t('Email', { ns: 'config_bot' })}`}
              className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
          )}
          {payloadCreateBot?.collect_customer_info?.name && (
            <input
              disabled
              type="text"
              placeholder={`${t('Name', { ns: 'config_bot' })}`}
              className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
          )}
          {payloadCreateBot?.collect_customer_info?.phone && (
            <input
              disabled
              type="text"
              placeholder={`${t('Phone', { ns: 'config_bot' })}`}
              className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
          )}
          {custom?.length ? (
            custom
              .filter((it) => it.key !== 'numberShowing')
              .map((item, idx) => {
                return (
                  <div className="flex items-center mt-[12px]" key={idx}>
                    <input
                      type="text"
                      value={item?.key}
                      placeholder="Custom field"
                      onChange={(e) => {
                        const newCustomValue = Array.from(custom);
                        newCustomValue[idx].key = e.target.value;
                        setCustom(newCustomValue);
                      }}
                      className="text-[#9da5b1] h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <div
                      onClick={() => {
                        const newCustomValue = Array.from(custom);
                        newCustomValue.splice(idx, 1);
                        setCustom(newCustomValue);
                      }}
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      <IconDelete />
                    </div>
                  </div>
                );
              })
          ) : (
            <></>
          )}
          <div className="flex gap-x-4 mt-[12px] items-center">
            <InputNumber
              placeholder=""
              value={payloadCreateBot?.collect_customer_info?.numberShowing}
              min={0}
              max={100}
              onChange={(value: number | null) => {
                setPayloadCreateBot({
                  ...payloadCreateBot,
                  collect_customer_info: {
                    ...payloadCreateBot.collect_customer_info,
                    numberShowing: value || 0,
                  },
                })
              }}
              className={`${classNames(
                'rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none input-showing-number',
              )}`}
            />
            <p className="mb-0">{t('showing', { ns: 'config_bot' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
