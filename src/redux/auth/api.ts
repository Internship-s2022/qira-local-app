import { api, responseBody } from 'src/config/api';

import { User } from './types';

export const getAuthUser = () => api.get<User>('/auth').then(responseBody);
