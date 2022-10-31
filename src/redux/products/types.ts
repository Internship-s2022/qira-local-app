import { ActionType } from 'typesafe-actions';

import { Currency, S3File } from 'src/types';

import { Category } from '../category/types';
import * as actions from './actions';

export interface ProductsState {
  products: Product[];
  isFetching: boolean;
  message: string;
  error: unknown;
  selectedProduct: Product;
}

export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image: S3File;
  technicalFile?: S3File;
  brand: string;
  category: Category;
  currency: Currency;
  stock: number;
  isNew?: boolean;
  isActive: boolean;
  logicDelete: boolean;
}

export interface ProductState {
  products: Product[];
  isFetching: boolean;
  error: unknown;
  message: string;
  selectedProduct: Product;
}

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_PUBLIC_PRODUCTS_PENDING = 'GET_PUBLIC_PRODUCTS_PENDING',
  GET_PUBLIC_PRODUCTS_SUCCESS = 'GET_PUBLIC_PRODUCTS_SUCCESS',
  GET_PUBLIC_PRODUCTS_ERROR = 'GET_PUBLIC_PRODUCTS_ERROR',

  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',

  GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
  GET_PRODUCT_PENDING = 'GET_PRODUCT_PENDING',
  GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR',

  CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_PENDING = 'CREATE_PRODUCT_PENDING',
  CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR',

  UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS',
  UPDATE_PRODUCT_PENDING = 'UPDATE_PRODUCT_PENDING',
  UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR',

  RESET_PRODUCT = 'RESET_PRODUCT',
}
