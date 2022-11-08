import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getShoppingCartProducts = (state: RootState) => state.shoppingCart.products;
const getProductFromParam = (state: RootState, id: string) => id;

export const getProductQuantity = createSelector(
  [getShoppingCartProducts, getProductFromParam],
  (list, productId) => {
    const product = list.find((cartProduct) => cartProduct.product._id === productId);
    return product?.quantity || 0;
  },
);
