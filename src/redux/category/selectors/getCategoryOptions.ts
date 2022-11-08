import { createSelector } from 'reselect';

import { RootState } from 'src/redux/store';

const getCategories = (state: RootState) => state.categories.categories;

export const getCategoryOptions = createSelector([getCategories], (categoryList) => {
  return categoryList.map((category) => {
    return {
      value: category._id,
      label: category.name,
    };
  });
});
