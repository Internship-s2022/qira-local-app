import { action, createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Product } from './types';

export const getPublicProductsActions = createAsyncAction(
  Actions.GET_PUBLIC_PRODUCTS_PENDING,
  Actions.GET_PUBLIC_PRODUCTS_SUCCESS,
  Actions.GET_PUBLIC_PRODUCTS_ERROR,
)<void, Product[], ApiResponse<unknown>>();

export const getProductsActions = createAsyncAction(
  Actions.GET_PRODUCTS_PENDING,
  Actions.GET_PRODUCTS_SUCCESS,
  Actions.GET_PRODUCTS_ERROR,
)<void, Product[], ApiResponse<unknown>>();

export const getProductActions = createAsyncAction(
  Actions.GET_PRODUCT_PENDING,
  Actions.GET_PRODUCT_SUCCESS,
  Actions.GET_PRODUCT_ERROR,
)<void, Product, ApiResponse<unknown>>();

export const createProductActions = createAsyncAction(
  Actions.CREATE_PRODUCT_PENDING,
  Actions.CREATE_PRODUCT_SUCCESS,
  Actions.CREATE_PRODUCT_ERROR,
)<void, Product, ApiResponse<unknown>>();

export const updateProductActions = createAsyncAction(
  Actions.UPDATE_PRODUCT_PENDING,
  Actions.UPDATE_PRODUCT_SUCCESS,
  Actions.UPDATE_PRODUCT_ERROR,
)<void, Product, ApiResponse<unknown>>();

export const resetProduct = () => action(Actions.RESET_PRODUCT);
