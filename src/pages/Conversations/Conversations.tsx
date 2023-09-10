import IconReload from '@/components/IconReload/IconReload';
import IconInterface from '@/components/IconInterface/IconInterface';
import IconDown from '@/components/IconDown/IconDown';
import { useTranslation } from 'react-i18next';
import { BiSolidFileExport } from 'react-icons/bi';
import { DatePicker, Select } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { isEmptyObjectOrArray } from '@/utils/utils';
import { useManageChatbot } from '@/states/manageBot/manageBot.selector';
import { ResponseManageChatbot } from '@/states/manageBot/type';
import { IOptionBotSelect } from './type';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { getBotTransaction } from '@/repository/manageChatbot';
import dayjs from 'dayjs';
import { getAllConversations } from '@/repository/conversations';
import classNames from 'classnames';
import { GetAllConversationsPayload } from '@/repository/conversations/type';

const Conversations = () => {
  const { t } = useTranslation();
  const { ownerChatbot } = useManageChatbot();
  const dispatch = useDispatch<AppDispatch>();

  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs().add(1, 'day'));
  const [botSelect, setBotSelect] = useState<IOptionBotSelect | any>();

  const valueBot = useMemo(() => {
    let convertedArray: IOptionBotSelect[] = [];
    if (!isEmptyObjectOrArray(ownerChatbot)) {
      convertedArray = ownerChatbot.map((item: ResponseManageChatbot) => {
        return {
          value: item.bot_name,
          key: item.bot_name,
          bot_id: item.id,
          user_id: item.user_id,
        };
      });
    }
    return !isEmptyObjectOrArray(convertedArray) ? convertedArray : [];
  }, [ownerChatbot]);

  const handleSelectBotChange = (value: string, option: IOptionBotSelect | any) => {
    setBotSelect(option)
  };

  useEffect(() => {
    if(!isEmptyObjectOrArray(botSelect)){
      const { bot_id, user_id } = botSelect;
      const paramsGetAllConversations: GetAllConversationsPayload = {
        bot_id,
        user_id,
        date_from: fromDate.format().toString(),
        date_to: toDate.format().toString(),
      };
      dispatch(getAllConversations(paramsGetAllConversations));
    }
  }, [fromDate, toDate, botSelect, ownerChatbot]);

  useEffect(() => {
    if (isEmptyObjectOrArray(ownerChatbot)) {
      dispatch(getBotTransaction());
    }
  }, []);

  return (
    <div
      className={classNames(
        'bg-[#FFF] rounded-[10px] p-6 mt-[6px] py-[22px] px-[29px]',
        'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] Conversations',
      )}
    >
      <div className="flex justify-between items-center">
        <Select
          showSearch
          style={{ width: 150 }}
          placeholder={`${t('SelectBot', { ns: 'conversation' })}`}
          optionFilterProp="children"
          onChange={handleSelectBotChange}
          // filterOption={(input, option) =>
          //   (option?.label ?? '').includes(input)
          // }
          // filterSort={(optionA, optionB) =>
          //   (optionA?.label ?? '')
          //     .toLowerCase()
          //     .localeCompare((optionB?.label ?? '').toLowerCase())
          // }
          options={valueBot}
        />
        <div className="flex items-center gap-x-3">
          <DatePicker
            placeholder={`${t('From', { ns: 'conversation' })}`}
            value={fromDate}
            allowClear={false}
            onChange={(value) => setFromDate(value || dayjs())}
          />
          <p className="mb-0">~</p>
          <DatePicker
            placeholder={`${t('To', { ns: 'conversation' })}`}
            value={toDate}
            allowClear={false}
            onChange={(value) => setToDate(value || dayjs().add(1, 'day'))}
          />
        </div>
      </div>
      <div className={classNames('mt-6 grid grid-cols-2 gap-x-8')}>
        <div>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={classNames(
                  'hover:bg-[#F9F9FC] hover:cursor-pointer border-[1px] border-[#DCDEED] rounded-[5px] p-4',
                )}
              >
                <div className="flex justify-between text-[15px] text-[#33343D]">
                  <p>{t('Customer', { ns: 'conversation' })}:</p>
                  <p>2 Day</p>
                </div>
                <div className="flex justify-between gap-x-4 text-[20px] text-[#33343D]">
                  <p className="mb-0 w-[85%]">
                    Chatfly platformabout 3 hours ago Initial message: How are
                    you?
                  </p>
                  <p className="flex items-end">
                    <IconDown />
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div
          className={classNames(
            'rounded-[8px] border-[10px] border-[rgb(220,222,237)] h-[654px] relative',
          )}
        >
          <div className="flex justify-between h-[45px] bg-[#FAFAFD] items-center px-[18px]">
            <p className="mb-0 flex items-center gap-x-[10px] text-[16px] text-[#01058A]">
              <IconInterface />
              Chat fly
            </p>
            <IconReload />
          </div>
          <div className="py-[37px] px-[27px] gap-y-[10px] grid">
            <div className="bg-[#F1F7FF] p-2 rounded-t-lg rounded-br-lg w-fit">
              Hello! How can I assist you today?
            </div>
            <div className="w-full justify-end flex">
              <p className="bg-[#D1EFFF] p-2 rounded-t-lg rounded-bl-lg w-fit">
                Hi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-[30px]">
        <button className="w-[150px] flex items-center gap-x-2 justify-center h-[43px] bg-[#4AC1FF] text-white rounded-[10px] text-[15px] font-bold justify-cente">
          <BiSolidFileExport size={24} />
          {t('ExportPDF', { ns: 'conversation' })}
        </button>
      </div>
    </div>
  );
};

export default Conversations;
