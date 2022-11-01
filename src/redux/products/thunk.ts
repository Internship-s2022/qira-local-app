import { Dispatch } from 'redux';

import {
  createProductActions,
  getProductActions,
  getProductsActions,
  updateProductActions,
} from './actions';
import * as API from './api';

export const getProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getProductsActions.request());
      const response = await API.getProducts();
      return dispatch(getProductsActions.success(response.data));
    } catch (error) {
      dispatch(getProductsActions.failure(error));
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getProductActions.request());
      const response = await API.getProductById(id);
      return dispatch(getProductActions.success(response.data));
    } catch (error) {
      dispatch(getProductActions.failure(error));
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(createProductActions.request());
      const response = await API.createProduct(product);
      return dispatch(createProductActions.success(response.data));
    } catch (error) {
      dispatch(createProductActions.failure(error));
    }
  };
};

export const updateProduct = (id, product) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateProductActions.request());
      const response = await API.updateProduct(id, product);
      return dispatch(updateProductActions.success(response.data));
    } catch (error) {
      dispatch(updateProductActions.failure(error));
    }
  };
};
