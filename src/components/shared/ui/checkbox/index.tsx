import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Box, FormLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import { SharedCheckboxProps } from './types';

export const SharedCheckbox = <TValuesCheckbox extends FieldValues>({
  control,
  name,
  label,
  ...props
}: SharedCheckboxProps<TValuesCheckbox>): JSX.Element => {
  const { field } = useController({ control, name });

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <Checkbox {...field} {...props} />
    </Box>
  );
};
