import { Dispatch } from 'redux';

import { AppThunk } from '../store';
import {
  activateCategoryActions,
  deleteCategoryActions,
  getCategoriesActions,
  inactivateCategoryActions,
} from './actions';
import * as API from './api';

export const getCategory: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCategoriesActions.request(''));
      const response = await API.getCategories();
      if (response.data?.length) {
        return dispatch(getCategoriesActions.success(response.data));
      }
    } catch (error) {
      dispatch(getCategoriesActions.failure(error));
    }
  };
};

export const activateCategory: AppThunk = (_id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(activateCategoryActions.request(''));
      const response = await API.activateCategory(_id);
      if (response.data) {
        return dispatch(activateCategoryActions.success(response.data));
      }
    } catch (error) {
      dispatch(activateCategoryActions.failure(error));
    }
  };
};

export const inactivateCategory: AppThunk = (_id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(inactivateCategoryActions.request(''));
      const response = await API.inactivateCategory(_id);
      if (response.data) {
        return dispatch(inactivateCategoryActions.success(response.data));
      }
    } catch (error) {
      dispatch(inactivateCategoryActions.failure(error));
    }
  };
};

export const deleteCategory: AppThunk = (_id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deleteCategoryActions.request(''));
      const response = await API.deleteCategory(_id);
      if (response.data) {
        return dispatch(deleteCategoryActions.success(response.data));
      }
    } catch (error) {
      dispatch(deleteCategoryActions.failure(error));
    }
  };
};
