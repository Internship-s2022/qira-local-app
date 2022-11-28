import { Dispatch } from 'redux';

import {
  approveOrderActions,
  createOrderActions,
  deliverOrderActions,
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

export const createOrder = (order, token) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(createOrderActions.request());
      const response = await API.createOrder(order, token);
      return dispatch(createOrderActions.success(response.data));
    } catch (error) {
      return dispatch(createOrderActions.failure(error));
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
