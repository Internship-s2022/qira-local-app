import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { ModalTypes } from 'src/redux/modal/types';
import { RootState } from 'src/redux/store';

import style from './modal.module.css';
import { SharedModalProps } from './types';
import { UploadImage } from './upload-image/index';

export const SharedModal = (props: SharedModalProps): JSX.Element => {
  const modalType = useSelector((state: RootState) => state.modal.type);
  let modalComponent;
  switch (modalType) {
    case ModalTypes.UPLOAD_IMAGE:
      modalComponent = <UploadImage onConfirm={props.onClose} />;
      break;
    case ModalTypes.BASIC_MODAL:
      modalComponent = props.children;
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
