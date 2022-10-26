import { api } from 'src/config/api';

import { Category } from './types';

export const getCategories = () => api.get<Category[]>('/admin/category');

export const getCategoryById = (_id) => api.get<Category>(`/admin/category/${_id}`);

export const createCategory = (category) => api.post<Category>('/admin/category', category);

export const updateCategory = (_id, category) =>
  api.patch<Category>(`/admin/category/${_id}`, category);

export const activateCategory = (_id) => api.patch<Category>(`/admin/category/activate/${_id}`);

export const inactivateCategory = (_id) => api.patch<Category>(`/admin/category/inactivate/${_id}`);

export const deleteCategory = (_id) => api.patch<Category>(`/admin/category/delete/${_id}`);
