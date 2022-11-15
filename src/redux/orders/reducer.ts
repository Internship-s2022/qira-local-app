import { Actions, ActionsType, OrdersState } from './types';

const initialState: OrdersState = {
  orders: [],
  isFetching: false,
  message: '',
  error: undefined,
  selectedOrder: undefined,
};

export const ordersReducer = (state = initialState, action: ActionsType): OrdersState => {
  switch (action.type) {
    case Actions.GET_ORDERS_PENDING:
    case Actions.GET_ORDER_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_ORDERS_ERROR:
    case Actions.GET_ORDER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        selectedOrder: action.payload,
      };
    default:
      return state;
  }
};
