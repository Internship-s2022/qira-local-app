import React from 'react';
import { Button } from '@mui/material';

import styles from './error.module.css';
import { ErrorProps } from './types';

export const Error = (props: ErrorProps) => {
  return (
    <div className={styles.container}>
      <h2>Notification</h2>
      <p>Email or password incorrect</p>
      <Button onClick={props.onConfirm} variant="contained">
        Aceptar
      </Button>
    </div>
  );
};
