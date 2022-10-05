import { Dispatch } from 'redux';

import { AppThunk } from '../store';
import { getCategoriesActions } from './actions';
import { getCategories } from './api';

export const getCategory: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCategoriesActions.request(''));
      const response = await getCategories();
      if (response.data?.length) {
        return dispatch(getCategoriesActions.success(response.data));
      }
    } catch (error) {
      dispatch(getCategoriesActions.failure(error));
    }
  };
};
