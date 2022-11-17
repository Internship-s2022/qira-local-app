import { api } from 'src/config/api';

import { Order } from './types';

export const createOrder = (order, token?: string) =>
  api.post<Order>('/client/orders', order, { headers: { token: token } });
