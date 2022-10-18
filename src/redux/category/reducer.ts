import { Actions, ActionsType, CategoryState } from './types';

const initialState = {
  categories: [],
  isFetching: false,
  error: undefined,
  message: '',
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
        error: action.payload,
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
        clients: categoryNewList,
        isFetching: true,
      };
    case Actions.ACTIVATE_CATEGORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
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
        clients: categoryNewList,
        isFetching: true,
      };
    case Actions.INACTIVATE_CATEGORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
