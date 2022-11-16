import { api } from 'src/config/api';

import { Order } from './types';

export const createOrder = (order, token?: string) =>
  api.post<Order>('/public/order', order, { headers: { token: token } });
