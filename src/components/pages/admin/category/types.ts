import { NewFile } from 'src/components/shared/ui/image-input/types';

export interface CategoryFormValues {
  name: string;
  image: NewFile;
  url: string;
}

export interface ImageToSend {
  base64: string;
  name: string;
  type: string;
  isNew: boolean;
}
