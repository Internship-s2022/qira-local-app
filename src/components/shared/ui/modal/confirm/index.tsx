import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { RootState } from 'src/redux/store';

import styles from './confirm.module.css';

export const Confirm = () => {
  const options = useSelector((state: RootState) => state.modal.options);

  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>{options.message}</div>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          component="label"
          color="error"
          size="medium"
          className={styles.buttonCancel}
          onClick={options.onCloseCallback}
        >
          Cancelar
        </Button>
        <Button
          onClick={options.onConfirmCallback}
          size="medium"
          variant="contained"
          className={styles.buttonAccept}
          component="label"
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
};
