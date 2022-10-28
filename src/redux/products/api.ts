import { api } from 'src/config/api';

import { Product } from './types';

export const getProducts = () => api.get<Product[]>('/public/products');
