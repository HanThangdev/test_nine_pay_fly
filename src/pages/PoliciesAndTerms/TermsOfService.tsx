import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
  const termsOfServiceRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (termsOfServiceRef.current) {
      termsOfServiceRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, []);
  return (
    <div
      ref={termsOfServiceRef}
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] font-sans',
      )}
    >
      <header className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-center w-full">
        <h1 className="text-4xl font-bold">
          {t('termofservice', { ns: 'term_of_service' })}
        </h1>
        <h6 className="text-sm">
          {' '}
          {t('lastUpdate', { ns: 'term_of_service' })}
        </h6>
      </header>
      <h2 className="text-xl font-bold mb-4">
        {t('Consent', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('weAreChatfly', { ns: 'term_of_service' })}</p>
      <p className="mb-4">{t('theseLegal', { ns: 'term_of_service' })}</p>
      <p className="mb-4" id="head">
        {t('Additional', { ns: 'term_of_service' })}
      </p>
      <p className="mb-4">{t('allUser', { ns: 'term_of_service' })}</p>
      <h2 className="text-xl font-bold mb-4">
        {t('index', { ns: 'term_of_service' })}
      </h2>
      <ul className="list-decimal list-inside" id="our_service">
        <li className="mb-2">
          <a href="#our_service">{t('OurSer', { ns: 'term_of_service' })}</a>
        </li>
        <li className="mb-2">
          <a href="#intellectual">
            {t('Intellectual', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#free_trial">{t('Free', { ns: 'term_of_service' })}</a>
        </li>
        <li className="mb-2">
          <a href="#user_registration">
            {t('Registration', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#use_representations">
            {t('Representations', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#purchases_payment">
            {t('Purchases', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#cancellation">
            {t('Cancellation', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#prohibited_activities">
            {t('Prohibited', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#user_generated">
            {t('Generated', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#privacy_policy">
            {t('Privacy', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#services_management">
            {t('Management', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#term_and_termination">
            {t('Termination', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#contact_us">{t('userData', { ns: 'term_of_service' })}</a>
        </li>
        <li className="mb-2">
          <a href="#contact_us">
            {t('Modifications', { ns: 'term_of_service' })}
          </a>
        </li>
        <li className="mb-2">
          <a href="#contact_us">{t('Electronic', { ns: 'term_of_service' })}</a>
        </li>
        <li className="mb-2">
          <a href="#contact_us">{t('Contact', { ns: 'term_of_service' })}</a>
        </li>
      </ul>
      <section id="our_service">
        <h2 className="text-xl font-bold mb-4" id="intellectual">
          {t('1', { ns: 'term_of_service' })}
        </h2>
        <p className="mb-4">{t('text1', { ns: 'term_of_service' })}</p>
      </section>
      <h2 className="text-xl font-bold mb-4">
        {t('2', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-2 font-bold">
        {t('intellectual', { ns: 'term_of_service' })}
      </p>
      <p className="mb-4">{t('weAre', { ns: 'term_of_service' })}</p>
      <p className="mb-2 font-bold">
        {t('Utilizing', { ns: 'term_of_service' })}
      </p>
      <p className="mb-4">{t('Subject', { ns: 'term_of_service' })}</p>
      <p className="mb-4">{t('ifYouwant', { ns: 'term_of_service' })}</p>
      <p className="mb-2 font-bold">
        {t('submissions', { ns: 'term_of_service' })}
      </p>
      <p className="mb-4">
        {t('Please', { ns: 'term_of_service' })}{' '}
        <a href="#">"{t('PROHIBITEDAct', { ns: 'term_of_service' })}"</a>{' '}
        {t('section', { ns: 'term_of_service' })}{' '}
      </p>
      <p className="mb-4">
        <strong>{t('Submissions', { ns: 'term_of_service' })}</strong>
        {t('BySending', { ns: 'term_of_service' })}
      </p>
      <p className="mb-4" id="free_trial">
        <strong>{t('Youare', { ns: 'term_of_service' })}</strong>
        {t('BySub', { ns: 'term_of_service' })}
      </p>
      <p className="mb-4">{t('extent', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="user_registration">
        {t('3', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text3', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="use_representations">
        {t('4', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text4', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="purchases_payment">
        {t('5', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('WhenUsing', { ns: 'term_of_service' })}</p>
      <p className="mb-4">{t('IfYou', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="cancellation">
        {t('6', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('weAccept', { ns: 'term_of_service' })}</p>
      <ul className="list-disc list-inside">
        <li className="mb-1">
          {t('ElectronicWallets', { ns: 'term_of_service' })}
        </li>
        <li className="mb-1">{t('ATM', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('Visa', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('Master', { ns: 'term_of_service' })}</li>
      </ul>
      <p className="mb-4">{t('provide', { ns: 'term_of_service' })}</p>
      <p className="mb-4">{t('payAll', { ns: 'term_of_service' })} </p>
      <p className="mb-4">{t('reserve', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="prohibited_activities">
        {t('7', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('purchases', { ns: 'term_of_service' })}</p>
      <p className="mb-4">{t('unsatisfied', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="user_generated">
        {t('8', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('youMay', { ns: 'term_of_service' })}</p>
      <p className="mb-4">{t('asAUser', { ns: 'term_of_service' })}</p>
      <ul className="list-disc list-inside">
        <li className="mb-1">{t('as1', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as2', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as3', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as4', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as5', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as6', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as7', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as8', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as9', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as10', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as11', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as12', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as13', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as14', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as15', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as16', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as17', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as18', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('as19', { ns: 'term_of_service' })}</li>
      </ul>

      <h2 className="text-xl font-bold mb-4" id="privacy_policy">
        {t('9', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('Services', { ns: 'term_of_service' })}</p>
      <ul className="list-disc list-inside">
        <li className="mb-1">{t('9_1', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('9_2', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('9_3', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('9_4', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('9_5', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('9_6', { ns: 'term_of_service' })}</li>
        <li className="mb-1">{t('9_7', { ns: 'term_of_service' })}</li>
      </ul>

      <h2 className="text-xl font-bold mb-4" id="services_management">
        {t('10', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text10', { ns: 'term_of_service' })} </p>

      <h2 className="text-xl font-bold mb-4" id="term_and_termination">
        {t('11', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text11', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="contact_us">
        {t('12', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text12', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="contact_us">
        {t('13', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text13', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="contact_us">
        {t('14', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text14', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4" id="contact_us">
        {t('15', { ns: 'term_of_service' })}
      </h2>
      <p className="mb-4">{t('text15', { ns: 'term_of_service' })}</p>

      <h2 className="text-xl font-bold mb-4">
        {t('16', { ns: 'term_of_service' })}S
      </h2>
      <p className="mb-4">{t('text16', { ns: 'term_of_service' })}</p>

      <footer className="bg-gray-200 p-4 text-center">
        {t('footer', { ns: 'term_of_service' })}
      </footer>
    </div>
  );
};

export default TermsOfService;
