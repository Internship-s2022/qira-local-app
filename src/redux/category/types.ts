import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

interface Image {
  key: string;
  url: string;
}
export interface Category {
  name: string;
  image: Image;
  isActive: boolean;
  logicDelete: boolean;
}

export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING',
  GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR',
}
