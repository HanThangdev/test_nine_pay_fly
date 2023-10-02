import classNames from 'classnames';
import IconCollectCustomer from '@/components/IconCollectCustomer/IconCollectCustomer';
import { Checkbox, InputNumber, Tooltip } from 'antd';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import React from 'react';
import { CustomField } from '@/repository/buildChatBot/type';
import { useTranslation } from 'react-i18next';
interface CollectCustomerProps {
  email: boolean;
  setEmail: (value: boolean) => void;
  name: boolean;
  setName: (value: boolean) => void;
  phone: boolean;
  setPhone: (value: boolean) => void;
  custom: CustomField[];
  setCustom: (value: CustomField[]) => void;
  numberShowing: number;
  setNumberShowing: (value: number) => void;
}

const CollectCustomer: React.FC<CollectCustomerProps> = ({
  email,
  setEmail,
  name,
  setName,
  phone,
  setPhone,
  custom,
  setCustom,
  numberShowing,
  setNumberShowing,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[21px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] CollectCustomer mt-[27px]',
      )}
    >
      <h2 className="text-[20px] items-center text-[#01058A] font-black flex gap-x-3">
        <IconCollectCustomer />
        {t('CollectCustomer', { ns: 'config_bot' })}
        <Tooltip
          color="#212121"
          placement="rightTop"
          overlayStyle={{ whiteSpace: 'pre-line', width: '400px' }}
          title={t('tooltipCus', { ns: 'config_bot' })}
        >
          <AiOutlineQuestionCircle size={18} color="#E77964" />
        </Tooltip>
      </h2>
      <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
        {t('CollectInfor', { ns: 'config_bot' })}
      </p>
      <div className="text-[15px] mt-[20px] flex gap-x-[70px] items-center">
        <div className="flex gap-x-[30px]">
          <Checkbox onClick={() => setEmail(!email)} checked={!!email}>
            {t('Email', { ns: 'config_bot' })}
          </Checkbox>
          <Checkbox onClick={() => setName(!name)} checked={!!name}>
            {t('Name', { ns: 'config_bot' })}
          </Checkbox>
          <Checkbox onClick={() => setPhone(!phone)} checked={!!phone}>
            {t('Phone', { ns: 'config_bot' })}
          </Checkbox>
        </div>
        <button
          onClick={() =>
            custom.length < 2 &&
            setCustom([
              ...custom,
              { key: `${t('CustomField', { ns: 'config_bot' })}` },
            ])
          }
          className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[14px] font-bold justify-cente"
        >
          {t('CustomField', { ns: 'config_bot' })}
        </button>
      </div>
      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
          {t('Form', { ns: 'config_bot' })}
        </p>
        <input
          disabled
          type="text"
          placeholder={`${t('Letus', { ns: 'config_bot' })}`}
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        {email && (
          <input
            disabled
            type="text"
            placeholder={`${t('Email', { ns: 'config_bot' })}`}
            className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        )}
        {name && (
          <input
            disabled
            type="text"
            placeholder={`${t('Name', { ns: 'config_bot' })}`}
            className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        )}
        {phone && (
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
                    placeholder='Custom field'
                    onChange={(e) => {
                      const newCustomValue = Array.from(custom);
                      newCustomValue[idx].key = e.target.value;
                      setCustom(newCustomValue);
                    }}
                    className="text-[#9da5b1] h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  <RiDeleteBinLine
                    size={18}
                    color="#F44336"
                    onClick={() => {
                      const newCustomValue = Array.from(custom);
                      newCustomValue.splice(idx, 1);
                      setCustom(newCustomValue);
                    }}
                    style={{
                      position: 'absolute',
                      right: '5px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              );
            })
        ) : (
          <></>
        )}
        <div className="flex gap-x-4 mt-[12px] items-center">
          <InputNumber
            placeholder=""
            value={numberShowing}
            min={0}
            max={100}
            onChange={(value: number | null) => {
                setNumberShowing(value || 0);
            }}
            className={`${classNames('rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none input-showing-number')}`}
          />
          <p className="mb-0">{t('showing', { ns: 'config_bot' })}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectCustomer;
