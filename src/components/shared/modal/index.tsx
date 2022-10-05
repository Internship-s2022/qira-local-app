import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import style from './modal.module.css';
import { SharedModalProps } from './types';

export const SharedModal = (props: SharedModalProps): JSX.Element => {
  return (
    <Modal className={style.modal} open={props.open} onClose={props.onClose}>
      <Box className={style.container}>{props.children}</Box>
    </Modal>
  );
};
