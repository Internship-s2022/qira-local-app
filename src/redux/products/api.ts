import { api } from 'src/config/api';

import { Product } from './types';

export const getPublicProducts = () => api.get<Product[]>('/public/products');

export const getProducts = () => api.get<Product[]>('/admin/product');

export const getProductById = (id) => api.get<Product>(`/admin/product/${id}`);

export const createProduct = (product) => api.post<Product>('/admin/product', product);

export const updateProduct = (id, product) => api.patch<Product>(`/admin/product/${id}`, product);

export const activateProduct = (id) => api.patch<Product>(`/admin/product/activate/${id}`);

export const inactivateProduct = (id) => api.patch<Product>(`/admin/product/inactivate/${id}`);

export const deleteProduct = (id) => api.patch<Product>(`/admin/product/delete/${id}`);
