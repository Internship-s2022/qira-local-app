import { api } from 'src/config/api';

import { Category } from './types';

export const getCategories = () => api.get<Category[]>('/admin/category');

export const activateCategory = (_id) => api.patch<Category>(`/admin/category/activate/${_id}`);

export const inactivateCategory = (_id) => api.patch<Category>(`/admin/category/inactivate/${_id}`);

export const deleteCategory = (_id) => api.patch<Category>(`/admin/category/delete/${_id}`);
