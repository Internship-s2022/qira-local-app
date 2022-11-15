import { createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Order } from './types';

export const createOrderActions = createAsyncAction(
  Actions.CREATE_ORDER_PENDING,
  Actions.CREATE_ORDER_SUCCESS,
  Actions.CREATE_ORDER_ERROR,
)<void, Order, ApiResponse<unknown>>();
