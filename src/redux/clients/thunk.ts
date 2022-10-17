import { Dispatch } from 'redux';

import { AppThunk } from '../store';
import { getClientActions } from './actions';
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
