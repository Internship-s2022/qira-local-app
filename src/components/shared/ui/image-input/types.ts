import { UseControllerProps, UseFormSetValue } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

import { CustomFile } from '../modal/types';

export type ImageInputProps<TValuesForm> = UseControllerProps<TValuesForm> &
  TextFieldProps &
  ImageInputCustomProps;

export interface ImageInputCustomProps {
  label?: string;
  setValue: UseFormSetValue<any>;
}

export interface NewImageFile {
  file?: CustomFile;
  url: string;
  isNew: boolean;
}
