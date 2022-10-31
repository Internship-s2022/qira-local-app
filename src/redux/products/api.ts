import { api } from 'src/config/api';

import { Product } from './types';

export const getPublicProducts = () => api.get<Product[]>('/public/products');

export const getProducts = () => api.get<Product[]>('/admin/product');

export const getProductById = (_id) => api.get<Product>(`/admin/product/${_id}`);

export const createProduct = (product) => api.post<Product>('/admin/product', product);

export const updateProduct = (_id, product) => api.patch<Product>(`/admin/product/${_id}`, product);
