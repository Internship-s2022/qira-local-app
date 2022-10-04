import { action } from 'typesafe-actions';

import { Actions } from './constants';
import { Category } from './types';

export const getCategoryPending = () => action(Actions.GET_CATEGORIES_PENDING);

export const getCategorySuccess = (categories: Category[]) =>
  action(Actions.GET_CATEGORIES_SUCCESS, categories);

export const getCategoryError = (error: string) => action(Actions.GET_CATEGORIES_ERROR, error);
