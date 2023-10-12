import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] font-sans',
      )}
    >
      <p className="mb-2">
        <strong>{t('ContactSupport', { ns: 'common' })}</strong>{' '}
      </p>
      <p className="mb-1">{t('ContactSupportDes', { ns: 'common' })}</p>
      <p className="mb-1">{t('Phone', { ns: 'common' })}</p>
      <p className="mb-1">{t('Email', { ns: 'common' })}</p>
      <p className="mb-4">{t('Fanpage', { ns: 'common' })} https://www.facebook.com/profile.php?id=61551074514253</p>
      <p className="mb-2">
        <strong>{t('FrequentlyAskedQuestions', { ns: 'common' })}</strong>{' '}
      </p>
      <p className="mb-1">{t('RelatedQuestion', { ns: 'common' })}: <a>{t('ClickToView', { ns: 'common' })}</a></p>
    </div>
  );
};

export default Help;
