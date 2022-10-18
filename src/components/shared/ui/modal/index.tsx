import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { closeModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import style from './modal.module.css';
import { UploadImage } from './upload-image/index';

export const SharedModal = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const modalType = useSelector((state: RootState) => state.modal.type);
  const modal = useSelector((state: RootState) => state.modal.isOpen);

  let modalComponent;
  switch (modalType) {
    case ModalTypes.UPLOAD_IMAGE:
      modalComponent = (
        <UploadImage
          onConfirm={() => {
            dispatch(closeModal());
          }}
        />
      );
      break;
    default:
  }

  return (
    <Modal
      className={style.modal}
      open={modal}
      onClose={() => {
        dispatch(closeModal());
      }}
    >
      <Box className={style.container}>
        <div
          onClick={() => {
            dispatch(closeModal());
          }}
          className={style.closeModal}
        >
          x
        </div>
        {modalComponent}
      </Box>
    </Modal>
  );
};
