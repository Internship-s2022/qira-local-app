import { Dispatch } from 'redux';

import { closeModal } from 'src/redux/modal/actions';

import {
  activateProductActions,
  createProductActions,
  deleteProductActions,
  getProductActions,
  getProductsActions,
  getPublicProductsActions,
  inactivateProductActions,
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

export const activateProduct = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(activateProductActions.request());
      const response = await API.activateProduct(id);
      return dispatch(activateProductActions.success(response.data)), dispatch(closeModal());
    } catch (error) {
      return dispatch(activateProductActions.failure(error));
    }
  };
};

export const inactivateProduct = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(inactivateProductActions.request());
      const response = await API.inactivateProduct(id);
      return dispatch(inactivateProductActions.success(response.data)), dispatch(closeModal());
    } catch (error) {
      return dispatch(inactivateProductActions.failure(error));
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(deleteProductActions.request());
      const response = await API.deleteProduct(id);
      return dispatch(deleteProductActions.success(response.data)), dispatch(closeModal());
    } catch (error) {
      return dispatch(deleteProductActions.failure(error));
    }
  };
};

export const getPublicProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPublicProductsActions.request());
      const response = await API.getPublicProducts();
      return dispatch(getPublicProductsActions.success(response.data));
    } catch (error) {
      return dispatch(getPublicProductsActions.failure(error));
    }
  };
};
