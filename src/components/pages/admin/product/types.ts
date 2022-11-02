import { NewImageFile } from 'src/components/shared/ui/image-input/types';
import { NewPdfFile } from 'src/components/shared/ui/pdf-input/types';

export interface ProductFormValues {
  name: string;
  description?: string;
  price: number;
  image: NewImageFile;
  technicalFile?: NewPdfFile;
  brand: string;
  category: string;
  currency: string;
  stock: number;
  isNew?: boolean;
}
