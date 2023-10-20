import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Header from '@/components/header';

const Help = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header
        children={
          <>
            <div className="flex justify-between items-center gap-x-3">
              <p className="mb-0 text-[#1F2937] text-[24px] font-medium">
                {t('Help')}
              </p>
            </div>
          </>
        }
      />
      <div
        className={classNames(
          'bg-[#fcfcfc] rounded-[10px] my-[20px] mx-[25px] p-[12px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Conversations',
        )}
      >
        <p className="mb-2">
          <strong>{t('ContactSupport', { ns: 'common' })}</strong>{' '}
        </p>
        <p className="mb-1">{t('ContactSupportDes', { ns: 'common' })}</p>
        <p className="mb-1">
          <strong>{t('Phone', { ns: 'common' })}</strong> 0337 788 044
        </p>
        <p className="mb-1">
          <strong>{t('Email', { ns: 'common' })}</strong> namtp.it@gmail.com
        </p>
        <p className="mb-1">
          <strong>{t('slackChanel', { ns: 'common' })}</strong>{' '}
          <a
            href="https://app.slack.com/client/T060H07MEAU/C05VADMD4JY"
            className="cursor-pointer hover:text-[#3291cb]"
            target="_blank"
          >
            https://app.slack.com/client/T060H07MEAU/C05VADMD4JY
          </a>
        </p>
        <p className="mb-4">
          <strong>{t('Fanpage', { ns: 'common' })}</strong>{' '}
          <a
            className="cursor-pointer hover:text-[#3291cb]"
            href="https://www.facebook.com/profile.php?id=61551074514253"
            target="_blank"
          >
            https://www.facebook.com/profile.php?id=61551074514253
          </a>
        </p>
        <p className="mb-2">
          <strong>{t('FrequentlyAskedQuestions', { ns: 'common' })}</strong>{' '}
        </p>
        <p className="mb-1">
          {t('RelatedQuestion', { ns: 'common' })}:{' '}
          <a
            className="cursor-pointer hover:text-[#3291cb]"
            href="https://chatfly.co#FAQs"
            target="_blank"
          >
            <strong>{t('ClickToView', { ns: 'common' })}</strong>
          </a>
        </p>
      </div>
    </>
  );
};

export default Help;
