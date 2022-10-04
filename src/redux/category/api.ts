import { api, responseBody } from 'src/config/api';

import { Category } from './types';

export const getCategories = () => api.get<Category[]>('/category').then(responseBody);
