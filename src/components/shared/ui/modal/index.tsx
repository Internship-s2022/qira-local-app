import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { closeModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import { Confirm } from './confirm';
import { Error } from './error';
import { Info } from './info';
import { LoginModal } from './login';
import style from './modal.module.css';
import SignUpForm from './signup';
import { UploadImage } from './upload-image/index';
import { UploadPdf } from './upload-pdf';

export const SharedModal = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const modalType = useSelector((state: RootState) => state.modal.type);
  const open = useSelector((state: RootState) => state.modal.isOpen);

  let modalComponent;
  switch (modalType) {
    case ModalTypes.UPLOAD_IMAGE:
      modalComponent = <UploadImage />;
      break;
    case ModalTypes.UPLOAD_PDF:
      modalComponent = (
        <UploadPdf
          onConfirm={() => {
            dispatch(closeModal());
          }}
        />
      );
      break;
    case ModalTypes.CONFIRM:
      modalComponent = <Confirm />;
      break;
    case ModalTypes.LOGIN:
      modalComponent = <LoginModal />;
      break;
    case ModalTypes.ERROR:
      modalComponent = <Error />;
      break;
    case ModalTypes.INFO:
      modalComponent = <Info />;
      break;
    case ModalTypes.REGISTER_FORM:
      modalComponent = <SignUpForm />;
      break;
    default:
  }

  return (
    <Modal
      className={style.modal}
      open={open}
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
