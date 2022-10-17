import { createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, Client } from './types';

export const getClientActions = createAsyncAction(
  Actions.GET_CLIENT_PENDING,
  Actions.GET_CLIENT_SUCCESS,
  Actions.GET_CLIENT_ERROR,
)<string, Client[], ApiResponse<unknown>>();
