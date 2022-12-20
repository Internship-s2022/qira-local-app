import {
  activateCategoryActions,
  createCategoryActions,
  deleteCategoryActions,
  getCategoriesActions,
  getCategoryActions,
  getPublicCategoriesActions,
  inactivateCategoryActions,
  resetCategory,
  updateCategoryActions,
} from '../actions';
import { categoryReducer, initialState } from '../reducer';
import { ActionsType } from '../types';
import { mockedCategory, mockedError } from './actions.test';

const initialStateMocked = {
  ...initialState,
  categories: [mockedCategory],
};

describe('User Reducer', () => {
  it('Should return the initial state by default', () => {
    const result = categoryReducer(undefined, { type: '', payload: '' } as unknown as ActionsType);

    expect(result).toBe(initialState);
  });

  it('Should return the correct state for each RESET_CATEGORY actions', () => {
    expect(categoryReducer(initialState, resetCategory())).toMatchObject({
      selectedCategory: undefined,
    });
  });

  it('Should return the correct state for each FETCHING actions', () => {
    const expectedResult = { isFetching: true };

    expect(categoryReducer(initialState, activateCategoryActions.request())).toMatchObject(
      expectedResult,
    );
    expect(categoryReducer(initialState, createCategoryActions.request())).toMatchObject(
      expectedResult,
    );
    expect(categoryReducer(initialState, deleteCategoryActions.request())).toMatchObject(
      expectedResult,
    );
    expect(categoryReducer(initialState, getCategoriesActions.request())).toMatchObject(
      expectedResult,
    );
    expect(categoryReducer(initialState, getCategoryActions.request())).toMatchObject(
      expectedResult,
    );
    expect(categoryReducer(initialState, getPublicCategoriesActions.request())).toMatchObject(
      expectedResult,
    );
    expect(categoryReducer(initialState, inactivateCategoryActions.request())).toMatchObject(
      expectedResult,
    );
    expect(categoryReducer(initialState, updateCategoryActions.request())).toMatchObject(
      expectedResult,
    );
  });

  it('Should return the correct state for each ERROR actions', () => {
    expect(
      categoryReducer(initialState, activateCategoryActions.failure(mockedError)),
    ).toMatchObject({
      error: mockedError.error,
      message: mockedError.message,
      isFetching: false,
    });
    expect(categoryReducer(initialState, createCategoryActions.failure(mockedError))).toMatchObject(
      {
        error: mockedError.error,
        message: mockedError.message,
        isFetching: false,
      },
    );
    expect(categoryReducer(initialState, deleteCategoryActions.failure(mockedError))).toMatchObject(
      {
        error: mockedError.error,
        message: mockedError.message,
        isFetching: false,
      },
    );
    expect(categoryReducer(initialState, getCategoriesActions.failure(mockedError))).toMatchObject({
      error: mockedError.error,
      message: mockedError.message,
      isFetching: false,
    });
    expect(categoryReducer(initialState, getCategoryActions.failure(mockedError))).toMatchObject({
      error: mockedError.error,
      message: mockedError.message,
      isFetching: false,
    });
    expect(
      categoryReducer(initialState, getPublicCategoriesActions.failure(mockedError)),
    ).toMatchObject({
      error: mockedError.error,
      message: mockedError.message,
      isFetching: false,
    });
    expect(
      categoryReducer(initialState, activateCategoryActions.failure(mockedError)),
    ).toMatchObject({
      error: mockedError.error,
      message: mockedError.message,
      isFetching: false,
    });
    expect(
      categoryReducer(initialState, inactivateCategoryActions.failure(mockedError)),
    ).toMatchObject({
      error: mockedError.error,
      message: mockedError.message,
      isFetching: false,
    });
    expect(categoryReducer(initialState, updateCategoryActions.failure(mockedError))).toMatchObject(
      {
        error: mockedError.error,
        message: mockedError.message,
        isFetching: false,
      },
    );
  });
  it('Should return the correct state for GET_CATEGORIES_SUCCESS action', () => {
    expect(
      categoryReducer(initialState, getCategoriesActions.success([mockedCategory])),
    ).toMatchObject({
      isFetching: false,
      error: undefined,
      categories: [mockedCategory],
    });
  });
  it('Should return the correct state for GET_PUBLIC_CATEGORIES_SUCCESS action', () => {
    expect(
      categoryReducer(initialState, getCategoriesActions.success([mockedCategory])),
    ).toMatchObject({
      isFetching: false,
      error: undefined,
      categories: [mockedCategory],
    });
  });
  it('Should return the correct state for GET_CATEGORY_SUCCESS action', () => {
    expect(categoryReducer(initialState, getCategoryActions.success(mockedCategory))).toMatchObject(
      {
        isFetching: false,
        selectedCategory: mockedCategory,
      },
    );
  });
  it('Should return the correct state for CREATE_CATEGORY_SUCCESS action', () => {
    expect(
      categoryReducer(initialStateMocked, createCategoryActions.success(mockedCategory)),
    ).toMatchObject({
      isFetching: false,
      error: undefined,
      categories: [mockedCategory, mockedCategory],
    });
  });

  it('Should return the correct state for ACTIVATE_CATEGORY_SUCCESS action', () => {
    const newMockedCategory = {
      ...mockedCategory,
      isActive: true,
    };
    expect(
      categoryReducer(initialStateMocked, activateCategoryActions.success(newMockedCategory)),
    ).toMatchObject({
      isFetching: false,
      categories: [newMockedCategory],
      error: undefined,
      message: '',
      selectedCategory: undefined,
    });
  });
});
