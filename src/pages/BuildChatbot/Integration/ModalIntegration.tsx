import { Modal } from 'antd';
import classNames from 'classnames';

interface Props {
  open?: boolean;
  onClose: () => void;
}

export default function ModalIntegration({ open, onClose }: Props) {
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
        tag toyour html
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
            &lt;script&gt;
            <br />
            src="/default.asp" <br />
            id="100%" <br />
            type="text/javascript" <br />
            document.write("Welcome to Chatfly");
            <br />
            &lt;/script&gt;
          </p>
        </div>
      </div>
    </Modal>
  );
}
