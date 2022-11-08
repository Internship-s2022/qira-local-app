import { Actions, ActionsType, ShoppingCartState } from './types';

const initialState: ShoppingCartState = {
  products: [],
  isOpen: false,
};

export const shoppingCartReducer = (
  state: ShoppingCartState = initialState,
  action: ActionsType,
): ShoppingCartState => {
  switch (action.type) {
    case Actions.ADD_PRODUCT:
      if (state.products.some((product) => product.product._id === action.payload.product._id)) {
        return state;
      }
      return {
        ...state,
        products: [...state.products, action.payload],
      };
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
    default:
      return state;
  }
};
