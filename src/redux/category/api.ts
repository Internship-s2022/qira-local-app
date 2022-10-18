import { api } from 'src/config/api';

import { Category } from './types';

export const getCategories = () => api.get<Category[]>('/admin/category');

export const activateCategory = (_id) => api.get<Category>(`/admin/category/${_id}`);

export const inactivateCategory = (_id) => api.get<Category>(`/admin/category/${_id}`);
