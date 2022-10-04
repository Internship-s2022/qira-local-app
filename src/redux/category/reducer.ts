import { Actions } from './constants';

const initialState = {
  categories: [],
  isPending: false,
  error: undefined,
  message: '',
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CATEGORIES_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case Actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isPending: false,
        error: undefined,
      };
    case Actions.GET_CATEGORIES_ERROR:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
