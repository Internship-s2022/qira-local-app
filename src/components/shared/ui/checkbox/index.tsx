import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Box, FormLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import styles from './checkbox.module.css';
import { SharedCheckboxProps } from './types';

export const SharedCheckbox = <TValuesCheckbox extends FieldValues>({
  control,
  name,
  label,
  className,
  ...props
}: SharedCheckboxProps<TValuesCheckbox>): JSX.Element => {
  const { field } = useController({ control, name });

  return (
    <Box>
      <FormLabel className={styles.label}>{label}</FormLabel>
      <Checkbox className={className} checked={field.value} {...field} {...props} />
    </Box>
  );
};
