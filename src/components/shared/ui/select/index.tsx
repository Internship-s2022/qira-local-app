import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import styles from './select.module.css';
import { SharedSelectProps } from './types';

export const SharedSelect = <TValuesSelect extends FieldValues>({
  name,
  control,
  defaultValue,
  optionalLabel,
  className,
  ...props
}: SharedSelectProps<TValuesSelect>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });
  return (
    <div className={className}>
      <div className={styles.label}>
        <label htmlFor={optionalLabel}>{optionalLabel}</label>
      </div>
      <TextField
        {...field}
        {...props}
        select
        fullWidth
        helperText={error?.message != undefined ? error.message : ' '}
        error={error?.message != undefined}
      >
        {props.options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
