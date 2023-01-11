import { FieldValues, UseControllerProps } from 'react-hook-form';

export type DatePickerProps<Form extends FieldValues> = {
  label?: string;
  testId: string;
  className?: string;
  error?: boolean;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
} & UseControllerProps<Form>;
