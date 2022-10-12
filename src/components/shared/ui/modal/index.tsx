import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import style from './modal.module.css';
import { modalTypes, SharedModalProps } from './types';
import { UploadImage } from './uploadImage/index';

export const SharedModal = (props: SharedModalProps): JSX.Element => {
  let modalComponent;
  switch (props.modalType) {
    case modalTypes.UPLOAD_IMAGE:
      modalComponent = <UploadImage />;
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
