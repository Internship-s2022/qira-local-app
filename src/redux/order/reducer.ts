import { Actions, ActionsType, OrderState } from './types';

const initialState: OrderState = {
  orders: [],
  isFetching: false,
  message: '',
  error: undefined,
};

export const OrderReducer = (state = initialState, action: ActionsType): OrderState => {
  switch (action.type) {
    case Actions.CREATE_ORDER_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: 'Orden creada exitósamente.',
        orders: [...state.orders, action.payload],
      };
    case Actions.CREATE_ORDER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
  }
};
