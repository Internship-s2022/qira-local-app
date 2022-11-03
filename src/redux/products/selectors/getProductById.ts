import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getProducts = (state: RootState) => state.products.products;
const getProductIdFromParam = (state: RootState, id: string) => id;

export const getProductById = createSelector(
  [getProducts, getProductIdFromParam],
  (productsList, productId) => {
    const product = productsList.find((product) => product._id === productId);
    return product;
  },
);
