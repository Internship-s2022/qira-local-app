import { NewFile } from 'src/components/shared/ui/image-input/types';

export interface CategoryFormValues {
  name: string;
  image: NewFile;
}

export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
