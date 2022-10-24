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
        products: state.products.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};
