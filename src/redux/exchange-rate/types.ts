import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export interface ExchangeRate {
  value: string;
  date: string;
  _id: string;
}

export interface ExchangeRateState {
  exchangeRate: ExchangeRate;
  isFetching: boolean;
  error: boolean;
  message: string;
}
export type ActionsType = ActionType<typeof actions>;

export enum Actions {
  GET_EXCHANGE_RATE_SUCCESS = 'GET_EXCHANGE_RATE_SUCCESS',
  GET_EXCHANGE_RATE_PENDING = 'GET_EXCHANGE_RATE_PENDING',
  GET_EXCHANGE_RATE_ERROR = 'GET_EXCHANGE_RATE_ERROR',
}
