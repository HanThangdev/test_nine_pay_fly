import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { BiDockTop } from 'react-icons/bi';
import { AiOutlineLeft, AiOutlineAppstore } from 'react-icons/ai';
import { FiPieChart } from 'react-icons/fi';
import { Image } from 'antd';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[294px] flex-col overflow-y-hidden bg-[#00024C] duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-[20px] py-[20px] !border-b-[1px] border-[#ffffff82] border-solid">
        <div className="flex items-center">
          <div className="bg-white h-[40px] w-[40px] mr-[19px] items-center justify-center rounded-[10px] flex">
            <Image
              src={'/logo.png'}
              alt="Chatfly"
              width={30}
              height={30}
              preview={false}
            />
          </div>
          <NavLink to="/">
            <p className={classNames('text-[24px] text-[#4AC1FF] font-bold')}>
              Chatfly
            </p>
          </NavLink>
        </div>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <AiOutlineLeft size={22} color="#A7A9C0" />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar w-[260px] flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-8 ">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col">
              {/* <!-- Menu Item Build Chatbot --> */}
              <li>
                <NavLink
                  to="/"
                  className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
                    pathname === '/' && 'bg-[#1AA8E9] !text-white !font-bold'
                  }`}
                >
                  <AiOutlineAppstore size={26} />
                  Build Chatbot
                </NavLink>
              </li>
              {/* <!-- Menu Item Build Chatbot --> */}

              {/* <!-- Menu Item Manage Chatbots --> */}
              <li>
                <NavLink
                  to="/manage-chatbots"
                  className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
                    pathname.includes('manage-chatbots') &&
                    'bg-[#1AA8E9] !text-white !font-bold'
                  }`}
                >
                  <FiPieChart size={24} />
                  Manage Chatbots
                </NavLink>
              </li>
              {/* <!-- Menu Item Manage Chatbots --> */}

              {/* <!-- Menu Item Conversations --> */}
              <li>
                <NavLink
                  to="/conversations"
                  className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
                    pathname.includes('Conversations') &&
                    'bg-[#1AA8E9] !text-white !font-bold'
                  }`}
                >
                  <BiDockTop size={26} />
                  Conversations
                </NavLink>
              </li>
              {/* <!-- Menu Item Conversations --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
