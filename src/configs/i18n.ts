import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocalStorage, STORAGE } from '@/utils/storage';
import { en, jp, vi } from '@/i18n';

const resources = {
	vi,
	en,
	jp,
};

const INIT_LANGUAGE = getLocalStorage(STORAGE.LANGUAGE) || 'en';

i18next.use(initReactI18next).init({
	resources,
	ns: ['config_bot', 'conversation', 'pricing_plan', 'manage_bot'],
	defaultNS: 'common',
	backend: {
		loadPath: './{{lng}}.json',
	},
	react: {
		useSuspense: true,
	},
	lng: INIT_LANGUAGE,
	fallbackLng: INIT_LANGUAGE,
	preload: [INIT_LANGUAGE],
	// keySeparator: false,
	interpolation: { escapeValue: false },
});

i18next.off('languageChanged');
i18next.on('languageChanged', (language) => {
	window.localStorage.setItem('LANGUAGE', language);
});

export default i18next;