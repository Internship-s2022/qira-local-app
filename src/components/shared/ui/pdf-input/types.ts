import { UseControllerProps, UseFormSetValue } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

import { CustomFile } from '../modal/types';

export type PdfInputProps<TValuesForm> = UseControllerProps<TValuesForm> &
  TextFieldProps &
  PdfInputCustomProps;

export interface PdfInputCustomProps {
  label?: string;
  setValue: UseFormSetValue<any>;
}

export interface NewPdfFile {
  file?: CustomFile;
  name?: string;
  isNew: boolean;
}
