import { ActionType } from 'typesafe-actions';

import { FileToSend } from 'src/types';

import { Product } from '../products/types';
import * as actions from './actions';
export type ActionsType = ActionType<typeof actions>;

export interface ShoppingCartState {
  products: ShoppingCartProduct[];
  isOpen: boolean;
  receipt: FileToSend;
  authorized: Authorized[];
  estimatedDeliveryDate: string;
  isFetching: boolean;
  message: string;
  error: unknown;
}

export interface Authorized {
  firstName: string;
  lastName: string;
  dni: string;
  phoneNumber: string;
}

export interface ShoppingCartProduct {
  product: Product;
  quantity: number;
}

export interface Amounts {
  products: number;
  taxes: number;
  total: number;
}

export interface OrderToCreate {
  products: ShoppingCartProduct[];
  client: string;
  authorized: Authorized[];
  amounts: Amounts;
  payment: FileToSend;
  exchangeRate: number;
  estimatedDeliveryDate: string;
}

export enum Actions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  OPEN_CART = 'OPEN_CART',
  CLOSE_CART = 'CLOSE_CART',
  ADD_TRANSFER_RECEIPT = 'ADD_TRANSFER_RECEIPT',
  REMOVE_TRANSFER_RECEIPT = 'REMOVE_TRANSFER_RECEIPT',
  SET_AUTHORIZED = 'SET_AUTHORIZED',
  CLEAR_ORDER_DATA = 'CLEAR_ORDER_DATA',
  RESET_STATE = 'RESET_STATE',
  SET_DELIVERY_DATE = 'SET_DELIVERY_DATE',

  CREATE_ORDER_PENDING = 'CREATE_ORDER_PENDING',
  CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR',
}
