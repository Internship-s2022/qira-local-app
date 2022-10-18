import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

interface Image {
  key: string;
  url: string;
}
export interface Category {
  _id: string;
  name: string;
  image: Image;
  isActive: boolean;
  logicDelete: boolean;
}

export interface CategoryState {
  categories: Category[];
  isFetching: boolean;
  error: unknown;
  message: string;
}

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING',
  GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR',
  ACTIVATE_CATEGORY_SUCCESS = 'ACTIVATE_CATEGORY_SUCCESS',
  ACTIVATE_CATEGORY_PENDING = 'ACTIVATE_CATEGORY_PENDING',
  ACTIVATE_CATEGORY_ERROR = 'ACTIVATE_CATEGORY_ERROR',
  INACTIVATE_CATEGORY_SUCCESS = 'INACTIVATE_CATEGORY_SUCCESS',
  INACTIVATE_CATEGORY_PENDING = 'INACTIVATE_CATEGORY_PENDING',
  INACTIVATE_CATEGORY_ERROR = 'INACTIVATE_CATEGORY_ERROR',
  DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS',
  DELETE_CATEGORY_PENDING = 'DELETE_CATEGORY_PENDING',
  DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR',
}
