import { Dispatch } from 'redux';

import { closeModal } from 'src/redux/modal/actions';

import {
  activateActions,
  approveClientActions,
  getClientActions,
  getClientsActions,
  inactivateActions,
  updateClientActions,
} from './actions';
import * as API from './api';

export const getClients = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getClientsActions.request());
      const response = await API.getClients();
      return dispatch(getClientsActions.success(response.data));
    } catch (error) {
      dispatch(getClientsActions.failure(error));
    }
  };
};

export const activateClient = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(activateActions.request());
      const response = await API.activateClient(id);
      if (response.data) {
        return dispatch(activateActions.success(response.data)), dispatch(closeModal());
      }
    } catch (error) {
      dispatch(activateActions.failure(error));
    }
  };
};

export const inactivateClient = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(inactivateActions.request());
      const response = await API.inactivateClient(id);
      if (response.data) {
        return dispatch(activateActions.success(response.data)), dispatch(closeModal());
      }
    } catch (error) {
      dispatch(activateActions.failure(error));
    }
  };
};

export const getClient = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getClientActions.request());
      const response = await API.getClient(id);
      if (response.data) {
        return dispatch(getClientActions.success(response.data));
      }
    } catch (error) {
      dispatch(getClientActions.failure(error));
    }
  };
};

export const updateClient = (id, data) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateClientActions.request());
      const response = await API.updateClient(id, data);
      return dispatch(updateClientActions.success(response.data));
    } catch (error) {
      dispatch(updateClientActions.failure(error));
    }
  };
};

export const approveClient = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(approveClientActions.request());
      const response = await API.approveClient(id);
      return dispatch(approveClientActions.success(response.data));
    } catch (error) {
      dispatch(approveClientActions.failure(error));
    }
  };
};
