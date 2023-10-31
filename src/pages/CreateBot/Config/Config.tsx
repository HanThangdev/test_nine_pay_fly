import { useTranslation } from 'react-i18next';
import {
  Radio,
  InputNumber,
  Tooltip,
  Checkbox,
  Button,
  Input,
  Switch,
  Slider,
} from 'antd';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import IconTip from '@/components/IconTip/IconTip';
import { BotPayload, CustomField } from '@/repository/buildChatBot/type';
const ButtonGroup = Button.Group;
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IconAdd, IconDelete } from '@/components/IconGroup/IconGroup';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface ICOnfig {
  payloadCreateBot: BotPayload;
  setPayloadCreateBot: (data: BotPayload) => void;
  custom: CustomField[];
  setCustom: (data: CustomField[]) => void;
  rules: any;
  setRules: (newValue: any) => void;
}

const Config = ({
  payloadCreateBot,
  setPayloadCreateBot,
  custom,
  setCustom,
  rules,
  setRules,
}: ICOnfig) => {
  const { t } = useTranslation();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const [titleForm, setTitleForm] = useState('Let us know how to contact you');
  const [messageCount, setMessageCount] = useState(0);

  const increaseBadge = () => {
    setMessageCount(messageCount + 1);
  };

  const declineBadge = () => {
    setMessageCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const addItem = () => {
    setRules([...rules, '']);
  };
  const removeItem = (index: any) => {
    const rows = [...rules];
    rows.splice(index, 1);
    setRules(rows);
  };

  return (
    <div className="config-bot flex gap-x-4">
      <div className="w-1/2">
        <p className="font-medium text-[#344054] flex items-center gap-x-[10px]">
          {t('Ratelimit', { ns: 'config_bot' })}
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
          <Button>
            <Input
              type="number"
              value={messageCount}
              onChange={(e) => setMessageCount(Number(e.target.value))}
              className={classNames(
                'border-none hover:border-none focus:!shadow-none focus:border-[#fcfcfc] h-full bg-[#fcfcfc] w-[35px] text-center !pl-0 !pr-[5px]',
              )}
            />{' '}
            {t('messages', { ns: 'config_bot' })}
          </Button>
          <Button className="flex items-center" onClick={increaseBadge}>
            <PlusOutlined />
          </Button>
        </ButtonGroup>
        <p className="text-[12px] text-[#344054] mt-[10px]">
          {t('limit100', { ns: 'config_bot' })}
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
            <p className="text-[#6B7280] mb-0">
              {t('Preview', { ns: 'config_bot' })}
            </p>
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
                    <div
                      className="flex items-center mt-[12px] rounded-[5px] pr-2 border border-[#DCDEED] bg-[#ffffffeb] "
                      key={idx}
                    >
                      <input
                        type="text"
                        value={item?.key}
                        placeholder="Custom field"
                        onChange={(e) => {
                          const newCustomValue = Array.from(custom);
                          newCustomValue[idx].key = e.target.value;
                          setCustom(newCustomValue);
                        }}
                        className="text-[#9da5b1] h-[41px] w-full rounded-[5px] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                      />
                      <div
                        onClick={() => {
                          const newCustomValue = Array.from(custom);
                          newCustomValue.splice(idx, 1);
                          setCustom(newCustomValue);
                        }}
                        className="cursor-pointer p-1 rounded border-[1px] h-fit border-[#FDA29B] ml-1 bg-[#FFF]"
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
                  });
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
      <div className="prompt-bot w-1/2">
        <p className="text-[14px] text-[#344054] font-medium">
          {t('Guiding', { ns: 'config_bot' })}
        </p>
        <p className="w-[240px] text-[#344054] flex gap-x-[10px] font-bold items-center">
          {t('Base', { ns: 'config_bot' })}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={t('tooltipPrompt', { ns: 'config_bot' })}
          >
            <span className="w-3 mt-[1px]">
              <IconTip />
            </span>
          </Tooltip>
        </p>
        <textarea
          value={payloadCreateBot?.custom_prompt}
          onChange={(e) => {
            setPayloadCreateBot({
              ...payloadCreateBot,
              custom_prompt: e.target.value,
            });
          }}
          className="w-full max-h-[200px] min-h-[150px] text-[15px] px-[20px] focus-visible:outline-none focus:border-[#DCDEED] py-[11px] border-[1px] border-[#DCDEED] mt-[11px] rounded-[5px]"
        />
        <p className="w-[240px] text-[#344054] mt-[12px] flex gap-x-[10px] font-bold items-center">
          {t('Creativity', { ns: 'config_bot' })}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={t('tooltipTem', { ns: 'config_bot' })}
          >
            <span className="w-3 mt-[1px]">
              <IconTip />
            </span>
          </Tooltip>
        </p>
        <Slider
          defaultValue={0}
          max={100}
          value={payloadCreateBot?.temperature}
          onChange={(e) => {
            setPayloadCreateBot({
              ...payloadCreateBot,
              temperature: e,
            });
          }}
        />
        <div className="flex justify-between mt-3">
          <p className="text-[14px] text-[#2F80ED] flex items-center gap-x-[10px] bg-[#E9F2FF] rounded-lg py-1 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.8821 14.5084C10.0771 14.4032 10.1987 14.2032 10.1987 13.9856V10.5978H16.8881C17.2259 10.5978 17.5 10.33 17.5 10C17.5 9.6701 17.2259 9.40232 16.8881 9.40232H10.1987V6.01445C10.1987 5.79608 10.0771 5.59605 9.8821 5.49164C9.68711 5.38565 9.44887 5.39282 9.2604 5.50838L2.78556 9.49397C2.6077 9.60395 2.5 9.79443 2.5 10C2.5 10.2057 2.6077 10.3961 2.78556 10.5061L9.2604 14.4917C9.35994 14.5523 9.47335 14.5834 9.58676 14.5834C9.68792 14.5834 9.78991 14.5579 9.8821 14.5084Z"
                fill="#2F80ED"
              />
            </svg>
            {t('MoreFocus', { ns: 'config_bot' })}
          </p>
          <p className="text-[14px] text-[#2F80ED] flex items-center gap-x-[10px] bg-[#E9F2FF] rounded-lg py-1 px-2">
            {t('MoreCreate', { ns: 'config_bot' })}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.1179 5.4916C9.9229 5.5968 9.80133 5.79684 9.80133 6.01441V9.40228H3.11191C2.77414 9.40228 2.5 9.67006 2.5 10C2.5 10.3299 2.77414 10.5977 3.11191 10.5977H9.80133V13.9856C9.80133 14.204 9.9229 14.404 10.1179 14.5084C10.3129 14.6144 10.5511 14.6072 10.7396 14.4917L17.2144 10.5061C17.3923 10.3961 17.5 10.2056 17.5 10C17.5 9.79438 17.3923 9.60391 17.2144 9.49393L10.7396 5.50834C10.6401 5.44777 10.5267 5.41669 10.4132 5.41669C10.3121 5.41669 10.2101 5.44219 10.1179 5.4916Z"
                fill="#2F80ED"
              />
            </svg>
          </p>
        </div>
        <p className="flex gap-x-[10px] text-[#344054] font-bold items-center">
          <Switch size="small" />
          {t('Enable', { ns: 'config_bot' })}
          <Tooltip
            color="#212121"
            placement="rightTop"
            overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
            title={t('tooltipAI', { ns: 'config_bot' })}
          >
            <span className="w-3 mt-[1px]">
              <IconTip />
            </span>
          </Tooltip>
        </p>
        <div className="flex justify-between mb-3">
          <p className="w-[240px] text-[#344054] mb-0 flex gap-x-[10px] font-bold items-center">
            {t('Rules', { ns: 'config_bot' })}
            <Tooltip
              color="#212121"
              placement="rightTop"
              overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
              title={t('tooltipRule', { ns: 'config_bot' })}
            >
              <span className="w-3 mt-[1px]">
                <IconTip />
              </span>
            </Tooltip>
          </p>
          <button
            onClick={addItem}
            className=" bg-white text-[#344054] flex items-center rounded-[8px] border-[1px] border-[#D0D5DD] py-1 px-2 text-[14px] font-bold"
          >
            <IconAdd />
            {t('addRule', { ns: 'config_bot' })}
          </button>
        </div>

        {rules.map((_item: string, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between gap-x-2 mt-[12px] pr-2 rounded-lg border border-[#DCDEED] bg-[#ffffffeb]"
          >
            <input
              type="text"
              value={_item}
              placeholder={
                index !== 0
                  ? `${t('Newrule', { ns: 'config_bot' })}`
                  : `${t('notRespond', { ns: 'config_bot' })}`
              }
              onChange={(e) => {
                const newRules = Array.from(rules).map((_, idx) => {
                  if (index === idx) {
                    return e.target.value; // Thay đổi giá trị "b" thành "d"
                  }
                  return _;
                });
                setRules(newRules);
              }}
              className={`${
                index !== 0 || 'mt-[12px'
              } h-[41px] w-full rounded-[8px] px-4 outline-none focus:border-primary focus-visible:shadow-none`}
            />

            <div className="cursor-pointer">
              {index !== 0 && (
                <div
                  className="cursor-pointer p-1 rounded border-[1px] h-fit border-[#FDA29B] ml-1 bg-[#FFF]"
                  onClick={() => removeItem(index)}
                >
                  <IconDelete />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Config;
