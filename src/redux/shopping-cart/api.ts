import { api } from 'src/config/api';

import { Order } from '../orders/types';

export const createOrder = (order, token?: string) =>
  api.post<Order>('/client/orders', order, { headers: { token: token } });
