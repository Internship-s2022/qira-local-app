import { Actions, ActionsType, ShoppingCartState } from './types';

const initialState: ShoppingCartState = {
  products: [],
  isOpen: false,
  receipt: undefined,
  authorized: [],
  estimatedDeliveryDate: undefined,
  isFetching: false,
  message: '',
  error: undefined,
};

export const shoppingCartReducer = (
  state: ShoppingCartState = initialState,
  action: ActionsType,
): ShoppingCartState => {
  switch (action.type) {
    case Actions.CREATE_ORDER_PENDING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case Actions.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: 'Orden creada exitósamente.',
      };
    case Actions.CREATE_ORDER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        message: action.payload.message,
      };
    case Actions.ADD_PRODUCT: {
      let newList = [...state.products];
      const result = state.products.findIndex(
        (product) => product.product._id === action.payload.product._id,
      );
      if (result !== -1) {
        newList[result] = action.payload;
      } else {
        newList = [...state.products, action.payload];
      }
      return {
        ...state,
        products: newList,
      };
    }
    case Actions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.product._id !== action.payload),
      };
    case Actions.INCREASE_PRODUCT_QUANTITY: {
      const newList = state.products.map((product) => {
        if (product.product._id === action.payload) {
          return { product: product.product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return {
        ...state,
        products: newList,
      };
    }
    case Actions.DECREASE_PRODUCT_QUANTITY: {
      const newList = [];
      state.products.forEach((product) => {
        if (product.product._id !== action.payload) {
          newList.push(product);
        } else if (product.quantity > 1) {
          newList.push({ product: product.product, quantity: product.quantity - 1 });
        }
      });
      return {
        ...state,
        products: newList,
      };
    }
    case Actions.OPEN_CART: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case Actions.CLOSE_CART: {
      return {
        ...state,
        isOpen: false,
      };
    }
    case Actions.ADD_TRANSFER_RECEIPT: {
      return {
        ...state,
        receipt: action.payload,
      };
    }
    case Actions.REMOVE_TRANSFER_RECEIPT: {
      return {
        ...state,
        receipt: undefined,
      };
    }
    case Actions.SET_AUTHORIZED:
      return {
        ...state,
        authorized: action.payload,
      };
    case Actions.CLEAR_ORDER_DATA:
      return {
        ...state,
        authorized: [],
        estimatedDeliveryDate: undefined,
      };
    case Actions.SET_DELIVERY_DATE:
      return {
        ...state,
        estimatedDeliveryDate: action.payload,
      };
    case Actions.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
