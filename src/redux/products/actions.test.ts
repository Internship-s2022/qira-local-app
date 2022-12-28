import {
  activateProductActions,
  createProductActions,
  deleteProductActions,
  getProductActions,
  getProductsActions,
  getPublicProductsActions,
  inactivateProductActions,
  resetProduct,
  updateProductActions,
} from './actions';
import { Actions } from './types';

export const mockedS3File = {
  key: 'develop/products-images/Agricultex.jpeg',
  url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Agricultex.jpeg',
};

export enum Currency {
  DOLLAR = 'DOLLAR',
  PESO = 'PESO',
}

export const mockedCategory = {
  _id: '63617504bc1a382119d49e4b',
  name: 'Herbicidas',
  image: mockedS3File,
  url: 'Herbicidas',
  isActive: true,
  logicDelete: false,
};

export const mockedProduct = {
  _id: '633db2570b76198b1fb9e911',
  name: 'Semillas',
  description: 'description',
  price: 2000,
  image: mockedS3File,
  technicalFile: mockedS3File,
  brand: 'Qira',
  category: mockedCategory,
  currency: Currency.PESO,
  stock: 20,
  isNew: false,
  isActive: true,
  logicDelete: false,
};

export const mockedProductInactive = {
  _id: '633db2570b76198b1fb9e911',
  name: 'Semillas',
  description: 'description',
  price: 2000,
  image: mockedS3File,
  technicalFile: mockedS3File,
  brand: 'Qira',
  category: mockedCategory,
  currency: Currency.PESO,
  stock: 20,
  isNew: false,
  isActive: false,
  logicDelete: false,
};

describe('Products actions', () => {
  it('Should return the fetching actions', () => {
    expect(getProductsActions.request()).toMatchObject({
      type: Actions.GET_PRODUCTS_PENDING,
    });
    expect(getProductActions.request()).toMatchObject({
      type: Actions.GET_PRODUCT_PENDING,
    });
    expect(getPublicProductsActions.request()).toMatchObject({
      type: Actions.GET_PUBLIC_PRODUCTS_PENDING,
    });
    expect(createProductActions.request()).toMatchObject({
      type: Actions.CREATE_PRODUCT_PENDING,
    });
    expect(updateProductActions.request()).toMatchObject({
      type: Actions.UPDATE_PRODUCT_PENDING,
    });
    expect(activateProductActions.request()).toMatchObject({
      type: Actions.ACTIVATE_PRODUCT_PENDING,
    });
    expect(inactivateProductActions.request()).toMatchObject({
      type: Actions.INACTIVATE_PRODUCT_PENDING,
    });
    expect(deleteProductActions.request()).toMatchObject({
      type: Actions.DELETE_PRODUCT_PENDING,
    });
  });

  it('Should return the error actions', () => {
    const mockedError = {
      message: 'There is an error',
      data: undefined,
      error: true,
    };

    expect(getProductsActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_PRODUCTS_ERROR,
      payload: mockedError,
    });
    expect(getProductActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_PRODUCT_ERROR,
      payload: mockedError,
    });
    expect(getPublicProductsActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_PUBLIC_PRODUCTS_ERROR,
      payload: mockedError,
    });
    expect(createProductActions.failure(mockedError)).toMatchObject({
      type: Actions.CREATE_PRODUCT_ERROR,
      payload: mockedError,
    });
    expect(updateProductActions.failure(mockedError)).toMatchObject({
      type: Actions.UPDATE_PRODUCT_ERROR,
      payload: mockedError,
    });
    expect(activateProductActions.failure(mockedError)).toMatchObject({
      type: Actions.ACTIVATE_PRODUCT_ERROR,
      payload: mockedError,
    });
    expect(inactivateProductActions.failure(mockedError)).toMatchObject({
      type: Actions.INACTIVATE_PRODUCT_ERROR,
      payload: mockedError,
    });
    expect(deleteProductActions.failure(mockedError)).toMatchObject({
      type: Actions.DELETE_PRODUCT_ERROR,
      payload: mockedError,
    });
  });

  it('Should return the success actions', () => {
    expect(getProductsActions.success([mockedProduct])).toMatchObject({
      type: Actions.GET_PRODUCTS_SUCCESS,
      payload: [mockedProduct],
    });
    expect(getProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.GET_PRODUCT_SUCCESS,
      payload: mockedProduct,
    });
    expect(getPublicProductsActions.success([mockedProduct])).toMatchObject({
      type: Actions.GET_PUBLIC_PRODUCTS_SUCCESS,
      payload: [mockedProduct],
    });
    expect(createProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.CREATE_PRODUCT_SUCCESS,
      payload: mockedProduct,
    });
    expect(updateProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.UPDATE_PRODUCT_SUCCESS,
      payload: mockedProduct,
    });
    expect(activateProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.ACTIVATE_PRODUCT_SUCCESS,
      payload: mockedProduct,
    });
    expect(inactivateProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.INACTIVATE_PRODUCT_SUCCESS,
      payload: mockedProduct,
    });
    expect(deleteProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.DELETE_PRODUCT_SUCCESS,
      payload: mockedProduct,
    });
  });

  it('Should return the reset action', () => {
    expect(resetProduct()).toMatchObject({ type: Actions.RESET_PRODUCT });
  });
});
