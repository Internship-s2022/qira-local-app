import { createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Product } from './types';

export const getPublicProductsActions = createAsyncAction(
  Actions.GET_PUBLIC_PRODUCTS_PENDING,
  Actions.GET_PUBLIC_PRODUCTS_SUCCESS,
  Actions.GET_PUBLIC_PRODUCTS_ERROR,
)<void, Product[], ApiResponse<unknown>>();
