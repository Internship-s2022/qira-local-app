import { Actions, ActionsType } from './types';

const initialState = {
  categories: [],
  isFetching: false,
  error: undefined,
  message: '',
};

export const categoryReducer = (state = initialState, action: ActionsType) => {
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
    default:
      return state;
  }
};
