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
import { Actions } from '../types';

export const mockedImage = {
  key: '',
  url: '',
};

export const mockedCategory = {
  _id: '63617504bc1a382119d49e5c',
  name: 'herbicidas',
  image: mockedImage,
  url: 'herbicidas',
  isActive: false,
  logicDelete: true,
};

export const mockedError = {
  error: true,
  message: 'mocked error',
  data: undefined,
};

describe('Category Actions', () => {
  it('Should return the reset actions', () => {
    expect(resetCategory()).toMatchObject({
      type: Actions.RESET_CATEGORY,
    });
  });
  it('Should return the fetching actions', () => {
    expect(activateCategoryActions.request()).toMatchObject({
      type: Actions.ACTIVATE_CATEGORY_PENDING,
    });
    expect(createCategoryActions.request()).toMatchObject({
      type: Actions.CREATE_CATEGORY_PENDING,
    });
    expect(deleteCategoryActions.request()).toMatchObject({
      type: Actions.DELETE_CATEGORY_PENDING,
    });
    expect(getCategoriesActions.request()).toMatchObject({
      type: Actions.GET_CATEGORIES_PENDING,
    });
    expect(getCategoryActions.request()).toMatchObject({
      type: Actions.GET_CATEGORY_PENDING,
    });
    expect(getPublicCategoriesActions.request()).toMatchObject({
      type: Actions.GET_PUBLIC_CATEGORIES_PENDING,
    });
    expect(inactivateCategoryActions.request()).toMatchObject({
      type: Actions.INACTIVATE_CATEGORY_PENDING,
    });
    expect(updateCategoryActions.request()).toMatchObject({
      type: Actions.UPDATE_CATEGORY_PENDING,
    });
  });

  it('Should return the error actions', () => {
    expect(activateCategoryActions.failure(mockedError)).toMatchObject({
      type: Actions.ACTIVATE_CATEGORY_ERROR,
      payload: mockedError,
    });
    expect(createCategoryActions.failure(mockedError)).toMatchObject({
      type: Actions.CREATE_CATEGORY_ERROR,
      payload: mockedError,
    });
    expect(deleteCategoryActions.failure(mockedError)).toMatchObject({
      type: Actions.DELETE_CATEGORY_ERROR,
      payload: mockedError,
    });
    expect(getCategoriesActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_CATEGORIES_ERROR,
      payload: mockedError,
    });
    expect(getCategoryActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_CATEGORY_ERROR,
      payload: mockedError,
    });
    expect(getPublicCategoriesActions.failure(mockedError)).toMatchObject({
      type: Actions.GET_PUBLIC_CATEGORIES_ERROR,
      payload: mockedError,
    });
    expect(inactivateCategoryActions.failure(mockedError)).toMatchObject({
      type: Actions.INACTIVATE_CATEGORY_ERROR,
      payload: mockedError,
    });
    expect(updateCategoryActions.failure(mockedError)).toMatchObject({
      type: Actions.UPDATE_CATEGORY_ERROR,
      payload: mockedError,
    });
  });

  it('Should return the success actions', () => {
    const mockedArrayCategory = [mockedCategory];
    expect(activateCategoryActions.success(mockedCategory)).toMatchObject({
      type: Actions.ACTIVATE_CATEGORY_SUCCESS,
      payload: mockedCategory,
    });
    expect(createCategoryActions.success(mockedCategory)).toMatchObject({
      type: Actions.CREATE_CATEGORY_SUCCESS,
      payload: mockedCategory,
    });
    expect(deleteCategoryActions.success(mockedCategory)).toMatchObject({
      type: Actions.DELETE_CATEGORY_SUCCESS,
      payload: mockedCategory,
    });
    expect(getCategoriesActions.success(mockedArrayCategory)).toMatchObject({
      type: Actions.GET_CATEGORIES_SUCCESS,
      payload: mockedArrayCategory,
    });
    expect(getCategoryActions.success(mockedCategory)).toMatchObject({
      type: Actions.GET_CATEGORY_SUCCESS,
      payload: mockedCategory,
    });
    expect(getPublicCategoriesActions.success(mockedArrayCategory)).toMatchObject({
      type: Actions.GET_PUBLIC_CATEGORIES_SUCCESS,
      payload: mockedArrayCategory,
    });
    expect(inactivateCategoryActions.success(mockedCategory)).toMatchObject({
      type: Actions.INACTIVATE_CATEGORY_SUCCESS,
      payload: mockedCategory,
    });
    expect(updateCategoryActions.success(mockedCategory)).toMatchObject({
      type: Actions.UPDATE_CATEGORY_SUCCESS,
      payload: mockedCategory,
    });
  });
});
