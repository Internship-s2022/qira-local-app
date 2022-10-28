import { Dispatch } from 'redux';

import { getProductsActions } from './actions';
import * as API from './api';

export const getProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getProductsActions.request());
      const response = await API.getProducts();
      return dispatch(getProductsActions.success(response.data));
    } catch (error) {
      return dispatch(getProductsActions.failure(error));
    }
  };
};
