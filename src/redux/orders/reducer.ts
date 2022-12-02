import { Actions, ActionsType, OrdersState } from './types';

const initialState: OrdersState = {
  orders: [],
  isFetching: false,
  message: '',
  error: undefined,
  selectedOrder: undefined,
  filterState: undefined,
  isFetchingOrder: false,
};

export const ordersReducer = (state = initialState, action: ActionsType): OrdersState => {
  switch (action.type) {
    case Actions.GET_ORDERS_PENDING:
    case Actions.GET_ORDER_PENDING:
    case Actions.GET_CLIENT_ORDERS_PENDING:
    case Actions.GET_ORDER_TO_DELIVER_PENDING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case Actions.APPROVE_ORDER_PENDING:
    case Actions.DELIVER_ORDER_PENDING:
    case Actions.REJECT_ORDER_PENDING:
      return {
        ...state,
        isFetchingOrder: true,
      };
    case Actions.GET_ORDERS_ERROR:
    case Actions.GET_ORDER_ERROR:
    case Actions.GET_CLIENT_ORDERS_ERROR:
    case Actions.GET_ORDER_TO_DELIVER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.APPROVE_ORDER_ERROR:
    case Actions.DELIVER_ORDER_ERROR:
    case Actions.REJECT_ORDER_ERROR:
      return {
        ...state,
        isFetchingOrder: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.GET_ORDERS_SUCCESS:
    case Actions.GET_CLIENT_ORDERS_SUCCESS:
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
    case Actions.APPROVE_ORDER_SUCCESS:
    case Actions.DELIVER_ORDER_SUCCESS:
    case Actions.REJECT_ORDER_SUCCESS: {
      const orderNewList = state.orders.map((order) => {
        if (order._id === action.payload._id) {
          return action.payload;
        }
        return order;
      });
      return {
        ...state,
        isFetchingOrder: false,
        error: undefined,
        orders: orderNewList,
        selectedOrder: action.payload,
      };
    }
    case Actions.GET_ORDER_TO_DELIVER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        selectedOrder: action.payload,
      };

    case Actions.SET_FILTER_STATE:
      return {
        ...state,
        filterState: action.payload,
      };
    default:
      return state;
  }
};
