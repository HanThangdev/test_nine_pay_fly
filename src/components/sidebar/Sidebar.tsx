import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { IconManage, IconManage_fillWhite } from '../IconManage/IconManage';
import { IconConv, IconConv_fillWhite } from '../IconConv/IconConv';
import { IconCreate, IconFree } from '../IconCreate/IconCreate';
import userThree from '@/images/user/user-07.png';
import { Image, Slider, Popover, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { resetStateBuild } from '@/states/buildChatBot/buildChatBot.slice';
import { useTranslation } from 'react-i18next';
import { logoHaveTextImg } from '@/images/logo';
import { CreateBotModalWrapper } from '@/pages/CreateBot/CreateBotModal';
import { IconLogout, IconPrivacy, IconTerm } from '../IconGroup/IconGroup';
import authRepository from '@/repository/auth';
import Cookies from 'universal-cookie';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const urlParams = new URLSearchParams(window.location.search);
  const getLanguageFromURL = urlParams.get('language');
  const lang = getLanguageFromURL || localStorage.getItem('LANGUAGE') || 'en';
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

  const handleLogout = async () => {
    try {
      await authRepository.logout();
      cookies.remove('access_token', { path: '/' });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.message || error?.message,
      });
    }
    navigate('/auth/signin');
  };

  return (
    <aside
      ref={sidebar}
      className={classNames(
        ' flex h-screen w-[220px] flex-col left-0 top-0 z-9 relative overflow-y-hidden bg-[#111827] duration-300',
      )}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 pt-[34px] pl-[38px] border-solid">
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
        {/* <button
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
        </button> */}
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar px-[15px] flex flex-col duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-[34px] ">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-2">
              {/* <!-- Menu Item Build Chatbot --> */}
              <li>
                <NavLink
                  onClick={() => {
                    dispatch(resetStateBuild());
                  }}
                  to="/"
                  className={`h-[44px] text-[15px] group relative flex items-center gap-[9px] rounded-[8px] py-2 px-[10px] font-medium text-white duration-300 ease-in-out hover:bg-[#374151] ${
                    (pathname === '/' || pathname.includes('edit-chatbot')) &&
                    'bg-white !font-bold !text-black'
                  }`}
                >
                  {pathname === '/' || pathname.includes('edit-chatbot') ? (
                    <IconManage />
                  ) : (
                    <IconManage_fillWhite />
                  )}

                  {t('Manage')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/conversations"
                  className={`h-[44px] text-[15px] group relative flex items-center gap-[9px] rounded-[8px] py-2 px-[10px] font-medium text-white duration-300 ease-in-out hover:bg-[#374151] ${
                    pathname.includes('conversations') &&
                    'bg-white !font-bold !text-black'
                  }`}
                >
                  {pathname.includes('conversations') ? (
                    <IconConv />
                  ) : (
                    <IconConv_fillWhite />
                  )}
                  {t('Conversations')}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Sidebar Menu --> */}
      </div>
      <div className="h-full flex flex-col justify-end w-full mb-[26px] px-[15px] sidebar-bottom">
        <CreateBotModalWrapper>
          {({ onOpen }) => (
            <div
              onClick={() => {
                onOpen();
              }}
              className="bg-[#FCFCFC] cursor-pointer rounded-xl py-3 grid gap-2 justify-center text-[#2D3FE7]"
            >
              <p className="bg-[#F1F2FE] p-2 rounded-full m-auto w-fit ">
                <IconCreate />
              </p>
              {t('New', { ns: 'manage_bot' })}
            </div>
          )}
        </CreateBotModalWrapper>
        <div
          className={classNames(
            'bg-[#FCFCFC] mt-[27px] rounded-lg py-[12px] px-[16px] gap-y-[16px] grid',
          )}
        >
          <Popover
            placement="bottom"
            content={
              <div className="w-[160px] grid">
                <div
                  onClick={() => navigate(`/terms`)}
                  className="flex gap-x-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-[#0000000a]"
                >
                  <IconTerm />
                  {t('titleSidebar', { ns: 'term_of_service' })}
                </div>
                <div
                  onClick={() => navigate(`/policy`)}
                  className="flex gap-x-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-[#0000000a]"
                >
                  <IconPrivacy />
                  {t('titleSidebar', { ns: 'privacy_policy' })}
                </div>
                <div
                  onClick={() => handleLogout()}
                  className="flex gap-x-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-[#0000000a]"
                >
                  <IconLogout />
                  {t('Logout')}
                </div>
              </div>
            }
          >
            <div className="flex gap-x-2 items-center cursor-pointer">
              <div className="h-[34px] w-[34px] rounded-full">
                <img src={userThree} alt="User" />
              </div>
              <div>
                <span className="mb-0 text-[14px]">Dinh Cong Huan</span>
                <br />
                <p className="text-[11px] items-center mb-0 mt-[-6px] flex gap-x-1 py-[2px] px-1 rounded bg-[#F9FAFB]">
                  <IconFree />
                  {t('Freeaccount')}
                </p>
              </div>
            </div>
          </Popover>

          <div>
            <div className="flex justify-between text-[13px]">
              <p className="mb-0">{t('usage')}</p>
              <p className="mb-0">20/2000 {t('requests')}</p>
            </div>
            <Slider defaultValue={30} disabled />
          </div>
          <div
            className={classNames(
              'bg-button-upgrade text-white w-full rounded py-2 flex justify-center text-[14px]',
              {
                'text-[11px]': lang === 'jp',
              },
            )}
          >
            <NavLink to="/price">{t('UpgradePro')}</NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
