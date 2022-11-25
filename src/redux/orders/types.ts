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

  CREATE_ORDER_PENDING = 'CREATE_ORDER_PENDING',
  CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR',

  SET_FILTER_STATE = 'SET_FILTER_STATE',

  RESET_SELECTED_ORDER = 'RESET_SELECTED_ORDER',
}
