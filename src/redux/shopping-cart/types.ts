import { ActionType } from 'typesafe-actions';

import { FileToSend } from 'src/types';

import { Product } from '../products/types';
import * as actions from './actions';
export type ActionsType = ActionType<typeof actions>;

export interface ShoppingCartState {
  products: ShoppingCartProduct[];
  isOpen: boolean;
  receipt: FileToSend;
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

export enum Actions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  OPEN_CART = 'OPEN_CART',
  CLOSE_CART = 'CLOSE_CART',
  ADD_TRANSFER_RECEIPT = 'ADD_TRANSFER_RECEIPT',
  REMOVE_TRANSFER_RECEIPT = 'REMOVE_TRANSFER_RECEIPT',
}
