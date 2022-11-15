import { Dispatch } from 'redux';

import { getOrderActions, getOrdersActions } from './actions';
import * as API from './api';

export const getOrders = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getOrdersActions.request());
      const response = await API.getOrders();
      return dispatch(getOrdersActions.success(response.data));
    } catch (error) {
      return dispatch(getOrdersActions.failure(error));
    }
  };
};

export const getOrderById = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getOrderActions.request());
      const response = await API.getOrderById(id);
      return dispatch(getOrderActions.success(response.data));
    } catch (error) {
      return dispatch(getOrderActions.failure(error));
    }
  };
};
