import { api } from 'src/config/api';

import { Client } from './types';

export const getClients = () => api.get<Client[]>('/admin/client/');
