import { api } from 'src/config/api';

import { User } from './types';

export const getAuthUser = (token) => api.get<User>('/auth/user', { headers: { token: token } });
