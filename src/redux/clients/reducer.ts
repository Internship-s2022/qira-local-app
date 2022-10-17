import { Actions, ActionsType } from './types';

const initialState = {
  clients: [],
  isFetching: false,
  error: undefined,
  message: '',
};

export const clientReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case Actions.GET_CLIENT_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_CLIENT_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false,
        error: undefined,
      };
    case Actions.GET_CLIENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
