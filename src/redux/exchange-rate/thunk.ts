import { Dispatch } from 'redux';

import { getExchangeRateActions } from './actions';
import * as API from './api';

export const getExchangeRate = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getExchangeRateActions.request());
      const response = await API.getExchangeRate();
      console.log(response);
      return dispatch(getExchangeRateActions.success(response.data));
    } catch (error) {
      dispatch(getExchangeRateActions.failure(error));
    }
  };
};
