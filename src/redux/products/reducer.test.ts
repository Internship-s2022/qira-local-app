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
import { mockedProduct, mockedProductInactive } from './actions.test';
import { initialState, productsReducer } from './reducer';
import { Actions, ActionsType } from './types';

const mockedInitialState = {
  ...initialState,
  products: [mockedProductInactive],
};

describe('Products reducer', () => {
  it('Should return the initial state by default', () => {
    const result = productsReducer(undefined, { type: '', payload: '' } as unknown as ActionsType);
    expect(result).toBe(initialState);
  });

  it('Should return the reset actions', () => {
    expect(resetProduct()).toMatchObject({ type: Actions.RESET_PRODUCT });
  });

  it('Should return the correct state for each FETCHING actions', () => {
    const expectedResult = { isFetching: true };
    expect(productsReducer(initialState, getProductsActions.request())).toMatchObject(
      expectedResult,
    );
    expect(productsReducer(initialState, getProductActions.request())).toMatchObject(
      expectedResult,
    );
    expect(productsReducer(initialState, getPublicProductsActions.request())).toMatchObject(
      expectedResult,
    );
    expect(productsReducer(initialState, activateProductActions.request())).toMatchObject(
      expectedResult,
    );
    expect(productsReducer(initialState, createProductActions.request())).toMatchObject(
      expectedResult,
    );
    expect(productsReducer(initialState, deleteProductActions.request())).toMatchObject(
      expectedResult,
    );
    expect(productsReducer(initialState, inactivateProductActions.request())).toMatchObject(
      expectedResult,
    );
    expect(productsReducer(initialState, updateProductActions.request())).toMatchObject(
      expectedResult,
    );
  });

  it('Should return the correct state for each ERROR actions', () => {
    const mockedErrorPayload = { ...initialState, error: true, message: 'There is an error' };
    const mockedError = {
      message: 'There is an error',
      data: undefined,
      error: true,
    };
    expect(productsReducer(initialState, getProductsActions.failure(mockedError))).toMatchObject(
      mockedErrorPayload,
    );
    expect(productsReducer(initialState, getProductActions.failure(mockedError))).toMatchObject(
      mockedErrorPayload,
    );
    expect(
      productsReducer(initialState, getPublicProductsActions.failure(mockedError)),
    ).toMatchObject(mockedErrorPayload);
    expect(
      productsReducer(initialState, activateProductActions.failure(mockedError)),
    ).toMatchObject(mockedErrorPayload);
    expect(productsReducer(initialState, createProductActions.failure(mockedError))).toMatchObject(
      mockedErrorPayload,
    );
    expect(productsReducer(initialState, deleteProductActions.failure(mockedError))).toMatchObject(
      mockedErrorPayload,
    );
    expect(
      productsReducer(initialState, inactivateProductActions.failure(mockedError)),
    ).toMatchObject(mockedErrorPayload);
    expect(productsReducer(initialState, updateProductActions.failure(mockedError))).toMatchObject(
      mockedErrorPayload,
    );
  });

  it('Should return the correct success actions type', () => {
    expect(getProductsActions.success([])).toMatchObject({
      type: Actions.GET_PRODUCTS_SUCCESS,
    });
    expect(getProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.GET_PRODUCT_SUCCESS,
    });
    expect(getPublicProductsActions.success([])).toMatchObject({
      type: Actions.GET_PUBLIC_PRODUCTS_SUCCESS,
    });
    expect(createProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.CREATE_PRODUCT_SUCCESS,
    });
    expect(deleteProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.DELETE_PRODUCT_SUCCESS,
    });
    expect(activateProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.ACTIVATE_PRODUCT_SUCCESS,
    });
    expect(inactivateProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.INACTIVATE_PRODUCT_SUCCESS,
    });
    expect(updateProductActions.success(mockedProduct)).toMatchObject({
      type: Actions.UPDATE_PRODUCT_SUCCESS,
    });
  });

  it('Should return the correct state for GET_PRODUCTS_SUCCESS action', () => {
    expect(
      productsReducer(mockedInitialState, getProductsActions.success([mockedProduct])),
    ).toMatchObject({
      products: [mockedProduct],
      isFetching: false,
    });
  });

  it('Should return the correct state for GET_PRODUCT_SUCCESS action', () => {
    expect(
      productsReducer(mockedInitialState, getProductActions.success(mockedProduct)),
    ).toMatchObject({
      selectedProduct: mockedProduct,
      isFetching: false,
    });
  });

  it('Should return the correct state for ACTIVATE_PRODUCT_SUCCESS action', () => {
    expect(
      productsReducer(mockedInitialState, activateProductActions.success(mockedProduct)),
    ).toMatchObject({
      products: [mockedProduct],
      isFetching: false,
    });
  });

  it('Should return the correct state for CREATE_PRODUCT_SUCCESS action', () => {
    expect(
      productsReducer(mockedInitialState, createProductActions.success(mockedProduct)),
    ).toMatchObject({
      products: [mockedProductInactive, mockedProduct],
      isFetching: false,
      message: 'Product created successfully',
      error: undefined,
    });
  });
});
