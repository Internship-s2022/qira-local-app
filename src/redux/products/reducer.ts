import { Actions, ActionsType, ProductsState } from './types';

const initialState: ProductsState = {
  products: [],
  isFetching: false,
  message: '',
  error: undefined,
};

export const productsReducer = (state = initialState, action: ActionsType): ProductsState => {
  switch (action.type) {
    case Actions.GET_PUBLIC_PRODUCTS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_PUBLIC_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
        error: false,
      };
    case Actions.GET_PUBLIC_PRODUCTS_ERROR:
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
