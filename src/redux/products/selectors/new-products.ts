import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getProducts = (state: RootState) => state.products.products;

export const getNewProducts = createSelector([getProducts], (list) => {
  const filteredProducts = list.filter((product) => product.isNew === true);
  filteredProducts.reverse();
  return filteredProducts.slice(0, 4);
});
