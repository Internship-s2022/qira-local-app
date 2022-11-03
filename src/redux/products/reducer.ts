import { Actions, ActionsType, ProductsState } from './types';

const initialState: ProductsState = {
  products: [],
  isFetching: false,
  message: '',
  error: undefined,
  selectedProduct: undefined,
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
    case Actions.GET_PRODUCTS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_PRODUCTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.GET_PRODUCT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        selectedProduct: action.payload,
      };
    case Actions.GET_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.CREATE_PRODUCT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        message: 'Product created successfully',
        selectedProduct: action.payload,
      };
    case Actions.CREATE_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.UPDATE_PRODUCT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        message: 'Product updated successfully',
        selectedProduct: action.payload,
      };
    case Actions.UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.RESET_PRODUCT:
      return {
        ...state,
        selectedProduct: undefined,
      };
    default:
      return state;
  }
};
