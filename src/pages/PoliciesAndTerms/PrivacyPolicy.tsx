import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const privacyPolicyRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (privacyPolicyRef.current) {
      privacyPolicyRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);
  return (
    <div
      ref={privacyPolicyRef}
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] font-sans',
      )}
    >
      <header className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-center w-full">
        <h1 className="text-4xl font-bold">
          {t('privacy', { ns: 'privacy_policy' })}
        </h1>
        <h6 className="text-sm">
          {' '}
          {t('lastUpdate', { ns: 'privacy_policy' })}
        </h6>
      </header>
      <p className="mb-4">{t('privacyNotice', { ns: 'privacy_policy' })}</p>
      <ul className="list-disc list-inside">
        <li className="mb-1">{t('Visit', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('Engage', { ns: 'privacy_policy' })}</li>
      </ul>
      <p className="mb-4">
        {t('QuestionsOrConcerns1', { ns: 'privacy_policy' })}
      </p>
      <h2 className="text-xl font-bold mb-2">
        {t('summary.title', { ns: 'privacy_policy' })}
      </h2>
      <p className="mb-4 italic">
        {t('summary.QuestionsOrConcerns2', { ns: 'privacy_policy' })}
      </p>

      <p className="mb-4">
        <strong>{t('summary.question1', { ns: 'privacy_policy' })}</strong>{' '}
        <p>{t('summary.answer1', { ns: 'privacy_policy' })}</p>
      </p>
      <p className="mb-4">
        <strong>{t('summary.question2', { ns: 'privacy_policy' })}</strong>
        <p>{t('summary.answer2', { ns: 'privacy_policy' })}</p>
      </p>
      <p className="mb-4">
        <strong>{t('summary.question3', { ns: 'privacy_policy' })}</strong>
        <p> {t('summary.answer3', { ns: 'privacy_policy' })}</p>
      </p>
      <p className="mb-4">
        <strong>{t('summary.question4', { ns: 'privacy_policy' })}</strong>{' '}
        <p>{t('summary.answer4', { ns: 'privacy_policy' })}</p>
      </p>
      <p className="mb-4">
        <strong>{t('summary.question5', { ns: 'privacy_policy' })} </strong>
        <p> {t('summary.answer5', { ns: 'privacy_policy' })}</p>
      </p>
      <p className="mb-4">
        <strong>{t('summary.question6', { ns: 'privacy_policy' })}</strong>{' '}
        <p>{t('summary.answer6', { ns: 'privacy_policy' })}</p>
      </p>

      <h2 className="text-xl font-bold mb-2">
        {t('key.title', { ns: 'privacy_policy' })}
      </h2>
      <p className="mb-4 font-bold text-lg uppercase">
        {t('key.1', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.API', { ns: 'privacy_policy' })}</strong>
        {t('key.meansApi', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.Cookies', { ns: 'privacy_policy' })}</strong>
        {t('key.smallFiles', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.Device', { ns: 'privacy_policy' })}</strong>
        {t('key.meansDevice', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.dataPro', { ns: 'privacy_policy' })}</strong>
        {t('key.meansDatapro', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.dataSub', { ns: 'privacy_policy' })}</strong>
        {t('key.meansDataSub', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.personal', { ns: 'privacy_policy' })}</strong>
        {t('key.meansPer', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.Service', { ns: 'privacy_policy' })}</strong>
        {t('key.meansSer', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.Usage', { ns: 'privacy_policy' })}</strong>
        {t('key.meansUsage', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.User', { ns: 'privacy_policy' })}</strong>
        {t('key.meansUser', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.Website', { ns: 'privacy_policy' })}</strong>
        {t('key.meansWeb', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.Widget', { ns: 'privacy_policy' })}</strong>
        {t('key.meansWidget', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        <strong>{t('key.Controller', { ns: 'privacy_policy' })}</strong>
        {t('key.meansControl', { ns: 'privacy_policy' })}
      </p>

      <p className="mb-4 text-lg uppercase">
        <strong>{t('key.2', { ns: 'privacy_policy' })}</strong>
      </p>
      <p className="mb-4">{t('key.inforCollect', { ns: 'privacy_policy' })}</p>

      <p className="mb-4 font-bold text-lg uppercase">
        {t('key.3', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-4">{t('key.theControl', { ns: 'privacy_policy' })}</p>

      <p className="mb-4 font-bold text-lg uppercase">
        {t('key.4', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2 font-bold">
        {t('key.personal4', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-4">{t('key.whiteUse', { ns: 'privacy_policy' })}</p>
      <ul className="list-none">
        <li className="mb-1">{t('key.4a', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.4b', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.4c', { ns: 'privacy_policy' })}</li>
      </ul>
      <p className="mb-2 font-bold">
        {t('key.Usage', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-4">{t('key.weWay', { ns: 'privacy_policy' })}</p>

      <p className="mb-2 font-bold">
        {t('key.Tracking', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-4">{t('key.weUse', { ns: 'privacy_policy' })}</p>
      <ul className="list-none">
        <li className="mb-1">
          {t('key.tracking_a', { ns: 'privacy_policy' })}
        </li>
        <li className="mb-1">
          {t('key.tracking_b', { ns: 'privacy_policy' })}
        </li>
        <li className="mb-1">
          {t('key.tracking_c', { ns: 'privacy_policy' })}
        </li>
        <li className="mb-1">
          {t('key.tracking_d', { ns: 'privacy_policy' })}
        </li>
      </ul>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.5', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-4">{t('key.weWill', { ns: 'privacy_policy' })}</p>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.6', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-4">{t('key.disclose', { ns: 'privacy_policy' })}</p>
      <ul className="list-none">
        <li className="mb-1">{t('key.6a', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.6b', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.6c', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.6d', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.6e', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.6f', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.6g', { ns: 'privacy_policy' })}</li>
      </ul>
      <p className="mb-4">{t('key.weDoNot', { ns: 'privacy_policy' })}</p>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.7', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-4">
        {t('key.securityofdata', { ns: 'privacy_policy' })}
      </p>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.8', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">{t('key.useofdata', { ns: 'privacy_policy' })}</p>
      <ul className="list-none">
        <li className="mb-1">{t('key.8a', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8b', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8c', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8d', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8e', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8f', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8g', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8h', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8i', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8j', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8k', { ns: 'privacy_policy' })}</li>
        <li className="mb-1">{t('key.8l', { ns: 'privacy_policy' })}</li>
      </ul>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.9', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">{t('key.weMay', { ns: 'privacy_policy' })}</p>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.10', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">{t('key.ourServiceMay', { ns: 'privacy_policy' })}</p>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.11', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">
        {t('key.ourServiceDoes', { ns: 'privacy_policy' })}
      </p>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.12', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">{t('key.weMayUpdate', { ns: 'privacy_policy' })}</p>

      <p className="mb-2 font-bold text-lg uppercase">
        {t('key.13', { ns: 'privacy_policy' })}
      </p>
      <p className="mb-2">{t('key.ifYou', { ns: 'privacy_policy' })}</p>

      <footer className="bg-gray-200 p-4 text-center">
        {t('key.footer', { ns: 'privacy_policy' })}
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
