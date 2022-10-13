import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import style from './modal.module.css';
import { ModalTypes, SharedModalProps } from './types';
import { UploadImage } from './upload-image/index';

export const SharedModal = (props: SharedModalProps): JSX.Element => {
  let modalComponent;
  switch (props.modalType) {
    case ModalTypes.UPLOAD_IMAGE:
      modalComponent = <UploadImage onConfirm={props.onClose} />;
      break;
    default:
      modalComponent = props.children;
  }
  return (
    <Modal className={style.modal} open={props.open} onClose={props.onClose}>
      <Box className={style.container}>
        <div onClick={props.onClose} className={style.closeModal}>
          x
        </div>
        {modalComponent}
      </Box>
    </Modal>
  );
};
