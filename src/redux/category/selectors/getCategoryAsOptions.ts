import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getCategories = (state: RootState) => state.categories.categories;

export const getCategoriesAsOptions = createSelector([getCategories], (list) => {
  return list.map((category) => {
    return { label: category.name, value: category.name };
  });
});
