import { ActionType } from 'typesafe-actions';

import { Product } from 'src/components/shared/ui/product-card/types';

import * as actions from './actions';

export type ActionsType = ActionType<typeof actions>;

export interface ShoppingCartState {
  products: ShoppingCartProduct[];
}

export interface ShoppingCartProduct {
  product: Product;
  quantity: number;
}
export enum Actions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
}
