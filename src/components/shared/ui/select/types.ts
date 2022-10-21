import { UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type SharedSelectProps<TValuesSelect> = UseControllerProps<TValuesSelect> &
  TextFieldProps &
  CustomProps;

interface CustomProps {
  options: Options[];
  optionalLabel?: string;
}
export interface Options {
  label: string;
  value: string;
}
