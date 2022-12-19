import { Actions, ActionsType, ExchangeRateState } from './types';

const initialState: ExchangeRateState = {
  exchangeRate: undefined,
  isFetching: false,
  error: undefined,
  message: '',
};

export const exchangeRateReducer = (
  state = initialState,
  action: ActionsType,
): ExchangeRateState => {
  switch (action.type) {
    case Actions.GET_EXCHANGE_RATE_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_EXCHANGE_RATE_SUCCESS:
      return {
        ...state,
        exchangeRate: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_EXCHANGE_RATE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
