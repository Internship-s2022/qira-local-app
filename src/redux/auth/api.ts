import { api } from 'src/config/api';

import { User } from './types';

export const getAuthUser = () => api.get<User>('/auth/user');

export const registerUser = (user) => api.post<User>('/auth/user', user);
