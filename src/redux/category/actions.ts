import { action, createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Category } from './types';

export const getCategoriesActions = createAsyncAction(
  Actions.GET_CATEGORIES_PENDING,
  Actions.GET_CATEGORIES_SUCCESS,
  Actions.GET_CATEGORIES_ERROR,
)<string, Category[], ApiResponse<unknown>>();

export const activateCategoryActions = createAsyncAction(
  Actions.ACTIVATE_CATEGORY_PENDING,
  Actions.ACTIVATE_CATEGORY_SUCCESS,
  Actions.ACTIVATE_CATEGORY_ERROR,
)<string, Category, ApiResponse<unknown>>();

export const inactivateCategoryActions = createAsyncAction(
  Actions.INACTIVATE_CATEGORY_PENDING,
  Actions.INACTIVATE_CATEGORY_SUCCESS,
  Actions.INACTIVATE_CATEGORY_ERROR,
)<string, Category, ApiResponse<unknown>>();

export const deleteCategoryActions = createAsyncAction(
  Actions.DELETE_CATEGORY_PENDING,
  Actions.DELETE_CATEGORY_SUCCESS,
  Actions.DELETE_CATEGORY_ERROR,
)<string, Category, ApiResponse<unknown>>();

export const setImage = (url) => action(Actions.SET_IMAGE, url);
