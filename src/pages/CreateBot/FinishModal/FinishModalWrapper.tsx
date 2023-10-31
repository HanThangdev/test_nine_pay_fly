'use client';
import { ReactNode, useState } from 'react';

import FinishModal from './FinishModal';

interface Props {
  children: (_props: { onOpen: () => void }) => ReactNode;
}

export default function FinishModalWrapper({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  if (!children) {
    return null;
  }

  return (
    <>
      {children({ onOpen: handleOpen })}
      <FinishModal open={open} onClose={handleClose} />
    </>
  );
}
