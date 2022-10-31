import { Category } from 'src/redux/category/types';

export const formatCategoriesSelect = (categories: Category[]) => {
  const formatedCategories = categories.map((category) => {
    return {
      value: category._id,
      label: category.name,
    };
  });
  return formatedCategories;
};
