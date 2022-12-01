import { api } from 'src/config/api';

import { Order } from '../orders/types';

export const createOrder = (order) => api.post<Order>('/client/orders', order);
