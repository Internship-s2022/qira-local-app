import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TextField } from '@mui/material';

import styles from './input.module.css';
import { InputProps } from './types';
export const InputText = <TValuesForm extends FieldValues>({
  name,
  control,
  defaultValue,
  optionalLabel,
  ...props
}: InputProps<TValuesForm>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });
  return (
    <div>
      <div>
        <label htmlFor={optionalLabel}>{optionalLabel}</label>
      </div>
      <div>
        <TextField
          {...field}
          {...props}
          helperText={error?.message != undefined ? error.message : ' '}
          error={error?.message != undefined}
        />
      </div>
    </div>
  );
};
