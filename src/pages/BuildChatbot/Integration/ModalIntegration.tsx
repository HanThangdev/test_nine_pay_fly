import Code from '@/components/code';
import { useBuildChatbot } from '@/states/buildChatBot/buildChatBot.selector';
import { Modal } from 'antd';
import classNames from 'classnames';
import Cookies from 'universal-cookie';
interface Props {
  open?: boolean;
  onClose: () => void;
}

export default function ModalIntegration({ open, onClose }: Props) {

  const { data, session_id } = useBuildChatbot()
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  const codeString = `
    <script src="${window.location.origin}/Chat.js"></script>
    <script>
      window.chatbotConfig = {
        bot_id: "${data?.id}",
        session_id: "${session_id}",
        user_id: "${data?.user_id}",
        token: "${token}",
      };
    </script>
  `;
  return (
    <Modal
      closable={false}
      open={open}
      onCancel={onClose}
      footer={null}
      width={768}
      centered
      className="integration-modal"
    >
      <p className="flex text-[20px] text-[#01058A] font-black">
        Embed on site
      </p>
      <p className="text-[15px] text-[#878787]">
        To add the chatbot any where on your website, add this iframe to your
        html code
      </p>
      <div
        className={classNames(
          'w-full bg-[#dfeafb] rounded-[5px] py-[20px] px-[30px]',
        )}
      >
        <div
          className={classNames('w-full bg-[#f1f5f9] rounded-[5px] px-4 py-2')}
        >
          <p>
            &lt;iframe <br />
            src="/default.asp" <br />
            width="100%" <br />
            height="300" <br />
            style="border:1px solid black;" <br />
            &gt;&lt;/iframe&gt;
          </p>
        </div>
      </div>
      <p className="text-[15px] text-[#878787] mt-6">
        To add a chat bubble to the bottom right of your website add this script
        tag to your html
      </p>
      <div
        className={classNames(
          'w-full bg-[#dfeafb] rounded-[5px] py-[20px] px-[30px]',
        )}
      >
        <div
          className={classNames('w-full bg-[#f1f5f9] rounded-[5px] px-4 py-2')}
        >
          <Code language='html'
          >
            {codeString}
          </Code>
        </div>
      </div>
    </Modal>
  );
}
