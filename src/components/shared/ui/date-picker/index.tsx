import { isWeekend } from 'date-fns';
import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { DatePickerProps } from './types';

const DatePickerInput = <TValuesForm extends FieldValues>({
  name,
  control,
  defaultValue,
  ...props
}: DatePickerProps<TValuesForm>): JSX.Element => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control, defaultValue });

  const { label, testId, className, disabled, minDate, maxDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        onChange={onChange}
        value={value}
        label={label}
        className={className}
        shouldDisableDate={isWeekend}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            data-testid={testId}
            onBlur={onBlur}
            error={error?.message != undefined}
            helperText={error?.message != undefined ? error.message : ' '}
            disabled={disabled}
          />
        )}
        inputFormat={'dd/MM/yyyy'}
      />
    </LocalizationProvider>
  );
};

export default DatePickerInput;
