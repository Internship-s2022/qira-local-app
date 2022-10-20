import { UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type ImageInputProps<TValuesForm> = UseControllerProps<TValuesForm> &
  TextFieldProps &
  ImageInputCustomProps;

export interface ImageInputCustomProps {
  optionalLabel?: string;
}
