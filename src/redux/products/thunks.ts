import { Dispatch } from 'redux';

import { getPublicProductsActions } from './actions';
import * as API from './api';

export const getPublicProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPublicProductsActions.request());
      const response = await API.getPublicProducts();
      return dispatch(getPublicProductsActions.success(response.data));
    } catch (error) {
      return dispatch(getPublicProductsActions.failure(error));
    }
  };
};
