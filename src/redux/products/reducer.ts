import { Actions, ActionsType, ProductsState } from './types';

export const initialState: ProductsState = {
  products: [],
  isFetching: false,
  message: '',
  error: undefined,
  selectedProduct: undefined,
};

export const productsReducer = (state = initialState, action: ActionsType): ProductsState => {
  switch (action.type) {
    case Actions.GET_PUBLIC_PRODUCTS_PENDING:
    case Actions.GET_PRODUCT_PENDING:
    case Actions.GET_PRODUCTS_PENDING:
    case Actions.CREATE_PRODUCT_PENDING:
    case Actions.UPDATE_PRODUCT_PENDING:
    case Actions.ACTIVATE_PRODUCT_PENDING:
    case Actions.INACTIVATE_PRODUCT_PENDING:
    case Actions.DELETE_PRODUCT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_PUBLIC_PRODUCTS_ERROR:
    case Actions.GET_PRODUCTS_ERROR:
    case Actions.GET_PRODUCT_ERROR:
    case Actions.CREATE_PRODUCT_ERROR:
    case Actions.UPDATE_PRODUCT_ERROR:
    case Actions.ACTIVATE_PRODUCT_ERROR:
    case Actions.INACTIVATE_PRODUCT_ERROR:
    case Actions.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.GET_PUBLIC_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
        error: false,
      };
    case Actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        selectedProduct: action.payload,
      };
    case Actions.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        message: 'Product created successfully',
        products: [...state.products, action.payload],
      };
    case Actions.UPDATE_PRODUCT_SUCCESS: {
      const productNewList = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
      return {
        ...state,
        isFetching: false,
        error: undefined,
        products: productNewList,
      };
    }
    case Actions.ACTIVATE_PRODUCT_SUCCESS: {
      const productNewList = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
      return {
        ...state,
        products: productNewList,
        isFetching: false,
      };
    }
    case Actions.INACTIVATE_PRODUCT_SUCCESS: {
      const productNewList = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
      return {
        ...state,
        products: productNewList,
        isFetching: false,
      };
    }
    case Actions.DELETE_PRODUCT_SUCCESS: {
      const productNewList = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
      return {
        ...state,
        products: productNewList.filter((product) => product._id !== action.payload._id),
        isFetching: false,
      };
    }
    case Actions.RESET_PRODUCT:
      return {
        ...state,
        selectedProduct: undefined,
      };
    default:
      return state;
  }
};
