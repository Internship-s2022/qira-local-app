import { api } from 'src/config/api';

import { Category } from './types';

export const getCategories = () => api.get<Category[]>('/admin/category');

export const getCategoryById = (id) => api.get<Category>(`/admin/category/${id}`);

export const createCategory = (category) => api.post<Category>('/admin/category', category);

export const updateCategory = (id, category) =>
  api.patch<Category>(`/admin/category/${id}`, category);

export const activateCategory = (id) => api.patch<Category>(`/admin/category/activate/${id}`);

export const inactivateCategory = (id) => api.patch<Category>(`/admin/category/inactivate/${id}`);

export const deleteCategory = (id) => api.patch<Category>(`/admin/category/delete/${id}`);
