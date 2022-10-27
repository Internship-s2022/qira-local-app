import { Currency, S3File } from 'src/types';

export interface ProductCardProps {
  product: Product;
}

export interface Product {
  _id: string;
  brand: string;
  name: string;
  description?: string;
  price: number;
  category: Category;
  image?: S3File;
  technicalFile?: S3File;
  currency: Currency;
  stock: number;
  isNew?: boolean;
  isActive: boolean;
  logicDelete: boolean;
}

export interface Category {
  name: string;
  image?: S3File;
}
