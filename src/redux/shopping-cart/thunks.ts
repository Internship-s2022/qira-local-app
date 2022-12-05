import { Dispatch } from 'redux';

import { createOrderActions } from './actions';
import * as API from './api';
import { OrderToCreate } from './types';

export const createOrder = (order: OrderToCreate) => {
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
