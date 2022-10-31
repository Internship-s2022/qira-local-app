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
      if (response.data?.length) {
        return dispatch(getProductsActions.success(response.data));
      }
    } catch (error) {
      dispatch(getProductsActions.failure(error));
    }
  };
};

export const getProductById = (_id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getProductActions.request());
      const response = await API.getProductById(_id);
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

export const updateProduct = (_id, product) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateProductActions.request());
      const response = await API.updateProduct(_id, product);
      return dispatch(updateProductActions.success(response.data));
    } catch (error) {
      dispatch(updateProductActions.failure(error));
    }
  };
};
