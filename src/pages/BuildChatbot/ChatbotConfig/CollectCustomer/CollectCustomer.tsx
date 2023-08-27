import classNames from 'classnames';
import IconCollectCustomer from '@/components/IconCollectCustomer/IconCollectCustomer';
import { Checkbox } from 'antd';
import { RiDeleteBinLine } from 'react-icons/ri';
import React from "react";

interface CollectCustomerProps {
  email: boolean;
  setEmail: (value: boolean) => void;
  name: boolean;
  setName: (value: boolean) => void;
  phone: boolean;
  setPhone: (value: boolean) => void;
  custom: boolean;
  setCustom: (value: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  field: string;
  setField: (value: string) => void;
}

const CollectCustomer: React.FC<CollectCustomerProps> = ({ email, setEmail, name, setName, phone, setPhone, custom, setCustom, value, setValue, field, setField }) => {
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[21px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] CollectCustomer mt-[27px]',
      )}
    >
      <h2 className="text-[20px] text-[#01058A] font-black flex gap-x-3">
        <IconCollectCustomer />
        Collect customer info
      </h2>
      <p className="mt-[12px] text-[15px] text-[#A7A7B0]">
        Collect essential information about users
      </p>
      <div className="text-[15px] mt-[20px] flex gap-x-[70px] items-center">
        <div className="flex gap-x-[30px]">
          <Checkbox onClick={() => setEmail(!email)}>Email</Checkbox>
          <Checkbox onClick={() => setName(!name)}>Name</Checkbox>
          <Checkbox onClick={() => setPhone(!phone)}>Phone</Checkbox>
        </div>
        <button
          onClick={() => setCustom(true)}
          className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[13px] font-bold justify-cente"
        >
          Custom field
        </button>
      </div>
      <div className="text-[15px] mt-[16px]">
        <p className="w-[240px] flex gap-x-[10px] font-bold items-center">
          Form title
        </p>
        <input
          type="text"
          placeholder="Let us know how to contact you"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        {email && (
          <input
            type="text"
            placeholder="Email"
            className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        )}
        {name && (
          <input
            type="text"
            placeholder="Name"
            className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        )}
        {phone && (
          <input
            type="text"
            placeholder="Phone"
            className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
          />
        )}
        {custom && (
          <div className="flex items-center mt-[12px]">
            <input
              type="text"
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="h-[41px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
            />
            <RiDeleteBinLine
              size={18}
              color="#F44336"
              onClick={() => setCustom(false)}
              style={{ position: 'absolute', right: '5px', cursor: 'pointer' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectCustomer;
