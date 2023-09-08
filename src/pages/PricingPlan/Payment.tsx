import classNames from 'classnames';

const Payment = () => {
  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Bog-config',
      )}
    >
      <div className="bg-[#F9F9FC] rounded-lg justify-center text-center items-center py-4 text-black flex text-[16px] lg:text-[20px] w-[353px] m-auto ">
        <p className="mb-0 font-bold">
          Business
          <br />
          389 US$/month
        </p>
      </div>
      <div className="mt-10 w-1/2 m-auto">
        <p className="font-bold">Form of Payment</p>
        <div className="grid grid-cols-3 gap-4">
          <img src="https://bom.so/TZTGXI" />
          <img src="https://bom.so/Nsk3BJ" />
          <p className="rounded-[20px] border-[1px] border-[#00000026]">
            <img src="https://bom.so/LCKZ9J" className="rounded-[20px]" />
          </p>
          <p className="rounded-[20px] border-[1px] border-[#00000026]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7W0UtOjbAYk8b4OM_0mC-yLW1l6O9SuZrcQ&usqp=CAU"
              className="rounded-[20px]"
            />
          </p>
          <p className="rounded-[20px] flex border-[1px] border-[#00000026]">
            <img src="https://bom.so/7aciEZ" className="rounded-[20px]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
