import { Dispatch } from 'redux';

import {
  approveOrderActions,
  deliverOrderActions,
  getClientOrdersActions,
  getOrderActions,
  getOrdersActions,
  rejectOrderActions,
} from './actions';
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

export const approveOrder = (id, data) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(approveOrderActions.request());
      const response = await API.approveOrder(id, data);
      return dispatch(approveOrderActions.success(response.data));
    } catch (error) {
      return dispatch(approveOrderActions.failure(error));
    }
  };
};

export const deliverOrder = (id, data) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deliverOrderActions.request());
      const response = await API.deliverOrder(id, data);
      return dispatch(deliverOrderActions.success(response.data));
    } catch (error) {
      return dispatch(deliverOrderActions.failure(error));
    }
  };
};

export const rejectOrder = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(rejectOrderActions.request());
      const response = await API.rejectOrder(id);
      return dispatch(rejectOrderActions.success(response.data));
    } catch (error) {
      return dispatch(rejectOrderActions.failure(error));
    }
  };
};

export const getClientOrders = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getClientOrdersActions.request());
      const response = await API.getClientOrders();
      return dispatch(getClientOrdersActions.success(response.data));
    } catch (error) {
      return dispatch(getClientOrdersActions.failure(error));
    }
  };
};
