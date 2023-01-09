import { Dispatch } from 'redux';

import {
  activateActions,
  approveClientActions,
  changePasswordActions,
  getClientActions,
  getClientsActions,
  inactivateActions,
  updateClientActions,
} from './actions';
import * as API from './api';
import { ClientToUpdate } from './types';

export const getClients = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getClientsActions.request());
      const response = await API.getClients();
      return dispatch(getClientsActions.success(response.data));
    } catch (error) {
      return dispatch(getClientsActions.failure(error));
    }
  };
};

export const activateClient = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(activateActions.request());
      const response = await API.activateClient(id);
      if (response.data) {
        return dispatch(activateActions.success(response.data));
      }
    } catch (error) {
      return dispatch(activateActions.failure(error));
    }
  };
};

export const inactivateClient = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(inactivateActions.request());
      const response = await API.inactivateClient(id);
      if (response.data) {
        return dispatch(inactivateActions.success(response.data));
      }
    } catch (error) {
      return dispatch(inactivateActions.failure(error));
    }
  };
};

export const getClient = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getClientActions.request());
      const response = await API.getClient(id);
      if (response.data) {
        return dispatch(getClientActions.success(response.data));
      }
    } catch (error) {
      return dispatch(getClientActions.failure(error));
    }
  };
};

export const updateClient = (id: string, data: ClientToUpdate) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateClientActions.request());
      const response = await API.updateClient(id, data);
      return dispatch(updateClientActions.success(response.data));
    } catch (error) {
      return dispatch(updateClientActions.failure(error));
    }
  };
};

export const approveClient = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(approveClientActions.request());
      const response = await API.approveClient(id);
      return dispatch(approveClientActions.success(response.data));
    } catch (error) {
      return dispatch(approveClientActions.failure(error));
    }
  };
};

export const changePassword = (id: string, data: { password: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(changePasswordActions.request());
      const response = await API.changePasswordApi(id, data);
      return dispatch(changePasswordActions.success(response.data));
    } catch (error) {
      return dispatch(changePasswordActions.failure(error));
    }
  };
};
