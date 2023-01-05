import { api } from 'src/config/api';

import { Client, ClientToUpdate } from './types';

export const getClients = () => api.get<Client[]>('/admin/client');

export const activateClient = (id: string) => api.patch<Client>(`/admin/client/activate/${id}`);

export const inactivateClient = (id: string) => api.patch<Client>(`/admin/client/inactivate/${id}`);

export const getClient = (id: string) => api.get<Client>(`/admin/client/${id}`);

export const approveClient = (id: string) => api.patch<Client>(`/admin/client/approve/${id}`);

export const updateClient = (id: string, data: ClientToUpdate) =>
  api.patch<Client>(`/admin/client/${id}`, data);

export const changePasswordApi = (id: string, data: { password: string }) =>
  api.patch<Client>(`/admin/client/password/${id}`, data);
