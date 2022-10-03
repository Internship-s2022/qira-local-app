import { Dispatch } from 'redux';

import { getCategoryError, getCategoryPending, getCategorySuccess } from './actions';
import { AppThunk, categoryRequest } from './types';

export const getCategory: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCategoryPending());
      const response = await categoryRequest.get('/category');
      if (response.data?.length) {
        return dispatch(getCategorySuccess(response.data));
      }
    } catch (error) {
      dispatch(getCategoryError(error));
    }
  };
};
