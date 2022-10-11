import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { ImageModal } from './imageModal';
import style from './modal.module.css';
import { SharedModalProps } from './types';

export const SharedModal = (props: SharedModalProps): JSX.Element => {
  let modalComponent;
  switch (props.modalType) {
    case 'IMAGE_MODAL':
      modalComponent = <ImageModal />;
      break;
    default:
      modalComponent = props.children;
  }
  return (
    <Modal className={style.modal} open={props.open} onClose={props.onClose}>
      <Box className={style.container}>{modalComponent}</Box>
    </Modal>
  );
};
