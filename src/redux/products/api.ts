import { api } from 'src/config/api';

import { Product } from './types';

export const getPublicProducts = () => api.get<Product[]>('/public/products');
