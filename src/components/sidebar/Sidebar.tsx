import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { BiMessageAltDetail } from 'react-icons/bi';
import { PiListLight } from 'react-icons/pi';
import { AiOutlineAppstore, AiFillDollarCircle } from 'react-icons/ai';
import { FiPieChart } from 'react-icons/fi';
import { Image } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { resetStateBuild } from '@/states/buildChatBot/buildChatBot.slice';
import { useTranslation } from 'react-i18next';
import { logoHaveTextImg } from '@/images/logo';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch<AppDispatch>();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(true);
      localStorage.setItem('sidebar-expanded', 'true');
    } else {
      setSidebarOpen(sidebarOpen);
      localStorage.setItem('sidebar-expanded', sidebarOpen.toString());
    }
  };

  useEffect(() => {
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <aside
      ref={sidebar}
      className={classNames(
        ' flex h-screen w-[230px] flex-col left-0 top-0 z-9999 absolute xl:relative overflow-y-hidden bg-[#00024C] duration-300',
        {
          '!w-0': sidebarOpen,
        },
      )}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-[20px] py-[20px] !border-b-[1px] border-[#ffffff82] border-solid">
        <div className="flex items-center">
          <NavLink to="/">
            <Image
              src={logoHaveTextImg}
              alt="Chatfly"
              className="!h-[35px]"
              preview={false}
            />
          </NavLink>
        </div>
        <button
          ref={trigger}
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
            localStorage.setItem('sidebar-expanded', (!sidebarOpen).toString());
          }}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="mt-[-2px]"
        >
          <PiListLight size={32} color="#A7A9C0" />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar w-[220px] flex flex-col duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-8 ">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col">
              {/* <!-- Menu Item Build Chatbot --> */}
              <li>
                <NavLink
                  onClick={() => {
                    dispatch(resetStateBuild());
                  }}
                  to="/"
                  className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
                    pathname === '/' && 'bg-[#1AA8E9] !text-white !font-bold'
                  }`}
                >
                  <FiPieChart size={24} />
                  {t('Manage')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    dispatch(resetStateBuild());
                  }}
                  to="/build-chatbots"
                  className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
                    pathname.includes('build-chatbots') &&
                    'bg-[#1AA8E9] !text-white !font-bold'
                  }`}
                >
                  <AiOutlineAppstore size={26} />
                  {t('Build')}
                </NavLink>
              </li>
              {/* <!-- Menu Item Build Chatbot --> */}

              {/* <!-- Menu Item Manage Chatbots --> */}

              {/* <!-- Menu Item Manage Chatbots --> */}

              {/* <!-- Menu Item Conversations --> */}
              <li>
                <NavLink
                  to="/conversations"
                  className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
                    pathname.includes('conversations') &&
                    'bg-[#1AA8E9] !text-white !font-bold'
                  }`}
                >
                  <BiMessageAltDetail size={26} />
                  {t('Conversations')}
                </NavLink>
              </li>
              {/* <!-- Menu Item Conversations --> */}
              {/* <!-- Menu Item price --> */}
              <li>
                <NavLink
                  to="/price"
                  className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
                    pathname.includes('price') &&
                    'bg-[#1AA8E9] !text-white !font-bold'
                  }`}
                >
                  <AiFillDollarCircle size={26} />
                  {t('Pricing')}
                </NavLink>
              </li>

              {/* <!-- Menu Item price --> */}
            </ul>
          </div>
        </nav>

        {/* <!-- Sidebar Menu --> */}
      </div>
      <div className="h-full flex flex-col justify-end w-[220px]">
        <NavLink
          to="/terms"
          className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
            pathname.includes('terms') && 'bg-[#1AA8E9] !text-white !font-bold'
          }`}
        >
          {t('titleSidebar', { ns: 'term_of_service' })}
        </NavLink>
        <NavLink
          to="/policy"
          className={`h-[44px] group relative flex items-center gap-[18px] rounded-r-[5px] py-2 px-4 font-medium text-[#A7A9C0] duration-300 ease-in-out hover:bg-[#1AA8E9] hover:text-white ${
            pathname.includes('policy') && 'bg-[#1AA8E9] !text-white !font-bold'
          }`}
        >
          {t('titleSidebar', { ns: 'privacy_policy' })}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
