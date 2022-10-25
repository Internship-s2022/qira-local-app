import { UseControllerProps, UseFormSetValue } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

import { CategoryFormValues } from 'src/components/pages/admin/category/types';

import { CustomFile } from '../modal/types';

export type ImageInputProps<TValuesForm> = UseControllerProps<TValuesForm> &
  TextFieldProps &
  ImageInputCustomProps;

export interface ImageInputCustomProps {
  optionalLabel?: string;
  setValue: UseFormSetValue<CategoryFormValues>;
}

export interface NewFile {
  file?: CustomFile;
  url: string;
  isNew: boolean;
}
