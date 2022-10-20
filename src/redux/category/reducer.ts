import { Actions, ActionsType, CategoryState } from './types';

const initialState: CategoryState = {
  categories: [],
  isFetching: false,
  error: undefined,
  message: '',
  imageUrl: '',
};
let categoryNewList = [];

export const categoryReducer = (state: CategoryState = initialState, action: ActionsType) => {
  switch (action.type) {
    case Actions.GET_CATEGORIES_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_CATEGORIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.ACTIVATE_CATEGORY_PENDING:
      return {
        ...state,
        isFetching: true,
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
    case Actions.ACTIVATE_CATEGORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.INACTIVATE_CATEGORY_PENDING:
      return {
        ...state,
        isFetching: true,
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
    case Actions.INACTIVATE_CATEGORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.DELETE_CATEGORY_PENDING:
      return {
        ...state,
        isFetching: true,
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
    case Actions.DELETE_CATEGORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
