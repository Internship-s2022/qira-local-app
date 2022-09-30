import { UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type InputProps<TValuesForm> = UseControllerProps<TValuesForm> & TextFieldProps;
