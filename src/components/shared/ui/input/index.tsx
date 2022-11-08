import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from './types';

export const InputText = <TValuesForm extends FieldValues>({
  name,
  control,
  defaultValue,
  optionalLabel,
  className,
  ...props
}: InputProps<TValuesForm>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });
  return (
    <div className={className}>
      <div>
        <label htmlFor={optionalLabel}>{optionalLabel}</label>
      </div>
      <div>
        <TextField
          {...field}
          {...props}
          fullWidth
          helperText={error?.message != undefined ? error.message : ' '}
          error={error?.message != undefined}
        />
      </div>
    </div>
  );
};
