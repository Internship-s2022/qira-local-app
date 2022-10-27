import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getShoppingCartProducts = (state: RootState) => state.shoppingCart.products;
const getProductFromParam = (state: RootState, id: string) => id;

export const getProductQuantity = createSelector(
  [getShoppingCartProducts, getProductFromParam],
  (list, productId) => {
    let quantity = 0;
    list.forEach((cartProduct) => {
      if (productId === cartProduct.product._id) {
        quantity = cartProduct.quantity;
      }
    });
    return quantity;
  },
);
