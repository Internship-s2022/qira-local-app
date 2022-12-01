import { createAction, createAsyncAction } from 'typesafe-actions';

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

export const approveOrderActions = createAsyncAction(
  Actions.APPROVE_ORDER_PENDING,
  Actions.APPROVE_ORDER_SUCCESS,
  Actions.APPROVE_ORDER_ERROR,
)<void, Order, ApiResponse<unknown>>();

export const deliverOrderActions = createAsyncAction(
  Actions.DELIVER_ORDER_PENDING,
  Actions.DELIVER_ORDER_SUCCESS,
  Actions.DELIVER_ORDER_ERROR,
)<void, Order, ApiResponse<unknown>>();

export const rejectOrderActions = createAsyncAction(
  Actions.REJECT_ORDER_PENDING,
  Actions.REJECT_ORDER_SUCCESS,
  Actions.REJECT_ORDER_ERROR,
)<void, Order, ApiResponse<unknown>>();

export const getClientOrdersActions = createAsyncAction(
  Actions.GET_CLIENT_ORDERS_PENDING,
  Actions.GET_CLIENT_ORDERS_SUCCESS,
  Actions.GET_CLIENT_ORDERS_ERROR,
)<void, Order[], ApiResponse<unknown>>();

export const setFilterStateAction = createAction(Actions.SET_FILTER_STATE)<FilterInput>();
