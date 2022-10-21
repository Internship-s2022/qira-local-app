import { api } from 'src/config/api';

import { Client } from './types';

export const getClients = () => api.get<Client[]>('/admin/client');

export const activateClient = (id) => api.patch<Client>(`/admin/client/activate/${id}`);
export const inactivateClient = (id) => api.patch<Client>(`/admin/client/inactivate/${id}`);
