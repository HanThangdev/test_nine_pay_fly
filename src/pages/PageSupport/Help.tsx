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
      <p className="mb-1"><strong>{t('Phone', { ns: 'common' })}</strong> 0337 788 044</p>
      <p className="mb-1"><strong>{t('Email', { ns: 'common' })}</strong> namtp.it@gmail.com</p>
      <p className="mb-1"><strong>{t('slackChanel', { ns: 'common' })}</strong> <a href='https://app.slack.com/client/T060H07MEAU/C05VADMD4JY' className='cursor-pointer hover:text-[#3291cb]' target='_blank'>https://app.slack.com/client/T060H07MEAU/C05VADMD4JY</a></p>
      <p className="mb-4"><strong>{t('Fanpage', { ns: 'common' })}</strong> <a className='cursor-pointer hover:text-[#3291cb]' href='https://www.facebook.com/profile.php?id=61551074514253' target='_blank'>https://www.facebook.com/profile.php?id=61551074514253</a></p>
      <p className="mb-2">
        <strong>{t('FrequentlyAskedQuestions', { ns: 'common' })}</strong>{' '}
      </p>
      <p className="mb-1">{t('RelatedQuestion', { ns: 'common' })}: <a className='cursor-pointer hover:text-[#3291cb]' href='https://chatfly.co#FAQs' target='_blank'><strong>{t('ClickToView', { ns: 'common' })}</strong></a></p>
    </div>
  );
};

export default Help;
