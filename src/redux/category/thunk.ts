import { Dispatch } from 'redux';

import { closeModal } from '../modal/actions';
import {
  activateCategoryActions,
  createCategoryActions,
  deleteCategoryActions,
  getCategoriesActions,
  getCategoryActions,
  inactivateCategoryActions,
  updateCategoryActions,
} from './actions';
import * as API from './api';

export const getCategory = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCategoriesActions.request());
      const response = await API.getCategories();
      return dispatch(getCategoriesActions.success(response.data));
    } catch (error) {
      return dispatch(getCategoriesActions.failure(error));
    }
  };
};

export const getCategoryById = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCategoryActions.request());
      const response = await API.getCategoryById(id);
      return dispatch(getCategoryActions.success(response.data));
    } catch (error) {
      return dispatch(getCategoryActions.failure(error));
    }
  };
};

export const createCategory = (category) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(createCategoryActions.request());
      const response = await API.createCategory(category);
      return dispatch(createCategoryActions.success(response.data));
    } catch (error) {
      return dispatch(createCategoryActions.failure(error));
    }
  };
};

export const updateCategory = (id, category) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateCategoryActions.request());
      const response = await API.updateCategory(id, category);
      return dispatch(updateCategoryActions.success(response.data));
    } catch (error) {
      return dispatch(updateCategoryActions.failure(error));
    }
  };
};

export const activateCategory = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(activateCategoryActions.request());
      const response = await API.activateCategory(id);
      return dispatch(activateCategoryActions.success(response.data)), dispatch(closeModal());
    } catch (error) {
      return dispatch(activateCategoryActions.failure(error));
    }
  };
};

export const inactivateCategory = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(inactivateCategoryActions.request());
      const response = await API.inactivateCategory(id);
      return dispatch(inactivateCategoryActions.success(response.data)), dispatch(closeModal());
    } catch (error) {
      return dispatch(inactivateCategoryActions.failure(error));
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deleteCategoryActions.request());
      const response = await API.deleteCategory(id);
      return dispatch(deleteCategoryActions.success(response.data)), dispatch(closeModal());
    } catch (error) {
      return dispatch(deleteCategoryActions.failure(error));
    }
  };
};
