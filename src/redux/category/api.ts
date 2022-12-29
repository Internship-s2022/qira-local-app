import { api } from 'src/config/api';

import { Category, CategoryToSend } from './types';

export const getCategories = () => api.get<Category[]>('/admin/category');

export const getPublicCategories = () => api.get<Category[]>('/public/categories');

export const getCategoryById = (id: string) => api.get<Category>(`/admin/category/${id}`);

export const createCategory = (category: CategoryToSend) =>
  api.post<Category>('/admin/category', category);

export const updateCategory = (id: string, category: CategoryToSend) =>
  api.patch<Category>(`/admin/category/${id}`, category);

export const activateCategory = (id: string) =>
  api.patch<Category>(`/admin/category/activate/${id}`);

export const inactivateCategory = (id: string) =>
  api.patch<Category>(`/admin/category/inactivate/${id}`);

export const deleteCategory = (id: string) => api.patch<Category>(`/admin/category/delete/${id}`);
