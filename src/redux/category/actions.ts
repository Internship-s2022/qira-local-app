import { action, createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Category } from './types';

export const getCategoriesActions = createAsyncAction(
  Actions.GET_CATEGORIES_PENDING,
  Actions.GET_CATEGORIES_SUCCESS,
  Actions.GET_CATEGORIES_ERROR,
)<void, Category[], ApiResponse<unknown>>();

export const getPublicCategoriesActions = createAsyncAction(
  Actions.GET_PUBLIC_CATEGORIES_PENDING,
  Actions.GET_PUBLIC_CATEGORIES_SUCCESS,
  Actions.GET_PUBLIC_CATEGORIES_ERROR,
)<void, Category[], ApiResponse<unknown>>();

export const getCategoryActions = createAsyncAction(
  Actions.GET_CATEGORY_PENDING,
  Actions.GET_CATEGORY_SUCCESS,
  Actions.GET_CATEGORY_ERROR,
)<void, Category, ApiResponse<unknown>>();

export const createCategoryActions = createAsyncAction(
  Actions.CREATE_CATEGORY_PENDING,
  Actions.CREATE_CATEGORY_SUCCESS,
  Actions.CREATE_CATEGORY_ERROR,
)<void, Category, ApiResponse<unknown>>();

export const updateCategoryActions = createAsyncAction(
  Actions.UPDATE_CATEGORY_PENDING,
  Actions.UPDATE_CATEGORY_SUCCESS,
  Actions.UPDATE_CATEGORY_ERROR,
)<void, Category, ApiResponse<unknown>>();

export const activateCategoryActions = createAsyncAction(
  Actions.ACTIVATE_CATEGORY_PENDING,
  Actions.ACTIVATE_CATEGORY_SUCCESS,
  Actions.ACTIVATE_CATEGORY_ERROR,
)<void, Category, ApiResponse<unknown>>();

export const inactivateCategoryActions = createAsyncAction(
  Actions.INACTIVATE_CATEGORY_PENDING,
  Actions.INACTIVATE_CATEGORY_SUCCESS,
  Actions.INACTIVATE_CATEGORY_ERROR,
)<void, Category, ApiResponse<unknown>>();

export const deleteCategoryActions = createAsyncAction(
  Actions.DELETE_CATEGORY_PENDING,
  Actions.DELETE_CATEGORY_SUCCESS,
  Actions.DELETE_CATEGORY_ERROR,
)<void, Category, ApiResponse<unknown>>();

export const resetCategory = () => action(Actions.RESET_CATEGORY);
