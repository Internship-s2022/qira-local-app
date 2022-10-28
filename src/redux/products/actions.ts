import { createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Product } from './types';

export const getProductsActions = createAsyncAction(
  Actions.GET_PRODUCTS_PENDING,
  Actions.GET_PRODUCTS_SUCCESS,
  Actions.GET_PRODUCTS_ERROR,
)<void, Product[], ApiResponse<unknown>>();
