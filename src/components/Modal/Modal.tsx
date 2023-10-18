import { Modal } from 'antd';
import { Children, ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  setOpen?: () => void;
  footer?: ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  title?: ReactNode;
  centered?: boolean;
  children?: ReactNode;
  width?: number;
}

export default function ModalComponent({
  open,
  onCancel,
  onOk,
  footer,
  cancelText,
  okText,
  title,
  centered,
  children,
  width,
}: ModalProps) {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      footer={footer}
      okText={okText}
      cancelText={cancelText}
      title={title}
      centered={centered}
      width={width}
    >
      {children}
    </Modal>
  );
}
