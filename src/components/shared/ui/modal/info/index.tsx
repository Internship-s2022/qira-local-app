import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { closeModal } from 'src/redux/modal/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './info.module.css';

export const Info = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const options = useSelector((state: RootState) => state.modal.options);

  const handleConfirm = options?.onCloseCallback || (() => dispatch(closeModal()));

  return (
    <div className={styles.container} data-testid="info-modal">
      <p data-testid="info-message">{options?.message}</p>
      <div className={styles.button}>
        <Button
          onClick={handleConfirm}
          variant="contained"
          className={styles.button}
          color="primary"
          data-testid="info-modal-btn"
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
};
