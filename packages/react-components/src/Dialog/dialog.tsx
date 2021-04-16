import React from 'react';
import { Modal } from '../Modal';
import { Box } from '../Box';
import { Fade } from '../Fade';

type BaseProps = {
  /**
   * If `true`, the Dialog is open.
   */
  open: boolean;
  /**
   * Dialog children, usually the included sub-components.
   */
  children?: React.ReactNode;
};

export const Dialog: React.FC<BaseProps> = (props) => {
  const { open, children } = props;

  if (!open) {
    return null;
  }

  return (
    <Modal open={open}>
      <Fade in={open}>
        <Box
          role="dialog"
          background="white"
          borderRadius={4}
          tabIndex={-1}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {};
