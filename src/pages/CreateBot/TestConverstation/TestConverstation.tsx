import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconConfig,
  IconImportData,
  IconAdvance,
  IconStyle,
} from '@/components/IconGroup/IconGroup';
import ChatBot from './ChatBot';

const TestConverstation = () => {
  const { t } = useTranslation();
  const [displayName, setDisplayName] = useState('');
  const [initialMessages, setinitialMessages] = useState('');
  const [suggestMessages, setSuggestMessages] = useState('');
  const [suggestArray, setSuggestArray] = useState<any>([]);
  const [textbubble, setTextbubble] = useState('');

  useEffect(() => {
    const newArray = suggestMessages?.split('\n').filter((item) => item !== '');
    setSuggestArray(newArray);
  }, [suggestMessages]);

  return (
    <>
      <div className="flex gap-x-4">
        <div className="p-4 w-[60%] bg-[#FCFCFC] rounded-xl">
          <div className="text-[15px]">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconConfig />
              Config list
            </p>
            <div className="ml-2">
              <li>100 message / day</li>
              <li>GPT 3.5</li>
              <li>Collect name, email, phone number</li>
            </div>
          </div>
          <div className="text-[15px] mt-3">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconImportData />
              Datas
            </p>
            <div className="ml-2">
              <li>135 links</li>
              <li>20 files</li>
            </div>
          </div>
          <div className="text-[15px] mt-3">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconAdvance />
              Advanced
            </p>
            <div className="ml-2">
              <li>Advanced</li>
              <li>Advanced</li>
            </div>
          </div>
          <div className="text-[15px] mt-3">
            <p className="font-medium flex gap-x-2 items-center mb-[8px] text-[#219653]">
              <IconStyle />
              Advanced
            </p>
            <div className="ml-2">
              <li>Custom</li>
              <li>Custom</li>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <ChatBot />
        </div>
      </div>
    </>
  );
};

export default TestConverstation;
