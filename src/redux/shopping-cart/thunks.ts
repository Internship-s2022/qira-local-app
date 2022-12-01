import { Dispatch } from 'redux';

import { createOrderActions } from './actions';
import * as API from './api';

export const createOrder = (order) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(createOrderActions.request());
      const response = await API.createOrder(order);
      dispatch(createOrderActions.success(response.data));
    } catch (error) {
      dispatch(createOrderActions.failure(error));
    }
  };
};
