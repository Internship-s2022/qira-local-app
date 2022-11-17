import { api } from 'src/config/api';

import { Order } from './types';

export const getOrders = () => api.get<Order[]>('/admin/orders');

export const getOrderById = (id) => api.get<Order>(`/admin/orders/${id}`);
