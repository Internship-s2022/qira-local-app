import { Dispatch } from 'redux';

import { AppThunk } from '../store';
import { activateActions, getClientActions, inactivateActions } from './actions';
import * as API from './api';

export const getClients: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getClientActions.request(''));
      const response = await API.getClients();
      if (response.data?.length) {
        return dispatch(getClientActions.success(response.data));
      }
    } catch (error) {
      dispatch(getClientActions.failure(error));
    }
  };
};

export const activateClient: AppThunk = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(activateActions.request(''));
      const response = await API.activateClient(id);
      if (response.data) {
        return dispatch(activateActions.success(response.data));
      }
    } catch (error) {
      dispatch(activateActions.failure(error));
    }
  };
};

export const inactivateClient: AppThunk = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(inactivateActions.request(''));
      const response = await API.inactivateClient(id);
      if (response.data) {
        return dispatch(activateActions.success(response.data));
      }
    } catch (error) {
      dispatch(activateActions.failure(error));
    }
  };
};
