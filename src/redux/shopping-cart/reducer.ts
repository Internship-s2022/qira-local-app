import { Actions, ActionsType, ShoppingCartState } from './types';

const initialState: ShoppingCartState = {
  products: [],
};

export const shoppingCartReducer = (
  state: ShoppingCartState = initialState,
  action: ActionsType,
): ShoppingCartState => {
  switch (action.type) {
    case Actions.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.products],
      };
    case Actions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.product.id !== action.payload),
      };
    case Actions.INCREASE_PRODUCT_QUANTITY: {
      const newList = state.products.map((product) => {
        if (product.product.id === action.payload) {
          return { product: product.product, quantity: product.quantity++ };
        }
        return product;
      });
      return {
        ...state,
        products: newList,
      };
    }
    case Actions.DECREASE_PRODUCT_QUANTITY: {
      const newList = state.products.map((product) => {
        if (product.product.id === action.payload) {
          return { product: product.product, quantity: product.quantity-- };
        }
        return product;
      });
      return {
        ...state,
        products: newList,
      };
    }
    default:
      return state;
  }
};
