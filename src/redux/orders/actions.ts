import { createAction, createAsyncAction } from 'typesafe-actions';

import { OrderState } from 'src/types';

import { ApiResponse } from '../store';
import { Actions, FilterInput, Order } from './types';

export const getOrdersActions = createAsyncAction(
  Actions.GET_ORDERS_PENDING,
  Actions.GET_ORDERS_SUCCESS,
  Actions.GET_ORDERS_ERROR,
)<void, Order[], ApiResponse<unknown>>();

export const getOrderActions = createAsyncAction(
  Actions.GET_ORDER_PENDING,
  Actions.GET_ORDER_SUCCESS,
  Actions.GET_ORDER_ERROR,
)<void, Order, ApiResponse<unknown>>();

export const setFilterStateAction = createAction(Actions.SET_FILTER_STATE)<FilterInput>();
