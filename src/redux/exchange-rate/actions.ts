import { createAsyncAction } from 'typesafe-actions';

import { ApiResponse } from '../store';
import { Actions, ExchangeRate } from './types';

export const getExchangeRateActions = createAsyncAction(
  Actions.GET_EXCHANGE_RATE_PENDING,
  Actions.GET_EXCHANGE_RATE_SUCCESS,
  Actions.GET_EXCHANGE_RATE_ERROR,
)<void, ExchangeRate, ApiResponse<unknown>>();
