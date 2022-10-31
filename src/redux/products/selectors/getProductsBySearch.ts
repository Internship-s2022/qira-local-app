import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getProducts = (state: RootState) => state.products.products;
const getSearchFromParam = (state: RootState, searchInput: string) => searchInput;

export const getProductsFilteredBySearch = createSelector(
  [getProducts, getSearchFromParam],
  (productsList, searchInput) => {
    const filteredList = productsList.filter((product) => {
      const searchInputLowerCase = searchInput.toLowerCase();
      const brandLowerCase = product.brand.toLowerCase();
      const nameLowerCase = product.name.toLowerCase();
      if (
        brandLowerCase.includes(searchInputLowerCase) ||
        nameLowerCase.includes(searchInputLowerCase)
      ) {
        return product;
      }
    });
    return filteredList;
  },
);
