import { api } from 'src/config/api';

import { Product, ProductToSend } from './types';

export const getPublicProducts = () => api.get<Product[]>('/public/products');

export const getProducts = () => api.get<Product[]>('/admin/product');

export const getProductById = (id: string) => api.get<Product>(`/admin/product/${id}`);

export const createProduct = (product: ProductToSend) =>
  api.post<Product>('/admin/product', product);

export const updateProduct = (id: string, product: ProductToSend) =>
  api.patch<Product>(`/admin/product/${id}`, product);

export const activateProduct = (id: string) => api.patch<Product>(`/admin/product/activate/${id}`);

export const inactivateProduct = (id: string) =>
  api.patch<Product>(`/admin/product/inactivate/${id}`);

export const deleteProduct = (id: string) => api.patch<Product>(`/admin/product/delete/${id}`);
