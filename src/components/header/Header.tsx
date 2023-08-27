import { Link } from 'react-router-dom';
import { Image } from 'antd';
import DropdownNotification from '../dropdownNotification';
import DropdownUser from '../dropdownUser';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { PiListLight } from 'react-icons/pi';
import classNames from 'classnames';
import { MdLanguage } from 'react-icons/md';

import UserOne from '@/images/user/user-07.png';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  onLogout: () => void;
}) => {
  return (
    <header className="sticky bg-[#fafafd] top-0 z-999 flex w-full  dark:bg-boxdark dark:drop-shadow-none">
      <div className="w-full pt-4 pb-2 border-b-[1px] mx-[38px] border-[#E7E8F2]">
        <div
          className={classNames('flex flex-grow items-center justify-end', {
            '!justify-between': props.sidebarOpen,
          })}
        >
          <div
            className={classNames('items-center gap-2 sm:gap-4 hidden', {
              '!flex': props.sidebarOpen,
            })}
          >
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark "
            >
              <PiListLight size={24} />
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}

            <Link className="flex items-center flex-shrink-0" to="/">
              <Image
                src={'/logo.png'}
                alt="Chatfly"
                width={30}
                height={30}
                preview={false}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block">
              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Type to search..."
                    className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
                  />
                  <button className="mr-[18px]">
                    <svg
                      className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center gap-3 2xsm:gap-4">
              <ul className="flex items-center mb-0">
                {/* <!-- Notification Menu Area --> */}
                <DropdownNotification />
                {/* <!-- Notification Menu Area --> */}
              </ul>
              <MdLanguage size={24} />

              <span className="h-[43px] w-[43px] rounded-full">
                <img src={UserOne} alt="User" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[18px] mb-0 font-extrabold bg-[#E8E9F4] text-[#01058A] py-2 px-[22px] rounded-[10px]">
            UPGRADE
          </p>
          <div className="flex gap-x-[40px]">
            <p className="flex mb-0">
              <AiFillQuestionCircle size={20} color="black" />
              <span className="block text-sm ml-[15px] font-medium text-black dark:text-white">
                Help
              </span>
            </p>
            {/* <!-- User Area --> */}
            <DropdownUser onLogout={props.onLogout} />
            {/* <!-- User Area --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
