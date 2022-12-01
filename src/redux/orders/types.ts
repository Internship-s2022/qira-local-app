import { ActionType } from 'typesafe-actions';

import { OrderState, S3File } from 'src/types';

import { Client } from '../clients/types';
import { Product } from '../products/types';
import * as actions from './actions';

export interface OrdersState {
  orders: Order[];
  isFetching: boolean;
  message: string;
  error: unknown;
  selectedOrder: Order;
  filterState: FilterInput;
  isFetchingOrder: boolean;
}

export interface Products {
  product: Product;
  quantity: number;
}

export interface Authorized {
  firstName: string;
  lastName: string;
  dni: string;
  phoneNumber: string;
}

export interface Amounts {
  products: number;
  taxes: number;
  total: number;
}

export interface Order {
  _id: string;
  products: Products[];
  client: Client;
  state: OrderState;
  authorized: Authorized[];
  invoice?: S3File;
  signedInvoice?: S3File;
  amounts: Amounts;
  payment: S3File;
  exchangeRate: number;
  orderDate: Date;
  payAuthDate?: Date;
  deliverDate?: Date;
}

export type ActionsType = ActionType<typeof actions>;

export type FilterInput = OrderState | undefined;

export enum Actions {
  GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS',
  GET_ORDERS_PENDING = 'GET_ORDERS_PENDING',
  GET_ORDERS_ERROR = 'GET_ORDERS_ERROR',

  GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS',
  GET_ORDER_PENDING = 'GET_ORDER_PENDING',
  GET_ORDER_ERROR = 'GET_ORDER_ERROR',

  APPROVE_ORDER_PENDING = 'APPROVE_ORDER_PENDING',
  APPROVE_ORDER_SUCCESS = 'APPROVE_ORDER_SUCCESS',
  APPROVE_ORDER_ERROR = 'APPROVE_ORDER_ERROR',

  DELIVER_ORDER_PENDING = 'DELIVER_ORDER_PENDING',
  DELIVER_ORDER_SUCCESS = 'DELIVER_ORDER_SUCCESS',
  DELIVER_ORDER_ERROR = 'DELIVER_ORDER_ERROR',

  REJECT_ORDER_PENDING = 'REJECT_ORDER_PENDING',
  REJECT_ORDER_SUCCESS = 'REJECT_ORDER_SUCCESS',
  REJECT_ORDER_ERROR = 'REJECT_ORDER_ERROR',

  GET_CLIENT_ORDERS_PENDING = 'GET_CLIENT_ORDERS_PENDING',
  GET_CLIENT_ORDERS_SUCCESS = 'GET_CLIENT_ORDERS_SUCCESS',
  GET_CLIENT_ORDERS_ERROR = 'GET_CLIENT_ORDERS_ERROR',

  GET_ORDER_TO_DELIVER_SUCCESS = 'GET_ORDER_TO_DELIVER_SUCCESS',
  GET_ORDER_TO_DELIVER_PENDING = 'GET_ORDER_TO_DELIVER_PENDING',
  GET_ORDER_TO_DELIVER_ERROR = 'GET_ORDER_TO_DELIVER_ERROR',

  SET_FILTER_STATE = 'SET_FILTER_STATE',
}
