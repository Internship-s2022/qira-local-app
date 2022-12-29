import { api } from 'src/config/api';

import { Order } from '../orders/types';
import { OrderToCreate } from './types';

export const createOrder = (order: OrderToCreate) => api.post<Order>('/client/orders', order);
