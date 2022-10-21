import { Actions, ActionsType, CategoryState } from './types';

const initialState: CategoryState = {
  categories: [],
  isFetching: false,
  error: undefined,
  message: '',
  category: undefined,
};
let categoryNewList = [];

export const categoryReducer = (state: CategoryState = initialState, action: ActionsType) => {
  switch (action.type) {
    case Actions.GET_CATEGORIES_PENDING:
    case Actions.ACTIVATE_CATEGORY_PENDING:
    case Actions.INACTIVATE_CATEGORY_PENDING:
    case Actions.DELETE_CATEGORY_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_CATEGORIES_ERROR:
    case Actions.ACTIVATE_CATEGORY_ERROR:
    case Actions.INACTIVATE_CATEGORY_ERROR:
    case Actions.DELETE_CATEGORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        category: action.payload,
      };
    case Actions.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        message: 'Category created successfully',
        category: action.payload,
      };
    case Actions.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        message: 'Category updated successfully',
        category: action.payload,
      };
    case Actions.ACTIVATE_CATEGORY_SUCCESS:
      categoryNewList = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        } else {
          return category;
        }
      });
      return {
        ...state,
        categories: categoryNewList,
        isFetching: false,
      };
    case Actions.INACTIVATE_CATEGORY_SUCCESS:
      categoryNewList = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        } else {
          return category;
        }
      });
      return {
        ...state,
        categories: categoryNewList,
        isFetching: false,
      };
    case Actions.DELETE_CATEGORY_SUCCESS:
      categoryNewList = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        } else {
          return category;
        }
      });
      return {
        ...state,
        categories: categoryNewList.filter((category) => category._id !== action.payload._id),
        isFetching: false,
      };
    default:
      return state;
  }
};
