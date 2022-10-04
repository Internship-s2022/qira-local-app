import { Actions } from './constants';
import { Category } from './types';

export const getCategoryPending = () => ({
  type: Actions.GET_CATEGORIES_PENDING,
});

export const getCategorySuccess = (categories: Category[]) => ({
  type: Actions.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoryError = (error: string) => ({
  type: Actions.GET_CATEGORIES_ERROR,
  payload: error,
});
