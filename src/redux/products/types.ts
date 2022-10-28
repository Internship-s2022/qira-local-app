import { ActionType } from 'typesafe-actions';

import { Currency, S3File } from 'src/types';

import { Category } from '../category/types';
import * as actions from './actions';

export interface ProductsState {
  products: Product[];
  isFetching: boolean;
  message: string;
  error: unknown;
}

export interface Product {
  _id: string;
  brand: string;
  name: string;
  description?: string;
  price: number;
  category: Category;
  image?: S3File;
  technicalFile?: S3File;
  currency: Currency;
  stock: number;
  isNew?: boolean;
  isActive: boolean;
  logicDelete: boolean;
}

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
}
