import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type ActionsType = ActionType<typeof actions>;

export interface ShoppingCartState {
  products: Product[];
}
export interface Product {
  id: string;
}
export enum Actions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
}
