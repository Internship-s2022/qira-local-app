import React from 'react';
import { AddCircle } from '@mui/icons-material';
import { Button } from '@mui/material';

import styles from './image-input.module.css';
import { ImageInputProps } from './types';

export const ImageInput = (props: ImageInputProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <label htmlFor={props.optionalLabel}>{props.optionalLabel}</label>
      <Button variant="contained" color="secondary" className={styles.button}>
        <AddCircle color="info"></AddCircle>
      </Button>
    </div>
  );
};
