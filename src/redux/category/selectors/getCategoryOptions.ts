import { createSelector } from 'reselect';

import { Options } from 'src/components/shared/ui/select/types';
import { RootState } from 'src/redux/store';

const getCategories = (state: RootState) => state.categories.categories;

export const getCategoryOptions = createSelector([getCategories], (categoryList) => {
  return categoryList.reduce((acc: Options[], category) => {
    if (category.isActive) {
      acc.push({
        value: category._id,
        label: category.name,
      });
    }
    return acc;
  }, []);
});
