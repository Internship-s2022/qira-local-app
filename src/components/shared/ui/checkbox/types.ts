import { UseControllerProps } from 'react-hook-form';
import { CheckboxProps } from '@mui/material';

export type SharedCheckboxProps<TValuesCheckbox> = UseControllerProps<TValuesCheckbox> &
  CheckboxProps &
  CustomProps;

export interface CustomProps {
  label?: string;
}
