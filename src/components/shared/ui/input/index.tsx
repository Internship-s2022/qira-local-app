import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { HelpOutline } from '@mui/icons-material';
import { TextField, Tooltip } from '@mui/material';

import styles from './input.module.css';
import { InputProps } from './types';

export const InputText = <TValuesForm extends FieldValues>({
  name,
  control,
  defaultValue,
  optionalLabel,
  className,
  tooltipText,
  ...props
}: InputProps<TValuesForm>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue });
  return (
    <div className={className}>
      <div className={styles.labelContainer}>
        <label htmlFor={optionalLabel} data-testid={`${name}-label`}>
          {optionalLabel}
        </label>
        {tooltipText && (
          <Tooltip title={tooltipText} placement="right" arrow>
            <HelpOutline color="primary" />
          </Tooltip>
        )}
      </div>
      <div>
        <TextField
          {...field}
          {...props}
          fullWidth
          helperText={error?.message != undefined ? error.message : ' '}
          error={error?.message != undefined}
          data-testid={`${name}-field`}
        />
      </div>
    </div>
  );
};
