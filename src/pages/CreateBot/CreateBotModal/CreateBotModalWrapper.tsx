'use client';
import { ReactNode, useState } from 'react';

import CreateBotModal from './CreateBotModal';

interface Props {
  children: (_props: { onOpen: () => void }) => ReactNode;
}

export default function CreateBotModalWrapper({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  if (!children) {
    return null;
  }

  return (
    <>
      {children({ onOpen: handleOpen })}
      <CreateBotModal open={open} onClose={handleClose} />
    </>
  );
}
