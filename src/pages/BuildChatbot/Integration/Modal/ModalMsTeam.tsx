import { Modal, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { ms_team_step2, ms_team_step3, ms_team_step4 } from '@/images';
import { AppDispatch, RootState } from '@/states/store';
import { useDispatch, useSelector } from 'react-redux';
import { getLinkIntegrationMSTeamTransaction } from '@/repository/buildChatBot';
import { API_STATUS } from '@/constants';
interface Props {
  open?: boolean;
  onClose: () => void;
}

export default function ModalMsTeam({ open, onClose }: Props) {
  const { t } = useTranslation();
  const { botInfos } = useSelector((state: RootState) => state.buildChatBot);
  const dispatch = useDispatch<AppDispatch>();

  const onIntegrationMSTeam = async () => {
    try {
      const { meta, payload }: any = await dispatch(
        getLinkIntegrationMSTeamTransaction({ bot_id: botInfos.id }),
      );
      if (meta.requestStatus == API_STATUS.REJECTED) {
        throw meta;
      }
      window.open(payload?.data.data, '_blank');
    } catch (error: any) {
      console.log('error', error);
    }
  };

  const onCopy = (text: any) => {
    navigator.clipboard.writeText(text);
    notification.success({
      message: `${t('copy', { ns: 'config_bot' })}`,
    });
  };
  return (
    <Modal
      closable={false}
      open={open}
      onCancel={onClose}
      footer={null}
      width={830}
      centered
      className="integration-slack-modal"
    >
      <p className="flex text-[18px] mb-0 text-[#101828] font-bold">
        {t('addMsTeam', { ns: 'config_bot' })}
      </p>
      <div className="h-[calc(100%-50px)] overflow-auto">
        <p className="text-[15px] font-bold text-[#878787]">
          {t('integrationStepMsTeam', { ns: 'config_bot' })}
        </p>
        <p className="text-[15px] ml-4 text-[#878787] gap-y-4">
          {t('step1_1AddMsTeam', { ns: 'config_bot' })}{' '}
          <strong>"{t('getLink', { ns: 'config_bot' })}"</strong>{' '}
          {t('step1_2AddMsTeam', { ns: 'config_bot' })}
        </p>
        <button
          className="font-bold mb-4 cursor-pointer ml-4 border-[1px] border-[#D0D5DD] py-2 px-[22px] rounded-[10px] h-[41px] hover:text-[#4ac1ff]"
          onClick={onIntegrationMSTeam}
        >
          {t('getLink', { ns: 'config_bot' })}
        </button>
        <p className="text-[15px] ml-4 text-[#878787]">
          {t('step2AddMsTeam', { ns: 'config_bot' })}
        </p>
        <img
          src={ms_team_step2}
          className="my-4 border-2 border-solid border-[#dfdfdf]"
        />
        <p className="text-[15px] ml-4 text-[#878787]">
          {t('step3', { ns: 'config_bot' })}
        </p>
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('step3_1AddMsTeam', { ns: 'config_bot' })}&nbsp;
        </p>
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('step3_2_1AddMsTeam', { ns: 'config_bot' })}{' '}
          <strong>"{t('send', { ns: 'config_bot' })}"</strong>{' '}
          {t('step3_2_2AddMsTeam', { ns: 'config_bot' })}&nbsp;
        </p>
        <img
          src={ms_team_step3}
          className="my-4 border-2 border-solid border-[#dfdfdf]"
        />
        <p className="text-[15px] ml-4 text-[#878787] mt-2">
          {t('step4AddMsTeam', { ns: 'config_bot' })}&nbsp;
        </p>
        <img
          src={ms_team_step4}
          className="my-4 border-2 border-solid border-[#dfdfdf]"
        />
      </div>
    </Modal>
  );
}
