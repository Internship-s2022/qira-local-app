import { api } from 'src/config/api';

export const getProducts = () => api.get('/public/products');
