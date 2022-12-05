import { DeliverFormValues } from 'src/components/pages/admin/deliver/types';
import { api } from 'src/config/api';
import { FileToSend } from 'src/types';

import { Order } from './types';

export const getOrders = () => api.get<Order[]>('/admin/orders');

export const getOrderById = (id: string) => api.get<Order>(`/admin/orders/${id}`);

export const approveOrder = (id: string, data: { invoice: FileToSend }) =>
  api.patch<Order>(`/admin/orders/approve/${id}`, data);

export const deliverOrder = (id: string, data: { signedInvoice: FileToSend }) =>
  api.patch<Order>(`/admin/orders/deliver/${id}`, data);

export const rejectOrder = (id: string) => api.patch<Order>(`/admin/orders/reject/${id}`);

export const getClientOrders = () => api.get<Order[]>('/client/orders');

export const getOrderToDeliver = (data: DeliverFormValues) =>
  api.get<Order>(`/admin/orders/deliver/${data.id}?dni=${data.dni}`);

export const getClientOrderById = (id: string) => api.get<Order>(`/client/orders/${id}`);
