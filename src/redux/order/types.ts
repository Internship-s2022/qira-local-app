import { ActionType } from 'typesafe-actions';

import { S3File } from 'src/types';

import { Amounts, Authorized, ShoppingCartProduct } from '../shopping-cart/types';
import * as actions from './actions';

export interface OrderState {
  orders: Order[];
  isFetching: boolean;
  message: string;
  error: unknown;
}

export enum OrderStates {
  APPROVE_PENDING = 'APPROVE_PENDING',
  DELIVERY_PENDING = 'DELIVERY_PENDING',
  DELIVERED = 'DELIVERED',
  REJECTED = 'REJECTED',
}

export interface Order {
  products: ShoppingCartProduct[];
  client: string;
  state: OrderStates;
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

export enum Actions {
  CREATE_ORDER_PENDING = 'CREATE_ORDER_PENDING',
  CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR',
}
