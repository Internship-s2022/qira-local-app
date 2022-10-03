import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

// import styles from './inputText.module.css';
import { SharedSelectProps } from './types';

export const SharedSelect = <TValuesSelect extends FieldValues>({
  name,
  control,
  defaultValue,
  ...props
}: SharedSelectProps<TValuesSelect>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });
  return (
    <div>
      <TextField
        {...field}
        {...props}
        select
        fullWidth
        helperText={error?.message != undefined ? error.message : ' '}
        error={error?.message != undefined}
      >
        {props.options.map((op, index) => (
          <MenuItem key={index} value={op.value}>
            {op.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
