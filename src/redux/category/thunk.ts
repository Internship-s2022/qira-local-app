import { Dispatch } from 'redux';

import { AppThunk } from '../category/api';
import { getCategoryError, getCategoryPending, getCategorySuccess } from './actions';
import { getCategories } from './api';

export const getCategory: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCategoryPending());
      const response = await getCategories();
      if (response.data?.length) {
        return dispatch(getCategorySuccess(response.data));
      }
    } catch (error) {
      dispatch(getCategoryError(error));
    }
  };
};
