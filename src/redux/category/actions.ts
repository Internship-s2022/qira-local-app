import { createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Category } from './types';

export const getCategoriesActions = createAsyncAction(
  Actions.GET_CATEGORIES_PENDING,
  Actions.GET_CATEGORIES_SUCCESS,
  Actions.GET_CATEGORIES_ERROR,
)<string, Category[], ApiResponse<unknown>>();
