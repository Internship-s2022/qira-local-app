import { UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type InputProps<TValuesForm> = UseControllerProps<TValuesForm> &
  TextFieldProps &
  CustomProps;

export interface CustomProps {
  optionalLabel?: string;
  optionalTooltip?: boolean;
  tooltipText?: string;
}
