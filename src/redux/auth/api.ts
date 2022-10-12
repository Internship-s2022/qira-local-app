import { api, responseBody } from 'src/config/api';

import { User } from '../store';

export const getAuthUser = () => api.get<User>('/auth').then(responseBody);
