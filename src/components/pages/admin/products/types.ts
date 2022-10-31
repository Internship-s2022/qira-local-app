export interface Product {
  id: string;
  category: string;
  name: string;
  currency: string;
  price: number;
  stock: number;
  isActive: boolean;
  logicDelete: boolean;
}
