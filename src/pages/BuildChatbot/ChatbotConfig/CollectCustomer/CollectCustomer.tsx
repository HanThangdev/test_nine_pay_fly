import classNames from 'classnames';
import IconCollectCustomer from '../../../../components/IconCollectCustomer/IconCollectCustomer';
import { Checkbox } from 'antd';

const CollectCustomer = () => {
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
          <Checkbox>Email</Checkbox>
          <Checkbox>Name</Checkbox>
          <Checkbox>Phone</Checkbox>
        </div>
        <button className="w-[150px] h-[43px] bg-[#E8E9F4] text-[#01058A] rounded-[10px] text-[13px] font-bold justify-cente">
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
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <input
          type="text"
          placeholder="Name"
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <input
          type="text"
          placeholder="Phone"
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <input
          type="text"
          placeholder="Custom field"
          className="h-[41px] mt-[12px] w-full rounded-[5px] border border-[#DCDEED] bg-[#ffffffeb] px-4 outline-none focus:border-primary focus-visible:shadow-none"
        />
        <div className='flex justify-end'>
          <button className="w-[150px] mt-[20px] h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[13px] font-bold justify-cente">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectCustomer;
