import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getProducts = (state: RootState) => state.products.products;
const getCategories = (state: RootState) => state.categories.categories;
const getCategoryFromParam = (state: RootState, url: string) => url;

export const getProductsFilteredByCategory = createSelector(
  [getProducts, getCategories, getCategoryFromParam],
  (productsList, categoriesList, url) => {
    const selectedCategory = categoriesList.find((category) => category.url === url);
    if (!selectedCategory) {
      return [];
    }
    const filteredList = productsList.filter(
      (product) => product.category._id === selectedCategory._id,
    );
    return filteredList;
  },
);
