import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { closeModal } from 'src/redux/modal/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './error.module.css';

export const Error = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const options = useSelector((state: RootState) => state.modal.options);

  const handleConfirm = options?.onConfirmCallback || (() => dispatch(closeModal()));

  return (
    <div className={styles.container}>
      <h2>Notification</h2>
      <p>Email or password incorrect</p>
      <Button onClick={handleConfirm} variant="contained">
        Aceptar
      </Button>
    </div>
  );
};
