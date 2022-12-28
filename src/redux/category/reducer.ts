import { Actions, ActionsType, CategoryState } from './types';

export const initialState: CategoryState = {
  categories: [],
  isFetching: false,
  error: undefined,
  message: '',
  selectedCategory: undefined,
};

export const categoryReducer = (state = initialState, action: ActionsType): CategoryState => {
  switch (action.type) {
    case Actions.GET_CATEGORIES_PENDING:
    case Actions.GET_PUBLIC_CATEGORIES_PENDING:
    case Actions.GET_CATEGORY_PENDING:
    case Actions.ACTIVATE_CATEGORY_PENDING:
    case Actions.INACTIVATE_CATEGORY_PENDING:
    case Actions.DELETE_CATEGORY_PENDING:
    case Actions.CREATE_CATEGORY_PENDING:
    case Actions.UPDATE_CATEGORY_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_CATEGORIES_ERROR:
    case Actions.GET_PUBLIC_CATEGORIES_ERROR:
    case Actions.GET_CATEGORY_ERROR:
    case Actions.ACTIVATE_CATEGORY_ERROR:
    case Actions.INACTIVATE_CATEGORY_ERROR:
    case Actions.DELETE_CATEGORY_ERROR:
    case Actions.CREATE_CATEGORY_ERROR:
    case Actions.UPDATE_CATEGORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        message: action.payload.message,
      };
    case Actions.GET_CATEGORIES_SUCCESS:
    case Actions.GET_PUBLIC_CATEGORIES_SUCCESS:
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
        selectedCategory: action.payload,
      };
    case Actions.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        categories: [...state.categories, action.payload],
      };
    case Actions.UPDATE_CATEGORY_SUCCESS: {
      const categoryNewList = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        }
        return category;
      });
      return {
        ...state,
        isFetching: false,
        error: undefined,
        categories: categoryNewList,
      };
    }
    case Actions.ACTIVATE_CATEGORY_SUCCESS: {
      const categoryNewList = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        }
        return category;
      });
      return {
        ...state,
        categories: categoryNewList,
        isFetching: false,
      };
    }
    case Actions.INACTIVATE_CATEGORY_SUCCESS: {
      const categoryNewList = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        }
        return category;
      });
      return {
        ...state,
        categories: categoryNewList,
        isFetching: false,
      };
    }
    case Actions.DELETE_CATEGORY_SUCCESS: {
      const categoryNewList = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        }
        return category;
      });
      return {
        ...state,
        categories: categoryNewList.filter((category) => category._id !== action.payload._id),
        isFetching: false,
      };
    }
    case Actions.RESET_CATEGORY:
      return {
        ...state,
        selectedCategory: undefined,
      };
    default:
      return state;
  }
};
