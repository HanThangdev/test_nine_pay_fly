import { Dropdown, MenuProps } from 'antd';
import { ReactNode, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import enFlag from '@/images/lang/en.png';
import jpFlag from '@/images/lang/ja.png';
import vnFlag from '@/images/lang/vn.png';
import IconLanguage from '../IconLanguage/IconLanguage';
import { IconTerm, IconPrivacy, IconLogout } from '../IconGroup/IconGroup';
import { useNavigate } from 'react-router-dom';
import { STORAGE, getLocalStorage, setLocalStorage } from '@/utils/storage';

const urlParams = new URLSearchParams(window.location.search);
const getLanguageFromURL = urlParams.get('language');

const Header = (props: {
  sidebarOpen?: string | boolean | undefined;
  setSidebarOpen?: (arg0: boolean) => void;
  onLogout?: () => void;
  children?: ReactNode;
}) => {
  const getCurrentCountry = async () => {
    let currentLang = getLocalStorage(STORAGE.LANGUAGE);

    if (!currentLang) {
      try {
        const response = await fetch('http://ip-api.com/json');
        const data = await response.json();

        // Assuming you want to set 'JP' if the country is Japan and 'en' for other countries
        currentLang = data.country === 'JP' ? 'jp' : 'en';

        // Optionally, you can save 'currentLang' to local storage here
        setLocalStorage(STORAGE.LANGUAGE, currentLang);
        setActive(currentLang);
        i18n.changeLanguage(currentLang);
      } catch (error) {
        // Handle any errors, and set a default value ('en' in this case)
        setActive('en');
        i18n.changeLanguage('en');
        currentLang = 'en';
      }
    }
    return currentLang;
  };
  const { t, i18n } = useTranslation();
  const lang = getLanguageFromURL || localStorage.getItem('LANGUAGE') || 'en';
  const navigate = useNavigate();
  const [active, setActive] = useState(lang);

  const onChangeLanguage = (lang: string) => {
    if (lang === active) return;
    i18n.changeLanguage(lang);
    localStorage.setItem('LANGUAGE', lang);
    setActive(lang);
  };
  const items: MenuProps['items'] = [
    {
      label: <div>Japanese</div>,
      key: '1',
      icon: <img src={jpFlag} alt="ja" width={20} height={20} />,
      onClick: () => onChangeLanguage('jp'),
    },
    {
      label: <div>English</div>,
      key: '2',
      icon: <img src={enFlag} alt="en" width={20} height={20} />,
      onClick: () => onChangeLanguage('en'),
    },
    {
      label: <div>VietNamese</div>,
      key: '3',
      icon: <img src={vnFlag} alt="vi" width={20} height={20} />,
      onClick: () => onChangeLanguage('vi'),
    },
  ];

  const itemsBase: MenuProps['items'] = [
    {
      label: (
        <div className="ml-2">
          {t('titleSidebar', { ns: 'term_of_service' })}
        </div>
      ),
      key: '1',
      icon: <IconTerm />,
      onClick: () => navigate(`/terms`),
    },
    {
      label: (
        <div className="ml-2">
          {' '}
          {t('titleSidebar', { ns: 'privacy_policy' })}
        </div>
      ),
      key: '2',
      icon: <IconPrivacy />,
      onClick: () => navigate(`/policy`),
    },
    {
      label: <div className="ml-2">{t('Logout')}</div>,
      key: '3',
      icon: <IconLogout />,
      onClick: props.onLogout,
    },
  ];

  useEffect(() => {
    getCurrentCountry();
  }, []);

  return (
    <header className="sticky bg-[#FCFCFC] top-0 z-999 flex w-full  dark:bg-boxdark dark:drop-shadow-none">
      <div className="w-full py-[16px] border-b-[1px] px-[20px] border-[#E7E8F2]">
        <div className="flex justify-between gap-x-3 items-center">
          {props.children}
          <div className="flex gap-x-3">
            <p
              onClick={() => navigate(`/help`)}
              className="flex mb-0 items-center cursor-pointer py-2 px-3 border-[1px] rounded-lg border-[#D1D5DB] bg-[#fff] shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M14.5537 21.5V20.1725C14.5537 19.8254 14.8253 19.5388 15.172 19.5203L17.7769 19.3982C18.3015 19.3701 18.7394 18.9881 18.8384 18.4722L18.958 16.1444C19.1764 15.0069 20.9976 15.6918 20.7971 14.4213C20.5216 13.2939 19.7065 12.177 19.5038 11.1307C19.0544 8.81119 19.3407 5.98843 16.9826 3.99959C15.5415 2.78417 13.7914 2.46236 11.9478 2.50339C8.87253 2.57173 5.99649 3.87741 4.7119 6.83871C3.45797 9.72798 4.71161 12.1275 5.79207 14.7298C6.62054 16.7251 6.11413 21.5 6.11413 21.5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M11.8013 14.4551V14.4619"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8004 12.411C11.7904 11.6645 12.47 11.3477 12.975 11.0591C13.5912 10.7197 14.0084 10.1795 14.0084 9.42929C14.0084 8.31804 13.1098 7.42578 12.0058 7.42578C10.8946 7.42578 10.0032 8.31804 10.0032 9.42929"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="block text-sm ml-[4px] font-medium text-black dark:text-white">
                {t('Help')}
              </span>
            </p>
            <Dropdown menu={{ items }} trigger={['click']}>
              <p className="flex mb-0 items-center cursor-pointer py-2 px-3 border-[1px] rounded-lg border-[#d0d5dd] bg-[#fff] shadow-sm">
                <IconLanguage />
                <span className="block text-sm mx-[4px] font-medium text-black dark:text-white">
                  {t('language')}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M8.15175 12.4731C8.10825 12.4307 7.92225 12.2707 7.76925 12.1217C6.807 11.2478 5.232 8.96822 4.75125 7.77509C4.674 7.59389 4.5105 7.13578 4.5 6.89101C4.5 6.65648 4.554 6.4329 4.6635 6.21956C4.8165 5.9536 5.05725 5.74026 5.3415 5.62336C5.53875 5.5481 6.129 5.4312 6.1395 5.4312C6.78525 5.3143 7.8345 5.25 8.994 5.25C10.0988 5.25 11.1052 5.3143 11.7607 5.41001C11.7712 5.42097 12.5048 5.53787 12.756 5.66573C13.215 5.90027 13.5 6.35838 13.5 6.84864V6.89101C13.4888 7.2103 13.2037 7.88176 13.1932 7.88176C12.7118 9.01059 11.214 11.2376 10.2188 12.1326C10.2188 12.1326 9.963 12.3847 9.80325 12.4943C9.57375 12.6652 9.2895 12.75 9.00525 12.75C8.688 12.75 8.3925 12.6543 8.15175 12.4731Z"
                    fill="#6B7280"
                  />
                </svg>
              </p>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
