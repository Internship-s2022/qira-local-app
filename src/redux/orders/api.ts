import { api } from 'src/config/api';

import { Order } from './types';

export const getOrders = () => api.get<Order[]>('/admin/orders');

export const getOrderById = (id) => api.get<Order>(`/admin/orders/${id}`);

export const approveOrder = (id, data) => api.patch<Order>(`/admin/orders/approve/${id}`, data);

export const deliverOrder = (id, data) => api.patch<Order>(`/admin/orders/deliver/${id}`, data);

export const rejectOrder = (id) => api.patch<Order>(`/admin/orders/reject/${id}`);

export const getClientOrders = () => api.get<Order[]>('/client/orders');

export const getOrderToDeliver = (data) =>
  api.get<Order>(`/admin/orders/deliver/${data.id}?dni=${data.dni}`);

export const getClientOrderById = (id) => api.get<Order>(`/client/orders/${id}`);
