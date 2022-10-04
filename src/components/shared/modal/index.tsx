import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import style from './modal.module.css';
import { SharedModalProps } from './types';

export const SharedModal = (props: SharedModalProps): JSX.Element => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box className={style.container}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.title}
        </Typography>
        <Typography id="modal-modal-description">{props.message}</Typography>
      </Box>
    </Modal>
  );
};
